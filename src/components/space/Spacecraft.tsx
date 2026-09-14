"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { craftCurve } from "@/lib/space/journey";
import { getEasedJourney, journeyProgress } from "@/lib/space/stores";
import type { QualityProfile } from "@/lib/space/quality";

const tmp = new THREE.Vector3();
const tangent = new THREE.Vector3();
const look = new THREE.Vector3();
const up = new THREE.Vector3(0, 1, 0);
const matrix = new THREE.Matrix4();
const quat = new THREE.Quaternion();

export default function Spacecraft({
  quality,
  reducedMotion,
}: {
  quality: QualityProfile;
  reducedMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const bodyMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#9aa7bb",
        metalness: 0.72,
        roughness: 0.28,
      }),
    [],
  );
  const darkMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1b2433",
        metalness: 0.4,
        roughness: 0.5,
      }),
    [],
  );
  const glowMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#82CFFF",
        toneMapped: false,
      }),
    [],
  );

  useFrame((_, delta) => {
    if (!group.current || reducedMotion) return;
    const t = Math.min(0.98, getEasedJourney(journeyProgress.get()) * 0.92 + 0.02);
    group.current.visible = t > 0.1;
    craftCurve.getPoint(t, tmp);
    craftCurve.getTangent(t, tangent);
    look.copy(tmp).add(tangent);
    group.current.position.lerp(tmp, 1 - Math.exp(-2 * delta));
    matrix.lookAt(tmp, look, up);
    quat.setFromRotationMatrix(matrix);
    group.current.quaternion.slerp(quat, 0.08);
  });

  if (!quality.spacecraft) return null;

  return (
    <group ref={group} scale={0.42}>
      <mesh material={bodyMat}>
        <capsuleGeometry args={[0.12, 0.62, 6, 12]} />
      </mesh>
      <mesh position={[0, 0, 0.48]} rotation={[Math.PI / 2, 0, 0]} material={bodyMat}>
        <coneGeometry args={[0.12, 0.28, 10]} />
      </mesh>
      <mesh position={[0.28, 0, 0]} material={darkMat}>
        <boxGeometry args={[0.42, 0.03, 0.22]} />
      </mesh>
      <mesh position={[-0.28, 0, 0]} material={darkMat}>
        <boxGeometry args={[0.42, 0.03, 0.22]} />
      </mesh>
      <mesh position={[0, 0, -0.42]} material={glowMat}>
        <sphereGeometry args={[0.07, 12, 12]} />
      </mesh>
    </group>
  );
}
