import * as THREE from "three";

const tmpUp = new THREE.Vector3(0, 1, 0);
const tmpForward = new THREE.Vector3();
const tmpRight = new THREE.Vector3();
const tmpScreenUp = new THREE.Vector3();

export function applyScreenOffset(
  cam: THREE.Vector3,
  look: THREE.Vector3,
  width: number,
  height: number,
  fovDeg: number,
  screenX: number,
  screenY: number,
) {
  const aspect = width / Math.max(1, height);
  const ndcX = screenX * 2 - 1;
  const ndcY = 1 - screenY * 2;
  const dist = Math.max(0.25, cam.distanceTo(look));
  const halfH = Math.tan(THREE.MathUtils.degToRad(fovDeg) * 0.5) * dist;
  const halfW = halfH * aspect;

  tmpForward.subVectors(look, cam);
  if (tmpForward.lengthSq() < 1e-8) return;
  tmpForward.normalize();
  tmpRight.crossVectors(tmpForward, tmpUp);
  if (tmpRight.lengthSq() < 1e-8) return;
  tmpRight.normalize();

  tmpScreenUp.crossVectors(tmpRight, tmpForward).normalize();
  // Translate both ends of the view: moving only the camera re-centres the body.
  cam.addScaledVector(tmpRight, -ndcX * halfW);
  look.addScaledVector(tmpRight, -ndcX * halfW);
  cam.addScaledVector(tmpScreenUp, -ndcY * halfH);
  look.addScaledVector(tmpScreenUp, -ndcY * halfH);
}

