"use client";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { spaceReady } from "@/lib/space/stores";
import type { QualityProfile } from "@/lib/space/quality";
import SpaceScene from "@/components/space/SpaceScene";

type Props = {
  quality: QualityProfile;
  reducedMotion: boolean;
};

export default function SpaceCanvas({ quality, reducedMotion }: Props) {
  return (
    <Canvas
      dpr={quality.dpr}
      gl={{
        antialias: quality.quality !== "low",
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      camera={{ fov: 42, near: 0.12, far: 420, position: [1.55, 0.4, -69.2] }}
      frameloop={reducedMotion ? "demand" : "always"}
      onCreated={({ gl, scene, invalidate }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.setClearColor("#020308");
        scene.background = new THREE.Color("#020308");
        spaceReady.set(true);
        invalidate();
      }}
    >
      <SpaceScene quality={quality} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
