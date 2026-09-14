"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { BODY_MAP, type BodyId } from "@/lib/space/bodies";
import { cameraCurve, lookCurve } from "@/lib/space/journey";
import { hoveredBody, inspectPose, inspectTarget, journeyProgress } from "@/lib/space/stores";
import type { QualityProfile } from "@/lib/space/quality";

const tmpCam = new THREE.Vector3();
const tmpLook = new THREE.Vector3();
const tmpUp = new THREE.Vector3(0, 1, 0);
const desiredQuat = new THREE.Quaternion();
const lookMatrix = new THREE.Matrix4();
const restPointer = new THREE.Vector2();

type Props = {
  quality: QualityProfile;
  reducedMotion: boolean;
};

export default function CameraRig({ quality, reducedMotion }: Props) {
  const { camera } = useThree();
  const look = useRef(new THREE.Vector3(6.5, -0.38, -73.3));
  const targetPointer = useRef(new THREE.Vector2());
  const smoothPointer = useRef(new THREE.Vector2());

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

  useFrame((_, delta) => {
    const inspecting = inspectTarget.get();
    const body = inspecting ? BODY_MAP[inspecting as BodyId] : undefined;

    if (body) {
      const radius = Math.max(body.radius, 1.08) * inspectPose.zoom;
      tmpLook.set(body.position[0], body.position[1], body.position[2]);
      tmpCam.set(
        body.position[0] - radius * 1.75,
        body.position[1] + radius * 0.48,
        body.position[2] + radius * 3.7,
      );
    } else {
      const t = reducedMotion ? 0 : journeyProgress.get();
      cameraCurve.getPoint(t, tmpCam);
      lookCurve.getPoint(t, tmpLook);
    }

    const damping = 1 - Math.exp(-(body ? 3.4 : 2.2) * delta);
    camera.position.lerp(tmpCam, damping);
    look.current.lerp(tmpLook, damping);

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
    camera.quaternion.slerp(desiredQuat, 1 - Math.exp(-3.2 * delta));
  });

  return null;
}
