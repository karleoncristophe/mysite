export type GraphicsQuality = "high" | "medium" | "low";

export type QualityProfile = {
  quality: GraphicsQuality;
  dpr: number;
  starFar: number;
  starMid: number;
  starNear: number;
  dust: number;
  nebula: boolean;
  pointerParallax: boolean;
  asteroids: number;
  probes: boolean;
  labels: "all" | "current";
};

const PROFILES: Record<GraphicsQuality, Omit<QualityProfile, "quality" | "dpr">> = {
  high: {
    starFar: 3800,
    starMid: 1200,
    starNear: 220,
    dust: 120,
    nebula: true,
    pointerParallax: true,
    asteroids: 280,
    probes: true,
    labels: "all",
  },
  medium: {
    starFar: 2000,
    starMid: 700,
    starNear: 100,
    dust: 60,
    nebula: true,
    pointerParallax: true,
    asteroids: 120,
    probes: true,
    labels: "current",
  },
  low: {
    starFar: 800,
    starMid: 240,
    starNear: 0,
    dust: 0,
    nebula: false,
    pointerParallax: false,
    asteroids: 48,
    probes: false,
    labels: "current",
  },
};

export function detectGraphicsQuality(): GraphicsQuality {
  if (typeof window === "undefined") return "medium";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return "low";

  const touch = window.matchMedia("(pointer: coarse)").matches;
  const width = window.innerWidth;
  const dpr = window.devicePixelRatio || 1;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;

  if (width < 768 || (memory !== undefined && memory <= 2)) {
    return "low";
  }
  if (touch || width < 1200 || dpr >= 2.5 || cores <= 4 || (memory !== undefined && memory <= 4)) {
    return "medium";
  }
  if (cores <= 6) {
    return "medium";
  }
  return "high";
}

export function getQualityProfile(quality: GraphicsQuality): QualityProfile {
  const dprCap = quality === "high" ? 1.5 : quality === "medium" ? 1.25 : 1;
  const raw = typeof window === "undefined" ? 1 : window.devicePixelRatio || 1;
  return {
    quality,
    dpr: Math.min(raw, dprCap),
    ...PROFILES[quality],
  };
}
