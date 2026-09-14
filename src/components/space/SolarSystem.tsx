"use client";

import { useEffect, useMemo, useState } from "react";
import { BODIES, MODEL, getFocusedBody, qualityRank, type BodyId } from "@/lib/space/bodies";
import { inspectTarget, journeyProgress } from "@/lib/space/stores";
import type { QualityProfile } from "@/lib/space/quality";
import { useStore } from "@/hooks/useScrollJourney";
import PlanetAsset, { preloadPlanet } from "@/components/space/PlanetAsset";
import Sun, { preloadSun } from "@/components/space/Sun";
import AsteroidBelt from "@/components/space/AsteroidBelt";

type Props = {
  quality: QualityProfile;
  reducedMotion: boolean;
};

export default function SolarSystem({ quality, reducedMotion }: Props) {
  const [progress, setProgress] = useState(0);
  const inspecting = useStore(inspectTarget);
  const rank = qualityRank(quality.quality);

  useEffect(() => {
    let bucket = -1;
    const sync = () => {
      const next = journeyProgress.get();
      const current = Math.floor(next * 16);
      if (current === bucket) return;
      bucket = current;
      setProgress(next);
    };
    sync();
    return journeyProgress.subscribe(sync);
  }, []);

  useEffect(() => {
    const canLoad = (id: string) => {
      const body = BODIES.find((item) => item.id === id);
      return Boolean(body?.src && qualityRank(body.qualityMin) <= rank);
    };
    preloadPlanet(MODEL.earth);
    preloadPlanet(MODEL.moon);
    ["mars"].forEach((id) => {
      const body = BODIES.find((item) => item.id === id);
      if (body?.src && canLoad(id)) preloadPlanet(body.src);
    });
    const earthWave = window.setTimeout(() => {
      ["astronaut", "jupiter"].forEach((id) => {
        const body = BODIES.find((item) => item.id === id);
        if (body?.src && canLoad(id)) preloadPlanet(body.src);
      });
    }, 1600);
    const outerWave = window.setTimeout(() => {
      preloadSun(MODEL.sun);
      BODIES.forEach((body) => {
        if (body.src && qualityRank(body.qualityMin) <= rank) preloadPlanet(body.src);
      });
    }, 4200);
    return () => {
      window.clearTimeout(earthWave);
      window.clearTimeout(outerWave);
    };
  }, [rank]);

  const focused = getFocusedBody(progress);
  const visible = useMemo(() => {
    return BODIES.filter((body) => {
      if (qualityRank(body.qualityMin) > rank) return false;
      if (body.id === "sun") return false;
      if (body.id === "parker") return false;
      if (body.id === "astronaut") return quality.probes && progress < 0.34;
      if (body.id === "satellite") return quality.probes && progress >= 0.42 && progress < 0.58;
      const ahead = progress + 0.04 >= body.focusFrom;
      const behind = progress > body.focusTo + 0.06;
      return ahead && !behind;
    });
  }, [progress, quality.probes, rank]);

  return (
    <group>
      <Sun
        reducedMotion={reducedMotion}
        showLabel={focused.id === "sun" && !reducedMotion && !inspecting}
      />
      {progress > 0.28 && <AsteroidBelt quality={quality} />}
      {visible.map((body) => {
        if (body.id === "sun") return null;
        const showLabel =
          !inspecting &&
          (quality.labels === "all"
            ? focused.id === body.id || nearbyMoon(focused.id, body.id)
            : focused.id === body.id);
        return (
          <PlanetAsset
            key={body.id}
            body={body}
            quality={quality}
            reducedMotion={reducedMotion}
            showLabel={showLabel && !reducedMotion}
          />
        );
      })}
    </group>
  );
}

function nearbyMoon(focus: BodyId, id: BodyId) {
  return focus === "earth" && id === "moon";
}
