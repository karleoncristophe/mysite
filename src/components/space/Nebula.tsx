"use client";

import { useMemo } from "react";
import * as THREE from "three";
import type { QualityProfile } from "@/lib/space/quality";

const vertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = `
  varying vec2 vUv;
  uniform vec3 uColor;
  uniform float uOpacity;
  void main() {
    vec2 p = vUv - 0.5;
    float d = length(p);
    float veil = smoothstep(0.5, 0.04, d);
    float bands = sin((vUv.x + vUv.y) * 8.0) * 0.08 + 0.92;
    gl_FragColor = vec4(uColor * bands, veil * uOpacity);
  }
`;

function NebulaPlane({
  position,
  rotation,
  color,
  scale,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  scale: [number, number, number];
}) {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: vertex,
        fragmentShader: fragment,
        uniforms: {
          uColor: { value: new THREE.Color(color) },
          uOpacity: { value: 0.045 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      }),
    [color],
  );

  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

export default function Nebula({ quality }: { quality: QualityProfile }) {
  if (!quality.nebula) return null;

  return (
    <group>
      <NebulaPlane
        position={[22, 6, -80]}
        rotation={[0.35, 0.5, 0.15]}
        color="#355CFF"
        scale={[36, 18, 1]}
      />
      <NebulaPlane
        position={[-8, -6, -150]}
        rotation={[-0.25, -0.4, 0.3]}
        color="#7557FF"
        scale={[42, 20, 1]}
      />
      <NebulaPlane
        position={[16, 3, -230]}
        rotation={[0.2, 0.25, -0.15]}
        color="#4EA8FF"
        scale={[30, 16, 1]}
      />
    </group>
  );
}
