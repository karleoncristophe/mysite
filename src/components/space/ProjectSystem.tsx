"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { projects } from "@/data/projects";
import { WORLD } from "@/lib/space/journey";
import { hoveredMission } from "@/lib/space/stores";
import type { QualityProfile } from "@/lib/space/quality";

type Body = {
  id: string;
  radius: number;
  size: number;
  speed: number;
  offset: number;
  tilt: number;
  color: THREE.Color;
};

const tmpColor = new THREE.Color();
const white = new THREE.Color("#ffffff");

export default function ProjectSystem({
  quality,
  reducedMotion,
}: {
  quality: QualityProfile;
  reducedMotion: boolean;
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const bodies = useMemo<Body[]>(() => {
    const list: Body[] = projects.map((project, index) => ({
      id: project.id,
      radius: project.orbitRadius,
      size: project.size,
      speed: project.orbitSpeed,
      offset: index * 0.9,
      tilt: project.tilt,
      color: new THREE.Color(project.accent),
    }));
    if (quality.projectMoons) {
      list.push(
        {
          id: "moon-a",
          radius: 2.2,
          size: 0.08,
          speed: 0.32,
          offset: 1.2,
          tilt: 0.6,
          color: new THREE.Color("#A7B3C7"),
        },
        {
          id: "moon-b",
          radius: 10.6,
          size: 0.1,
          speed: 0.03,
          offset: 4.1,
          tilt: -0.4,
          color: new THREE.Color("#8291A8"),
        },
      );
    }
    return list;
  }, [quality.projectMoons]);

  const geometry = useMemo(() => new THREE.SphereGeometry(1, 24, 24), []);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        roughness: 0.46,
        metalness: 0.18,
        emissive: "#10141c",
        emissiveIntensity: 0.18,
      }),
    [],
  );

  useEffect(() => {
    if (!mesh.current) return;
    bodies.forEach((body, index) => {
      dummy.position.set(body.radius, 0, 0);
      dummy.scale.setScalar(body.size);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(index, dummy.matrix);
      mesh.current!.setColorAt(index, body.color);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
  }, [bodies, dummy]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = reducedMotion ? 8 : state.clock.elapsedTime;
    const active = hoveredMission.get();
    bodies.forEach((body, index) => {
      const angle = time * (reducedMotion ? 0 : body.speed) + body.offset;
      dummy.position.set(
        Math.cos(angle) * body.radius,
        Math.sin(angle * 0.35) * body.tilt,
        Math.sin(angle) * body.radius,
      );
      dummy.scale.setScalar(body.size * (active === body.id ? 1.35 : 1));
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(index, dummy.matrix);
      tmpColor.copy(body.color);
      if (active === body.id) tmpColor.lerp(white, 0.28);
      mesh.current!.setColorAt(index, tmpColor);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
  });

  return (
    <group position={WORLD.projects}>
      <mesh>
        <sphereGeometry args={[0.55, 24, 24]} />
        <meshBasicMaterial color="#FFC46B" toneMapped={false} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.2, 0]}>
        <ringGeometry args={[11.4, 11.48, 64]} />
        <meshBasicMaterial
          color="#4EA8FF"
          transparent
          opacity={0.18}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <instancedMesh
        ref={mesh}
        args={[geometry, material, bodies.length]}
        frustumCulled={false}
      />
    </group>
  );
}
