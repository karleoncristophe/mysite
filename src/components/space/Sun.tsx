"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { BODY_MAP } from "@/lib/space/bodies";

function SunFallback({ radius }: { radius: number }) {
  return (
    <mesh>
      <sphereGeometry args={[radius, 48, 48]} />
      <meshStandardMaterial color="#ffb45c" emissive="#c56a1c" emissiveIntensity={0.35} roughness={0.7} />
    </mesh>
  );
}

function SunModel({ url, radius }: { url: string; radius: number }) {
  const gltf = useGLTF(url);
  const root = useMemo(() => {
    const cloned = gltf.scene.clone(true);
    cloned.traverse((child) => {
      child.castShadow = false;
      child.receiveShadow = false;
      child.frustumCulled = true;
      if (child instanceof THREE.Mesh) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((material) => {
          if (!material) return;
          if (material instanceof THREE.MeshStandardMaterial) {
            material.toneMapped = true;
            material.emissive = new THREE.Color("#4a2208");
            material.emissiveIntensity = 0.28;
            material.roughness = 0.62;
            material.metalness = 0;
          }
        });
      }
    });
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z, 0.0001);
    cloned.scale.multiplyScalar((radius * 2) / maxDim);
    const centered = new THREE.Box3().setFromObject(cloned);
    const center = new THREE.Vector3();
    centered.getCenter(center);
    cloned.position.sub(center);
    return cloned;
  }, [gltf.scene, radius]);

  return <primitive object={root} />;
}

export default function Sun({ reducedMotion }: { reducedMotion: boolean }) {
  const sun = BODY_MAP.sun;
  const spin = useRef<THREE.Group>(null);
  const [loadModel, setLoadModel] = useState(false);

  useEffect(() => {
    const later = window.setTimeout(() => setLoadModel(true), 4800);
    return () => window.clearTimeout(later);
  }, []);

  useFrame((_, delta) => {
    if (!spin.current || reducedMotion) return;
    spin.current.rotation.y += sun.spin * delta;
  });

  return (
    <group position={sun.position}>
      <group ref={spin}>
        {loadModel && sun.src ? (
          <Suspense fallback={null}>
            <SunModel url={sun.src} radius={sun.radius} />
          </Suspense>
        ) : null}
      </group>
      <pointLight color="#ffb45c" intensity={6.5} distance={420} decay={1.35} />
    </group>
  );
}

export function preloadSun(url: string) {
  useGLTF.preload(url);
}
