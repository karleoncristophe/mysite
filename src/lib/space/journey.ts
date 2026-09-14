import * as THREE from "three";

const cameraPoints = [
  new THREE.Vector3(1.55, 0.4, -69.2),
  new THREE.Vector3(1.25, 0.5, -67.8),
  new THREE.Vector3(0.35, 0.7, -66.5),
  new THREE.Vector3(-0.55, 0.95, -78),
  new THREE.Vector3(-0.85, 0.95, -88),
  new THREE.Vector3(-1.35, 1.9, -118),
  new THREE.Vector3(-0.4, 1.55, -136),
  new THREE.Vector3(-0.55, 2.15, -176),
  new THREE.Vector3(-0.9, 1.2, -214),
  new THREE.Vector3(-1.1, 1.3, -244),
];

const lookPoints = [
  new THREE.Vector3(6.5, -0.38, -73.3),
  new THREE.Vector3(6.7, -0.32, -73.6),
  new THREE.Vector3(6.2, -0.22, -74),
  new THREE.Vector3(4.6, 0.08, -88),
  new THREE.Vector3(6.1, 0.2, -94),
  new THREE.Vector3(3.0, 0.15, -124),
  new THREE.Vector3(5.8, -0.85, -152),
  new THREE.Vector3(5.2, 1.15, -192),
  new THREE.Vector3(4.1, -0.2, -228),
  new THREE.Vector3(3.7, 0.45, -258),
];

export const cameraCurve = new THREE.CatmullRomCurve3(cameraPoints, false, "catmullrom", 0.16);
export const lookCurve = new THREE.CatmullRomCurve3(lookPoints, false, "catmullrom", 0.16);

export const SYSTEM_END = 0.96;

const voyagerCamCurve = new THREE.CatmullRomCurve3(
  [
    cameraCurve.getPoint(SYSTEM_END).clone(),
    new THREE.Vector3(-0.85, 1.05, -250),
    new THREE.Vector3(-0.55, 0.72, -258),
    new THREE.Vector3(-0.22, 0.42, -261),
  ],
  false,
  "catmullrom",
  0.16,
);

const voyagerLookCurve = new THREE.CatmullRomCurve3(
  [
    lookCurve.getPoint(SYSTEM_END).clone(),
    new THREE.Vector3(7.6, 0.3, -264),
    new THREE.Vector3(8.3, 0.18, -267),
    new THREE.Vector3(7.95, 0.1, -269),
  ],
  false,
  "catmullrom",
  0.16,
);

export function getJourneyPose(progress: number, cam: THREE.Vector3, look: THREE.Vector3) {
  const p = Math.min(1, Math.max(0, progress));
  if (p <= SYSTEM_END) {
    cameraCurve.getPoint(p, cam);
    lookCurve.getPoint(p, look);
    return;
  }
  const u = (p - SYSTEM_END) / (1 - SYSTEM_END);
  voyagerCamCurve.getPoint(u, cam);
  voyagerLookCurve.getPoint(u, look);
}

export const HUD_STAGES = [
  { until: 0.22, code: "01", label: "EARTH" },
  { until: 0.28, code: "02", label: "MOON" },
  { until: 0.44, code: "03", label: "MARS" },
  { until: 0.56, code: "04", label: "BELT" },
  { until: 0.7, code: "05", label: "JUPITER" },
  { until: 0.82, code: "06", label: "SATURN" },
  { until: 0.92, code: "07", label: "URANUS" },
  { until: 0.96, code: "08", label: "NEPTUNE" },
  { until: 1, code: "09", label: "VOYAGER" },
] as const;

export function getHudStage(progress: number) {
  return HUD_STAGES.find((stage) => progress <= stage.until) ?? HUD_STAGES[HUD_STAGES.length - 1];
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / Math.max(1e-4, edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function getInterstellarFade(progress: number) {
  return smoothstep(0.94, 0.995, progress);
}
