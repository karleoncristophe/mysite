import * as THREE from "three";

const cameraPoints = [
  new THREE.Vector3(1.55, 0.4, -69.2),
  new THREE.Vector3(1.25, 0.5, -67.8),
  new THREE.Vector3(0.35, 0.7, -66.5),
  new THREE.Vector3(-0.55, 0.95, -78),
  new THREE.Vector3(-1.25, 1.35, -92),
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
  new THREE.Vector3(3.4, 0.45, -102),
  new THREE.Vector3(3.0, 0.15, -124),
  new THREE.Vector3(5.8, -0.85, -152),
  new THREE.Vector3(5.2, 1.15, -192),
  new THREE.Vector3(4.1, -0.2, -228),
  new THREE.Vector3(3.7, 0.45, -258),
];

export const cameraCurve = new THREE.CatmullRomCurve3(cameraPoints, false, "catmullrom", 0.16);
export const lookCurve = new THREE.CatmullRomCurve3(lookPoints, false, "catmullrom", 0.16);

export const HUD_STAGES = [
  { until: 0.22, code: "01", label: "EARTH" },
  { until: 0.32, code: "02", label: "MOON" },
  { until: 0.44, code: "03", label: "MARS" },
  { until: 0.56, code: "04", label: "BELT" },
  { until: 0.7, code: "05", label: "JUPITER" },
  { until: 0.82, code: "06", label: "SATURN" },
  { until: 0.92, code: "07", label: "URANUS" },
  { until: 1, code: "08", label: "NEPTUNE" },
] as const;

export function getHudStage(progress: number) {
  return HUD_STAGES.find((stage) => progress <= stage.until) ?? HUD_STAGES[HUD_STAGES.length - 1];
}
