"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { ASTEROID_BELT } from "@/lib/space/bodies";
import { seededRandom } from "@/lib/space/noise";
import type { QualityProfile } from "@/lib/space/quality";

export default function AsteroidBelt({
  quality,
}: {
  quality: QualityProfile;
}) {
  const count = quality.asteroids;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1, 0), []);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#8d8378",
        roughness: 0.92,
        metalness: 0.08,
      }),
    [],
  );

  const mesh = useMemo(() => {
    const instanced = new THREE.InstancedMesh(geometry, material, count);
    const rand = seededRandom(204);
    const [cx, cy, cz] = ASTEROID_BELT.center;
    for (let i = 0; i < count; i += 1) {
      const angle = rand() * Math.PI * 2;
      const radius = ASTEROID_BELT.radius + (rand() - 0.5) * ASTEROID_BELT.width;
      dummy.position.set(
        cx + Math.cos(angle) * radius,
        cy + (rand() - 0.5) * 1.6,
        cz + Math.sin(angle) * radius * 0.55,
      );
      dummy.rotation.set(rand() * 2, rand() * 2, rand() * 2);
      const s = 0.04 + rand() * 0.11;
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      instanced.setMatrixAt(i, dummy.matrix);
    }
    instanced.instanceMatrix.needsUpdate = true;
    instanced.frustumCulled = false;
    return instanced;
  }, [count, dummy, geometry, material]);

  return <primitive object={mesh} />;
}
