"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { BODY_MAP, getBodyWorldPosition, getFocusedBody, isCraftBody, isOrbitingBody, type BodyId } from "@/lib/space/bodies";
import { applyScreenOffset } from "@/lib/space/framing";
import { getJourneyPose } from "@/lib/space/journey";
import { hoveredBody, inspectPose, inspectTarget, journeyProgress } from "@/lib/space/stores";
import type { QualityProfile } from "@/lib/space/quality";

const tmpCam = new THREE.Vector3();
const tmpLook = new THREE.Vector3();
const tmpUp = new THREE.Vector3(0, 1, 0);
const desiredQuat = new THREE.Quaternion();
const lookMatrix = new THREE.Matrix4();
const inspectOffset = new THREE.Vector3(-1.75, 0.48, 3.7);
const inspectDir = inspectOffset.clone().normalize();
const inspectSpread = inspectOffset.length();
const restPointer = new THREE.Vector2();

type Props = {
  quality: QualityProfile;
  reducedMotion: boolean;
};

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / Math.max(1e-4, edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function copyStage(width: number) {
  const copyPx = Math.min(width * 0.9, 36 * 16);
  const minStage = width < 640 ? 0.46 : width < 980 ? 0.42 : 0.45;
  return Math.min(copyPx / width, 1 - minStage);
}

function frameLookBesideCopy(
  cam: THREE.Vector3,
  look: THREE.Vector3,
  width: number,
  height: number,
  fovDeg: number,
) {
  const leftFrac = copyStage(width);
  applyScreenOffset(
    cam,
    look,
    width,
    height,
    fovDeg,
    leftFrac + (1 - leftFrac) * 0.34,
    height < 760 ? 0.56 : 0.5,
  );
}

function frameBodyBesideCopy(
  cam: THREE.Vector3,
  look: THREE.Vector3,
  width: number,
  height: number,
  fovDeg: number,
  radius: number,
  progress: number,
) {
  const leftFrac = copyStage(width);
  const dist = Math.max(0.25, cam.distanceTo(look));
  const halfW = Math.tan(THREE.MathUtils.degToRad(fovDeg) * 0.5) * dist * width / Math.max(1, height);
  const screenRadius = radius / Math.max(0.001, 2 * halfW);
  const opening = width < 520 ? 1 - smoothstep(0.04, 0.1, progress) : 0;
  const stageCenter = width < 768 ? 0.82 - opening * 0.08 : 0.76;
  const targetX = Math.min(0.96 - screenRadius, Math.max(stageCenter, leftFrac + 0.06 + screenRadius));
  applyScreenOffset(cam, look, width, height, fovDeg, targetX, (height < 760 ? 0.53 : 0.5) + opening * 0.22);
}

export default function CameraRig({ quality, reducedMotion }: Props) {
  const { camera, size } = useThree();
  const look = useRef(new THREE.Vector3(6.5, -0.38, -73.3));
  const targetPointer = useRef(new THREE.Vector2());
  const smoothPointer = useRef(new THREE.Vector2());
  const lastInspect = useRef<string | null>(null);
  const followLock = useRef(false);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      targetPointer.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -((event.clientY / window.innerHeight) * 2 - 1),
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame(({ clock }, delta) => {
    const inspecting = inspectTarget.get();
    if (inspecting !== lastInspect.current) {
      lastInspect.current = inspecting;
      followLock.current = false;
    }
    const body = inspecting ? BODY_MAP[inspecting as BodyId] : undefined;
    const orbiting = Boolean(body && isOrbitingBody(body.id));

    if (body) {
      const [x, y, z] = getBodyWorldPosition(body.id, clock.elapsedTime);
      tmpLook.set(x, y, z);
      const framed = Math.max(body.radius, isCraftBody(body.id) || orbiting ? 0.22 : 0);
      const fov = "fov" in camera ? camera.fov : 42;
      const aspect = size.width / Math.max(1, size.height);
      const fitDistance = body.radius / (0.72 * aspect * Math.tan(THREE.MathUtils.degToRad(fov / 2)));
      const dist = Math.max(framed * 1.35, Math.max(framed * inspectSpread, fitDistance) / inspectPose.zoom);
      tmpCam.copy(tmpLook).addScaledVector(inspectDir, dist);
      if (size.width < 768) {
        applyScreenOffset(tmpCam, tmpLook, size.width, size.height, fov, 0.5, 0.38);
      }
    } else {
      const t = reducedMotion ? 0 : journeyProgress.get();
      getJourneyPose(t, tmpCam, tmpLook);
      const fov = "fov" in camera ? camera.fov : 42;
      if (t >= 0.96) {
        frameLookBesideCopy(tmpCam, tmpLook, size.width, size.height, fov);
      } else if (t < 0.44 || t >= 0.56) {
        const focused = getFocusedBody(t);
        const inFocus = t >= focused.focusFrom && t < focused.focusTo && focused.id !== "voyager";
        if (inFocus) {
          const [x, y, z] = getBodyWorldPosition(focused.id, clock.elapsedTime);
          tmpLook.set(x, y, z);
          // Give the opening Earth a stronger presence without changing its orbit.
          const opening = 1 - smoothstep(0.04, size.width < 520 ? 0.1 : 0.22, t);
          tmpCam.sub(tmpLook).multiplyScalar(1 - opening * 0.24).add(tmpLook);
          const aspect = size.width / Math.max(1, size.height);
          const maxDiameter = size.width < 520 ? 0.3 + opening * 0.16 : size.width < 768 ? 0.3 : 0.36;
          const minDistance = focused.radius / (maxDiameter * aspect * Math.tan(THREE.MathUtils.degToRad(fov / 2)));
          const minDiameter = size.width < 520 ? 0.22 + opening * 0.2 : size.width < 768 ? 0.22 : 0.2;
          const maxDistance = focused.radius / (minDiameter * aspect * Math.tan(THREE.MathUtils.degToRad(fov / 2)));
          const distance = THREE.MathUtils.clamp(tmpCam.distanceTo(tmpLook), minDistance, maxDistance);
          tmpCam.sub(tmpLook).setLength(distance).add(tmpLook);
        }
        frameBodyBesideCopy(
          tmpCam,
          tmpLook,
          size.width,
          size.height,
          fov,
          inFocus ? focused.radius : 0.55,
          t,
        );
      }
    }

    if (orbiting) {
      if (!followLock.current && camera.position.distanceTo(tmpCam) < 0.28) {
        followLock.current = true;
      }
      if (followLock.current) {
        camera.position.copy(tmpCam);
        look.current.copy(tmpLook);
      } else {
        const snap = 1 - Math.exp(-9 * delta);
        camera.position.lerp(tmpCam, snap);
        look.current.lerp(tmpLook, snap);
      }
    } else {
      const damping = 1 - Math.exp(-(body ? 3.4 : 2.2) * delta);
      camera.position.lerp(tmpCam, damping);
      look.current.lerp(tmpLook, damping);
    }

    if (!body && quality.pointerParallax && !reducedMotion) {
      const aiming = Boolean(hoveredBody.get());
      smoothPointer.current.lerp(
        aiming ? restPointer : targetPointer.current,
        1 - Math.exp(-(aiming ? 8 : 4) * delta),
      );
      if (!aiming) {
        camera.position.x += smoothPointer.current.x * 0.06;
        camera.position.y += smoothPointer.current.y * 0.035;
      }
    }

    lookMatrix.lookAt(camera.position, look.current, tmpUp);
    desiredQuat.setFromRotationMatrix(lookMatrix);
    if (orbiting && followLock.current) {
      camera.quaternion.copy(desiredQuat);
    } else {
      camera.quaternion.slerp(desiredQuat, 1 - Math.exp(-3.2 * delta));
    }
  });

  return null;
}
