import * as THREE from "three";

export const WORLD = {
  earth: new THREE.Vector3(2.15, -0.82, 0.15),
  constellation: new THREE.Vector3(0, 0.35, -32),
  projects: new THREE.Vector3(0, 0.1, -64),
  beacon: new THREE.Vector3(0, 0.55, -98),
  sun: new THREE.Vector3(42, 16, 28),
} as const;

const cameraPoints = [
  new THREE.Vector3(-0.35, 0.52, 8.6),
  new THREE.Vector3(3.6, 1.05, 4.8),
  new THREE.Vector3(1.15, 1.7, -20.5),
  new THREE.Vector3(-2.4, 1.35, -50),
  new THREE.Vector3(1.8, 0.95, -82),
  new THREE.Vector3(0.15, 0.62, -90.5),
];

const lookPoints = [
  new THREE.Vector3(1.85, -0.42, 0.2),
  new THREE.Vector3(1.4, -0.18, 0),
  new THREE.Vector3(0.05, 0.35, -32),
  new THREE.Vector3(0, 0.05, -64),
  new THREE.Vector3(0.1, 0.5, -97),
  new THREE.Vector3(0, 0.55, -98),
];

export const cameraCurve = new THREE.CatmullRomCurve3(cameraPoints, false, "catmullrom", 0.18);
export const lookCurve = new THREE.CatmullRomCurve3(lookPoints, false, "catmullrom", 0.18);

export const craftCurve = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(-6.5, 1.8, 14),
    new THREE.Vector3(-3.2, 0.4, 2),
    new THREE.Vector3(2.8, 0.9, -16),
    new THREE.Vector3(-1.4, -0.2, -46),
    new THREE.Vector3(2.2, 0.3, -78),
    new THREE.Vector3(0.8, 0.2, -93),
  ],
  false,
  "catmullrom",
  0.2,
);

export const HUD_STAGES = [
  { until: 0.14, code: "01", label: "ORBIT" },
  { until: 0.28, code: "02", label: "PROFILE" },
  { until: 0.42, code: "03", label: "CONSTELLATION" },
  { until: 0.84, code: "04", label: "MISSIONS" },
  { until: 1, code: "05", label: "CONTACT" },
] as const;

export function getHudStage(progress: number) {
  return HUD_STAGES.find((stage) => progress <= stage.until) ?? HUD_STAGES[HUD_STAGES.length - 1];
}
