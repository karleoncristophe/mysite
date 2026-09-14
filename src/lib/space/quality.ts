export type GraphicsQuality = "high" | "medium" | "low";

export type QualityProfile = {
  quality: GraphicsQuality;
  dpr: number;
  starFar: number;
  starMid: number;
  starNear: number;
  dust: number;
  planetSegments: number;
  planetTexture: number;
  clouds: boolean;
  nebula: boolean;
  constellationLinks: boolean;
  projectMoons: boolean;
  spacecraft: boolean;
  pointerParallax: boolean;
};

const PROFILES: Record<GraphicsQuality, Omit<QualityProfile, "quality" | "dpr">> = {
  high: {
    starFar: 4200,
    starMid: 1400,
    starNear: 280,
    dust: 160,
    planetSegments: 96,
    planetTexture: 1024,
    clouds: true,
    nebula: true,
    constellationLinks: true,
    projectMoons: true,
    spacecraft: true,
    pointerParallax: true,
  },
  medium: {
    starFar: 2200,
    starMid: 800,
    starNear: 140,
    dust: 80,
    planetSegments: 64,
    planetTexture: 512,
    clouds: true,
    nebula: true,
    constellationLinks: true,
    projectMoons: false,
    spacecraft: true,
    pointerParallax: true,
  },
  low: {
    starFar: 900,
    starMid: 280,
    starNear: 0,
    dust: 0,
    planetSegments: 32,
    planetTexture: 256,
    clouds: false,
    nebula: false,
    constellationLinks: false,
    projectMoons: false,
    spacecraft: false,
    pointerParallax: false,
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

  if (touch || width < 768 || cores <= 4 || (memory !== undefined && memory <= 4)) {
    return "low";
  }
  if (width < 1200 || dpr >= 2.5 || cores <= 6) {
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
