"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { seededRandom } from "@/lib/space/noise";
import type { QualityProfile } from "@/lib/space/quality";

export default function CosmicDust({ quality }: { quality: QualityProfile }) {
  const count = quality.dust;
  const { positions, colors } = useMemo(() => {
    const rand = seededRandom(91);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      positions[i3] = (rand() - 0.5) * 18;
      positions[i3 + 1] = (rand() - 0.5) * 10;
      positions[i3 + 2] = (rand() - 0.5) * 24;
      const shade = 0.35 + rand() * 0.4;
      colors[i3] = 0.55 * shade;
      colors[i3 + 1] = 0.7 * shade;
      colors[i3 + 2] = 1 * shade;
    }
    return { positions, colors };
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [colors, positions]);

  if (count === 0) return null;

  return (
    <points geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        size={0.018}
        vertexColors
        transparent
        opacity={0.45}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}
