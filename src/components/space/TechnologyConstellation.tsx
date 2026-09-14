"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { skills, skillLinks } from "@/data/skills";
import { WORLD } from "@/lib/space/journey";
import { hoveredSkill } from "@/lib/space/stores";
import type { QualityProfile } from "@/lib/space/quality";

export default function TechnologyConstellation({ quality }: { quality: QualityProfile }) {
  const nodes = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const baseColor = useMemo(() => new THREE.Color("#9eb6d4"), []);
  const activeColor = useMemo(() => new THREE.Color("#82CFFF"), []);
  const color = useMemo(() => new THREE.Color(), []);

  const lineGeometry = useMemo(() => {
    const positions: number[] = [];
    skillLinks.forEach(([a, b]) => {
      const from = skills[a];
      const to = skills[b];
      positions.push(from.x, from.y, from.z, to.x, to.y, to.z);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  const nodeGeometry = useMemo(() => new THREE.SphereGeometry(0.07, 12, 12), []);
  const nodeMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#d5e7ff",
        toneMapped: false,
      }),
    [],
  );

  useEffect(() => {
    if (!nodes.current) return;
    skills.forEach((skill, index) => {
      dummy.position.set(skill.x, skill.y, skill.z);
      dummy.updateMatrix();
      nodes.current!.setMatrixAt(index, dummy.matrix);
      nodes.current!.setColorAt(index, baseColor);
    });
    nodes.current.instanceMatrix.needsUpdate = true;
    if (nodes.current.instanceColor) nodes.current.instanceColor.needsUpdate = true;
  }, [baseColor, dummy]);

  useFrame(() => {
    if (!nodes.current) return;
    const active = hoveredSkill.get();
    skills.forEach((skill, index) => {
      const hot = active === skill.name;
      dummy.position.set(skill.x, skill.y, skill.z);
      dummy.scale.setScalar(hot ? 1.7 : 1);
      dummy.updateMatrix();
      nodes.current!.setMatrixAt(index, dummy.matrix);
      color.copy(baseColor).lerp(activeColor, hot ? 1 : 0);
      nodes.current!.setColorAt(index, color);
    });
    nodes.current.instanceMatrix.needsUpdate = true;
    if (nodes.current.instanceColor) nodes.current.instanceColor.needsUpdate = true;
  });

  return (
    <group position={WORLD.constellation}>
      {quality.constellationLinks && (
        <lineSegments geometry={lineGeometry}>
          <lineBasicMaterial
            color="#4EA8FF"
            transparent
            opacity={0.28}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
      )}
      <instancedMesh
        ref={nodes}
        args={[nodeGeometry, nodeMaterial, skills.length]}
        frustumCulled={false}
      />
    </group>
  );
}
