"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { WORLD } from "@/lib/space/journey";
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
    float veil = smoothstep(0.5, 0.05, d);
    float bands = sin((vUv.x + vUv.y) * 9.0) * 0.08 + 0.92;
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
          uOpacity: { value: 0.09 },
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
        position={[WORLD.constellation.x - 8, 3, WORLD.constellation.z - 6]}
        rotation={[0.4, 0.6, 0.2]}
        color="#355CFF"
        scale={[28, 16, 1]}
      />
      <NebulaPlane
        position={[WORLD.projects.x + 10, -4, WORLD.projects.z - 8]}
        rotation={[-0.3, -0.5, 0.4]}
        color="#7557FF"
        scale={[34, 18, 1]}
      />
      <NebulaPlane
        position={[WORLD.beacon.x - 6, 2, WORLD.beacon.z - 4]}
        rotation={[0.2, 0.3, -0.2]}
        color="#4EA8FF"
        scale={[22, 12, 1]}
      />
    </group>
  );
}
