"use client";

import { useFrame } from "@react-three/fiber";
import { hoveredBody, inspectTarget, orbitTime } from "@/lib/space/stores";
import type { QualityProfile } from "@/lib/space/quality";
import CameraRig from "@/components/space/CameraRig";
import StarField from "@/components/space/StarField";
import CosmicDust from "@/components/space/CosmicDust";
import Nebula from "@/components/space/Nebula";
import SolarSystem from "@/components/space/SolarSystem";

type Props = {
  quality: QualityProfile;
  reducedMotion: boolean;
};

export default function SpaceScene({ quality, reducedMotion }: Props) {
  useFrame((_, delta) => {
    if (!reducedMotion && !inspectTarget.get() && !hoveredBody.get()) {
      orbitTime.elapsed += Math.min(delta, 0.05);
    }
  }, -2);

  return (
    <>
      <color attach="background" args={["#020308"]} />
      <ambientLight intensity={0.12} />
      <hemisphereLight args={["#24355a", "#050308", 0.38]} />
      <directionalLight color="#9ec7ff" intensity={0.42} position={[-18, 22, 28]} />
      <CameraRig quality={quality} reducedMotion={reducedMotion} />
      <StarField quality={quality} />
      <CosmicDust quality={quality} />
      <Nebula quality={quality} />
      <SolarSystem quality={quality} reducedMotion={reducedMotion} />
    </>
  );
}
