"use client";

import { useEffect, useState } from "react";
import {
  detectGraphicsQuality,
  getQualityProfile,
  type QualityProfile,
} from "@/lib/space/quality";

export function useGraphicsQuality(): QualityProfile {
  const [profile, setProfile] = useState<QualityProfile>(() => getQualityProfile("medium"));

  useEffect(() => {
    const apply = () => setProfile(getQualityProfile(detectGraphicsQuality()));
    apply();
    window.addEventListener("resize", apply, { passive: true });
    return () => window.removeEventListener("resize", apply);
  }, []);

  return profile;
}
