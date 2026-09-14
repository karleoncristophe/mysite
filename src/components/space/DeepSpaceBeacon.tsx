"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { WORLD } from "@/lib/space/journey";

export default function DeepSpaceBeacon({ reducedMotion }: { reducedMotion: boolean }) {
  const core = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const glow = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#82CFFF",
        transparent: true,
        opacity: 0.85,
        toneMapped: false,
      }),
    [],
  );

  useFrame((state, delta) => {
    const pulse = reducedMotion ? 0.2 : 0.5 + Math.sin(state.clock.elapsedTime * 1.4) * 0.35;
    if (core.current) {
      const material = core.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.55 + pulse * 0.4;
      core.current.scale.setScalar(0.85 + pulse * 0.2);
    }
    if (ring.current && !reducedMotion) {
      ring.current.rotation.z += 0.25 * delta;
    }
  });

  return (
    <group position={WORLD.beacon}>
      <mesh>
        <cylinderGeometry args={[0.08, 0.12, 1.6, 8]} />
        <meshStandardMaterial color="#8ea0b8" metalness={0.7} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.95, 0]} ref={core} material={glow}>
        <sphereGeometry args={[0.18, 16, 16]} />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.62, 0.012, 8, 48]} />
        <meshBasicMaterial color="#4EA8FF" toneMapped={false} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0.4, 0]}>
        <torusGeometry args={[0.92, 0.008, 8, 48]} />
        <meshBasicMaterial color="#7557FF" transparent opacity={0.6} toneMapped={false} />
      </mesh>
      <pointLight color="#82CFFF" intensity={2.4} distance={18} />
    </group>
  );
}
