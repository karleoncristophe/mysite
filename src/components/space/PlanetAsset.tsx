"use client";

import { Suspense, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import {
  getBodyAppearScale,
  getBodyWorldPosition,
  isCraftBody,
  type CelestialBody,
} from "@/lib/space/bodies";
import {
  hoveredBody,
  inspectPose,
  inspectTarget,
  journeyProgress,
  openInspect,
} from "@/lib/space/stores";

function FallbackSphere({ body }: { body: CelestialBody }) {
  return (
    <mesh>
      <sphereGeometry args={[body.radius, 32, 32]} />
      <meshStandardMaterial color={body.fallback} roughness={0.72} metalness={0.08} />
    </mesh>
  );
}

function FittedModel({ url, radius }: { url: string; radius: number }) {
  const gltf = useGLTF(url);
  const root = useMemo(() => {
    const cloned = gltf.scene.clone(true);
    const voyager = url.includes("voyager");
    cloned.traverse((child) => {
      child.castShadow = false;
      child.receiveShadow = false;
      child.frustumCulled = !voyager;
      if (child instanceof THREE.Mesh) {
        if (voyager) {
          child.material = new THREE.MeshStandardMaterial({
            color: "#d5dde8",
            metalness: 0.7,
            roughness: 0.34,
            emissive: new THREE.Color("#1d2a3a"),
            emissiveIntensity: 0.22,
          });
        } else {
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          materials.forEach((material) => {
            if (!material) return;
            if (material.blending === THREE.MultiplyBlending) {
              material.blending = THREE.NormalBlending;
              material.premultipliedAlpha = false;
            }
          });
        }
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

type Props = {
  body: CelestialBody;
  reducedMotion: boolean;
};

export default function PlanetAsset({ body, reducedMotion }: Props) {
  const group = useRef<THREE.Group>(null);
  const visual = useRef<THREE.Group>(null);
  const spin = useRef(0);
  const scale = useRef(reducedMotion || body.focusFrom <= 0 ? 1 : 0.03);

  useFrame(({ clock }, delta) => {
    if (!group.current || !visual.current) return;

    const [x, y, z] = getBodyWorldPosition(body.id, clock.elapsedTime);
    group.current.position.set(x, y, z);

    const inspecting = inspectTarget.get() === body.id;
    const targetScale = inspecting ? 1 : getBodyAppearScale(body, journeyProgress.get(), reducedMotion);
    scale.current += (targetScale - scale.current) * (1 - Math.exp(-3.6 * delta));
    visual.current.scale.setScalar(scale.current);

    if (inspecting) {
      visual.current.rotation.y = inspectPose.yaw;
      visual.current.rotation.x = inspectPose.pitch;
      return;
    }
    if (!reducedMotion) spin.current += body.spin * delta;
    visual.current.rotation.y = spin.current;
    visual.current.rotation.x = 0;
  });

  const focusBody = () => {
    if (!body.inspectable || inspectPose.pointerMoved) return;
    inspectPose.ignoreMiss = true;
    openInspect(body.id);
    window.setTimeout(() => {
      inspectPose.ignoreMiss = false;
    }, 80);
  };

  return (
    <group
      ref={group}
      position={body.position}
      onClick={(event) => {
        event.stopPropagation();
        focusBody();
      }}
      onPointerOver={() => {
        if (!body.inspectable) return;
        hoveredBody.set(body.id);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        if (hoveredBody.get() === body.id) hoveredBody.set(null);
        document.body.style.cursor = "auto";
      }}
    >
      <group ref={visual}>
        {body.src ? (
          <Suspense fallback={<FallbackSphere body={body} />}>
            <FittedModel url={body.src} radius={body.radius} />
          </Suspense>
        ) : (
          <FallbackSphere body={body} />
        )}
        {body.id === "voyager" && (
          <>
            <pointLight color="#eef5ff" intensity={10} distance={18} decay={2} />
            <pointLight color="#9ec7ff" intensity={3.4} distance={10} decay={2} position={[0.8, 0.4, 1.2]} />
          </>
        )}
        {body.inspectable && (
          <mesh visible={false}>
            <sphereGeometry
              args={[
                isCraftBody(body.id)
                  ? Math.max(body.radius * 3.4, 0.4)
                  : Math.max(body.radius * 1.45, 0.62),
                16,
                16,
              ]}
            />
            <meshBasicMaterial />
          </mesh>
        )}
      </group>
    </group>
  );
}

export function preloadPlanet(url: string) {
  useGLTF.preload(url);
}
