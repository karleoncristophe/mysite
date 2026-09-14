import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import { applyScreenOffset } from '../src/lib/space/framing.ts';

test('framing places a body at the requested screen position without changing view direction', () => {
  for (const [width, height, x, y] of [[1280, 720, 0.76, 0.53], [390, 844, 0.74, 0.72], [390, 844, 0.5, 0.38]]) {
    const target = new THREE.Vector3(12.2, -0.35, -73.2);
    const look = target.clone();
    const position = new THREE.Vector3(1.55, 0.4, -69.2);
    const direction = look.clone().sub(position).normalize();
    applyScreenOffset(position, look, width, height, 42, x, y);
    assert.ok(direction.distanceTo(look.clone().sub(position).normalize()) < 1e-10);
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.04, 520);
    camera.position.copy(position);
    camera.lookAt(look);
    camera.updateMatrixWorld();
    const screen = target.project(camera);
    assert.ok(Math.abs((screen.x + 1) / 2 - x) < 1e-10);
    assert.ok(Math.abs((1 - screen.y) / 2 - y) < 1e-10);
  }
});
