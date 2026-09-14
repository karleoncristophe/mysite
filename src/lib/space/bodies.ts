import { journeyProgress } from "@/lib/space/stores";

export type BodyId =
  | "sun"
  | "mercury"
  | "venus"
  | "earth"
  | "moon"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune"
  | "parker"
  | "voyager";

export type CelestialBody = {
  id: BodyId;
  name: string;
  type: string;
  feature: string;
  src?: string;
  position: [number, number, number];
  radius: number;
  spin: number;
  inspectable: boolean;
  atmosphere?: string;
  fallback: string;
  loadAt: number;
  focusFrom: number;
  focusTo: number;
  qualityMin: "low" | "medium" | "high";
};

export const MODEL = {
  sun: "/models/solar-system/sun.glb",
  mercury: "/models/solar-system/mercury.glb",
  venus: "/models/solar-system/venus.glb",
  earth: "/models/solar-system/earth.glb",
  moon: "/models/solar-system/moon.glb",
  mars: "/models/solar-system/mars.glb",
  jupiter: "/models/solar-system/jupiter.glb",
  saturn: "/models/solar-system/saturn.glb",
  uranus: "/models/solar-system/uranus.glb",
  neptune: "/models/solar-system/neptune.glb",
  parker: "/models/solar-system/parker.glb",
  voyager: "/models/solar-system/voyager.glb",
} as const;

export const BODIES: CelestialBody[] = [
  {
    id: "sun",
    name: "SOL",
    type: "G-TYPE STAR",
    feature: "SYSTEM PRIMARY",
    src: MODEL.sun,
    position: [0, 0, 0],
    radius: 5.2,
    spin: 0.02,
    inspectable: false,
    fallback: "#FFC46B",
    loadAt: 0.9,
    focusFrom: 2,
    focusTo: 2,
    qualityMin: "low",
  },
  {
    id: "parker",
    name: "PARKER",
    type: "SPACECRAFT",
    feature: "EARTH ORBIT",
    src: MODEL.parker,
    position: [12.8, 0.55, -75.4],
    radius: 0.078,
    spin: 0.4,
    inspectable: true,
    fallback: "#A7B3C7",
    loadAt: 0,
    focusFrom: 0,
    focusTo: 0.28,
    qualityMin: "low",
  },
  {
    id: "mercury",
    name: "MERCURY",
    type: "TERRESTRIAL",
    feature: "INNER SYSTEM",
    src: MODEL.mercury,
    position: [8.6, 0.35, -26],
    radius: 0.52,
    spin: 0.12,
    inspectable: true,
    fallback: "#8a8175",
    loadAt: 0.9,
    focusFrom: 2,
    focusTo: 2,
    qualityMin: "low",
  },
  {
    id: "venus",
    name: "VENUS",
    type: "TERRESTRIAL",
    feature: "DENSE ATMOSPHERE",
    src: MODEL.venus,
    position: [9.4, -0.25, -48],
    radius: 0.9,
    spin: 0.04,
    inspectable: true,
    atmosphere: "#ffb07a",
    fallback: "#c4844a",
    loadAt: 0.9,
    focusFrom: 2,
    focusTo: 2,
    qualityMin: "low",
  },
  {
    id: "earth",
    name: "EARTH",
    type: "HABITABLE WORLD",
    feature: "ORBITAL APPROACH",
    src: MODEL.earth,
    position: [12.2, -0.35, -73.2],
    radius: 1.68,
    spin: 0.08,
    inspectable: true,
    atmosphere: "#6eb6ff",
    fallback: "#2f6dad",
    loadAt: 0,
    focusFrom: 0,
    focusTo: 0.28,
    qualityMin: "low",
  },
  {
    id: "moon",
    name: "MOON",
    type: "NATURAL SATELLITE",
    feature: "EARTH COMPANION",
    src: MODEL.moon,
    position: [14.1, 0.35, -71.4],
    radius: 0.3,
    spin: 0.03,
    inspectable: true,
    fallback: "#9aa3ad",
    loadAt: 0,
    focusFrom: 0,
    focusTo: 0.28,
    qualityMin: "low",
  },
  {
    id: "mars",
    name: "MARS",
    type: "TERRESTRIAL",
    feature: "EXPERIENCE LOG",
    src: MODEL.mars,
    position: [10.5, 0.22, -93.6],
    radius: 1.02,
    spin: 0.09,
    inspectable: true,
    atmosphere: "#ff8a3d",
    fallback: "#b55232",
    loadAt: 0.14,
    focusFrom: 0.28,
    focusTo: 0.44,
    qualityMin: "low",
  },
  {
    id: "jupiter",
    name: "JUPITER",
    type: "GAS GIANT",
    feature: "FLAGSHIP MISSIONS",
    src: MODEL.jupiter,
    position: [15.4, -1.4, -152],
    radius: 2.95,
    spin: 0.14,
    inspectable: true,
    atmosphere: "#d9b48c",
    fallback: "#c49a6c",
    loadAt: 0.38,
    focusFrom: 0.56,
    focusTo: 0.7,
    qualityMin: "low",
  },
  {
    id: "saturn",
    name: "SATURN",
    type: "GAS GIANT",
    feature: "RING SYSTEM",
    src: MODEL.saturn,
    position: [14.2, 1.7, -192],
    radius: 2.5,
    spin: 0.11,
    inspectable: true,
    fallback: "#e6c992",
    loadAt: 0.52,
    focusFrom: 0.7,
    focusTo: 0.82,
    qualityMin: "low",
  },
  {
    id: "uranus",
    name: "URANUS",
    type: "ICE GIANT",
    feature: "AVAILABLE FOR WORK",
    src: MODEL.uranus,
    position: [13.2, -0.55, -228],
    radius: 1.62,
    spin: 0.07,
    inspectable: true,
    atmosphere: "#9fd6e6",
    fallback: "#7ec4d4",
    loadAt: 0.64,
    focusFrom: 0.82,
    focusTo: 0.92,
    qualityMin: "low",
  },
  {
    id: "neptune",
    name: "NEPTUNE",
    type: "ICE GIANT",
    feature: "COMMUNICATIONS",
    src: MODEL.neptune,
    position: [13.6, 0.75, -258],
    radius: 1.55,
    spin: 0.08,
    inspectable: true,
    atmosphere: "#4ea8ff",
    fallback: "#355cff",
    loadAt: 0.78,
    focusFrom: 0.92,
    focusTo: 0.96,
    qualityMin: "low",
  },
  {
    id: "voyager",
    name: "VOYAGER 1",
    type: "INTERSTELLAR PROBE",
    feature: "DISTANCE INCREASING",
    src: MODEL.voyager,
    position: [8.8, 0.28, -264],
    radius: 1.05,
    spin: 0.12,
    inspectable: true,
    fallback: "#9aa7b8",
    loadAt: 0.82,
    focusFrom: 0.96,
    focusTo: 1,
    qualityMin: "low",
  },
];

export const BODY_MAP = Object.fromEntries(BODIES.map((body) => [body.id, body])) as Record<
  BodyId,
  CelestialBody
>;

export const ASTEROID_BELT = {
  center: [8.2, 0.2, -124] as [number, number, number],
  radius: 11,
  width: 3.4,
};

const PRIMARY_FOCUS: BodyId[] = [
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

export function getFocusedBody(progress: number) {
  const p = Math.min(1, Math.max(0, progress));
  if (p >= 0.96) return BODY_MAP.voyager;
  return (
    BODIES.find(
      (body) => PRIMARY_FOCUS.includes(body.id) && p >= body.focusFrom && p < body.focusTo,
    ) ?? BODY_MAP.earth
  );
}

export const BODY_APPEAR_LEAD = 0.09;
export const BODY_DISAPPEAR_LAG = 0.08;

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / Math.max(1e-4, edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

const EARTH_SYSTEM: BodyId[] = ["earth", "moon", "parker"];

export function isEarthSystem(id: BodyId) {
  return EARTH_SYSTEM.includes(id);
}

export function isOrbitingBody(id: BodyId) {
  return id === "moon" || id === "parker" || id === "voyager";
}

export function isCraftBody(id: BodyId) {
  return id === "parker" || id === "voyager";
}

export function isCompanionBody(a: BodyId, b: BodyId) {
  return a !== b && isEarthSystem(a) && isEarthSystem(b);
}

function orbitAround(
  center: readonly [number, number, number],
  elapsed: number,
  speed: number,
  radius: number,
  yAmp: number,
  phase = 0,
  zScale = 1,
): [number, number, number] {
  const angle = elapsed * speed + phase;
  return [
    center[0] + Math.cos(angle) * radius,
    center[1] + Math.sin(angle) * yAmp,
    center[2] + Math.sin(angle) * radius * zScale,
  ];
}

export function getMoonPosition(elapsed: number): [number, number, number] {
  return orbitAround(BODY_MAP.earth.position, elapsed, 0.22, 2.55, 0.32);
}

export function getParkerPosition(elapsed: number): [number, number, number] {
  return orbitAround(BODY_MAP.earth.position, elapsed, 0.7, 1.96, 0.38, 2.1, 0.9);
}

export function getVoyagerPosition(elapsed: number): [number, number, number] {
  const t = smoothstep(0.96, 1, journeyProgress.get());
  const drift = Math.sin(elapsed * 0.07) * 0.04;
  return [
    8.45 + (7.95 - 8.45) * t,
    0.28 + (0.1 - 0.28) * t + drift,
    -266 + (-269 + 266) * t,
  ];
}

export function getBodyWorldPosition(id: BodyId, elapsed: number): [number, number, number] {
  if (id === "moon") return getMoonPosition(elapsed);
  if (id === "parker") return getParkerPosition(elapsed);
  if (id === "voyager") return getVoyagerPosition(elapsed);
  return BODY_MAP[id].position;
}

export function isBodyOnJourney(body: CelestialBody, progress: number) {
  if (body.id === "voyager") return progress >= 0.945;
  return progress + BODY_APPEAR_LEAD >= body.focusFrom && progress <= body.focusTo + BODY_DISAPPEAR_LAG;
}

export function getBodyAppearScale(body: CelestialBody, progress: number, reducedMotion: boolean) {
  if (body.id === "voyager") {
    if (reducedMotion) return progress >= 0.96 ? 1 : 0.03;
    return 0.03 + smoothstep(0.95, 0.975, progress) * 0.97;
  }
  if (reducedMotion || body.focusFrom <= 0) return 1;
  const spawn = body.focusFrom - BODY_APPEAR_LEAD;
  const grown = body.focusFrom - 0.012;
  const shrinkStart = body.focusTo + 0.02;
  const gone = body.focusTo + BODY_DISAPPEAR_LAG;
  const arrive = smoothstep(spawn, Math.max(spawn + 0.05, grown), progress);
  const leave = 1 - smoothstep(shrinkStart, gone, progress);
  return 0.03 + arrive * leave * 0.97;
}

export function qualityRank(level: "low" | "medium" | "high"): number {
  if (level === "low") return 0;
  if (level === "medium") return 1;
  return 2;
}
