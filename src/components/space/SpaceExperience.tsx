"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { isWebGLAvailable } from "@/lib/space/webgl";
import { useGraphicsQuality } from "@/hooks/useGraphicsQuality";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { spaceReady } from "@/lib/space/stores";
import SpaceErrorBoundary from "@/components/space/SpaceErrorBoundary";

const SpaceCanvas = dynamic(() => import("@/components/space/SpaceCanvas"), {
  ssr: false,
});

export default function SpaceExperience() {
  const quality = useGraphicsQuality();
  const reducedMotion = useReducedMotion();
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const ok = isWebGLAvailable();
    setSupported(ok);
    if (!ok) spaceReady.set(true);
  }, []);

  if (!supported) {
    return <div className="space-fallback" aria-hidden />;
  }

  return (
    <div className="space-canvas" aria-hidden>
      <SpaceErrorBoundary>
        <SpaceCanvas quality={quality} reducedMotion={reducedMotion} />
      </SpaceErrorBoundary>
    </div>
  );
}
