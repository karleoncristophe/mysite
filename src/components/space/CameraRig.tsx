"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { cameraCurve, lookCurve } from "@/lib/space/journey";
import { getEasedJourney, journeyProgress } from "@/lib/space/stores";
import type { QualityProfile } from "@/lib/space/quality";

const tmpCam = new THREE.Vector3();
const tmpLook = new THREE.Vector3();
const tmpUp = new THREE.Vector3(0, 1, 0);
const desiredQuat = new THREE.Quaternion();
const lookMatrix = new THREE.Matrix4();
const pointer = new THREE.Vector2();

type Props = {
  quality: QualityProfile;
  reducedMotion: boolean;
};

export default function CameraRig({ quality, reducedMotion }: Props) {
  const { camera } = useThree();
  const look = useRef(new THREE.Vector3(1.35, -0.35, 0.2));
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
    const t = reducedMotion ? 0 : getEasedJourney(journeyProgress.get());
    cameraCurve.getPoint(t, tmpCam);
    lookCurve.getPoint(t, tmpLook);
    const damping = 1 - Math.exp(-2.4 * delta);
    camera.position.lerp(tmpCam, damping);
    look.current.lerp(tmpLook, damping);

    if (quality.pointerParallax && !reducedMotion) {
      smoothPointer.current.lerp(targetPointer.current, 1 - Math.exp(-4 * delta));
      pointer.copy(smoothPointer.current);
      camera.position.x += pointer.x * 0.18;
      camera.position.y += pointer.y * 0.1;
    }

    lookMatrix.lookAt(camera.position, look.current, tmpUp);
    desiredQuat.setFromRotationMatrix(lookMatrix);
    camera.quaternion.slerp(desiredQuat, 1 - Math.exp(-3.2 * delta));
  });

  return null;
}
