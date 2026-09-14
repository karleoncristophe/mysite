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
  | "astronaut"
  | "satellite";

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
  astronaut: "/models/solar-system/astronaut.glb",
  satellite: "/models/solar-system/satellite.glb",
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
    type: "SOLAR PROBE",
    feature: "CLOSE APPROACH",
    src: MODEL.parker,
    position: [7.4, 1.85, 8.8],
    radius: 0.22,
    spin: 0.4,
    inspectable: true,
    fallback: "#A7B3C7",
    loadAt: 0.9,
    focusFrom: 2,
    focusTo: 2,
    qualityMin: "medium",
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
    position: [10.6, -0.55, -74],
    radius: 1.08,
    spin: 0.08,
    inspectable: true,
    atmosphere: "#6eb6ff",
    fallback: "#2f6dad",
    loadAt: 0,
    focusFrom: 0,
    focusTo: 0.32,
    qualityMin: "low",
  },
  {
    id: "moon",
    name: "MOON",
    type: "NATURAL SATELLITE",
    feature: "EARTH COMPANION",
    src: MODEL.moon,
    position: [12.4, 0.25, -72.2],
    radius: 0.3,
    spin: 0.03,
    inspectable: true,
    fallback: "#9aa3ad",
    loadAt: 0,
    focusFrom: 0,
    focusTo: 0.32,
    qualityMin: "low",
  },
  {
    id: "astronaut",
    name: "EVA",
    type: "CREW ASSET",
    feature: "HUMAN PRESENCE",
    src: MODEL.astronaut,
    position: [6.8, 0.55, -70],
    radius: 0.42,
    spin: 0.015,
    inspectable: true,
    fallback: "#dce7f7",
    loadAt: 0,
    focusFrom: 0,
    focusTo: 0.34,
    qualityMin: "high",
  },
  {
    id: "mars",
    name: "MARS",
    type: "TERRESTRIAL",
    feature: "EXPERIENCE LOG",
    src: MODEL.mars,
    position: [9.8, 0.85, -102],
    radius: 0.7,
    spin: 0.09,
    inspectable: true,
    atmosphere: "#ff8a3d",
    fallback: "#b55232",
    loadAt: 0.18,
    focusFrom: 0.32,
    focusTo: 0.44,
    qualityMin: "low",
  },
  {
    id: "satellite",
    name: "RELAY",
    type: "SATELLITE",
    feature: "DATA LINK",
    src: MODEL.satellite,
    position: [4.4, 1.8, -118],
    radius: 0.2,
    spin: 0.55,
    inspectable: true,
    fallback: "#8291a8",
    loadAt: 0.28,
    focusFrom: 0.42,
    focusTo: 0.56,
    qualityMin: "high",
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
    position: [11.4, -0.55, -228],
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
    position: [10.2, 0.75, -258],
    radius: 1.55,
    spin: 0.08,
    inspectable: true,
    atmosphere: "#4ea8ff",
    fallback: "#355cff",
    loadAt: 0.78,
    focusFrom: 0.92,
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
  if (p >= 0.92) return BODY_MAP.neptune;
  return (
    BODIES.find(
      (body) => PRIMARY_FOCUS.includes(body.id) && p >= body.focusFrom && p < body.focusTo,
    ) ?? BODY_MAP.earth
  );
}

export function qualityRank(level: "low" | "medium" | "high"): number {
  if (level === "low") return 0;
  if (level === "medium") return 1;
  return 2;
}
