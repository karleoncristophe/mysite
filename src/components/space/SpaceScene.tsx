"use client";

import { WORLD } from "@/lib/space/journey";
import type { QualityProfile } from "@/lib/space/quality";
import CameraRig from "@/components/space/CameraRig";
import StarField from "@/components/space/StarField";
import CosmicDust from "@/components/space/CosmicDust";
import Planet from "@/components/space/Planet";
import Nebula from "@/components/space/Nebula";
import Spacecraft from "@/components/space/Spacecraft";
import TechnologyConstellation from "@/components/space/TechnologyConstellation";
import ProjectSystem from "@/components/space/ProjectSystem";
import DeepSpaceBeacon from "@/components/space/DeepSpaceBeacon";

type Props = {
  quality: QualityProfile;
  reducedMotion: boolean;
};

export default function SpaceScene({ quality, reducedMotion }: Props) {
  return (
    <>
      <color attach="background" args={["#020308"]} />
      <ambientLight intensity={0.045} />
      <hemisphereLight args={["#1a2744", "#050308", 0.28]} />
      <directionalLight
        position={WORLD.sun.toArray()}
        intensity={2.35}
        color="#fff1dc"
      />
      <mesh position={WORLD.sun.toArray()}>
        <sphereGeometry args={[1.8, 16, 16]} />
        <meshBasicMaterial color="#FFC46B" toneMapped={false} />
      </mesh>
      <CameraRig quality={quality} reducedMotion={reducedMotion} />
      <StarField quality={quality} />
      <CosmicDust quality={quality} />
      <Planet quality={quality} reducedMotion={reducedMotion} />
      <Nebula quality={quality} />
      <TechnologyConstellation quality={quality} />
      <ProjectSystem quality={quality} reducedMotion={reducedMotion} />
      <DeepSpaceBeacon reducedMotion={reducedMotion} />
      <Spacecraft quality={quality} reducedMotion={reducedMotion} />
    </>
  );
}
