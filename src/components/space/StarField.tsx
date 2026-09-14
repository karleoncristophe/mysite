"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { seededRandom } from "@/lib/space/noise";
import type { QualityProfile } from "@/lib/space/quality";

function createSoftSprite(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D canvas is required for star sprites.");
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.22, "rgba(226,238,255,0.55)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

type Layer = {
  count: number;
  spread: [number, number, number];
  origin: [number, number, number];
  size: number;
  seed: number;
  sprite: THREE.CanvasTexture;
};

function StarLayer({ count, spread, origin, size, seed, sprite }: Layer) {
  const { positions, colors } = useMemo(() => {
    const rand = seededRandom(seed);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      positions[i3] = origin[0] + (rand() - 0.5) * spread[0];
      positions[i3 + 1] = origin[1] + (rand() - 0.5) * spread[1];
      positions[i3 + 2] = origin[2] + (rand() - 0.5) * spread[2];

      const roll = rand();
      if (roll < 0.78) color.setRGB(0.86, 0.92, 1);
      else if (roll < 0.9) color.setRGB(0.72, 0.84, 1);
      else color.setRGB(1, 0.9, 0.78);

      const brightness = 0.45 + rand() * 0.55;
      colors[i3] = color.r * brightness;
      colors[i3 + 1] = color.g * brightness;
      colors[i3 + 2] = color.b * brightness;
    }

    return { positions, colors };
  }, [count, origin, seed, spread]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [colors, positions]);

  return (
    <points geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        map={sprite}
        size={size}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        opacity={0.9}
      />
    </points>
  );
}

export default function StarField({ quality }: { quality: QualityProfile }) {
  const sprite = useMemo(() => createSoftSprite(), []);

  return (
    <group>
      <StarLayer
        count={quality.starFar}
        spread={[220, 140, 280]}
        origin={[0, 0, -40]}
        size={0.055}
        seed={11}
        sprite={sprite}
      />
      {quality.starMid > 0 && (
        <StarLayer
          count={quality.starMid}
          spread={[90, 50, 140]}
          origin={[0, 0, -36]}
          size={0.09}
          seed={29}
          sprite={sprite}
        />
      )}
      {quality.starNear > 0 && (
        <StarLayer
          count={quality.starNear}
          spread={[30, 18, 70]}
          origin={[0, 0, -20]}
          size={0.16}
          seed={47}
          sprite={sprite}
        />
      )}
    </group>
  );
}
