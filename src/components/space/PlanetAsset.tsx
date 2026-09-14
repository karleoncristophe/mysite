"use client";

import { Suspense, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import {
  getBodyAppearScale,
  getBodyFocusProgress,
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

function inspectHitRadius(body: CelestialBody) {
  if (body.id === "parker") return 1.45;
  if (body.id === "moon") return 1.05;
  if (isCraftBody(body.id)) return Math.max(body.radius * 3.4, 0.4);
  if (body.id === "earth") return body.radius * 1.08;
  return Math.max(body.radius * 1.45, 0.62);
}

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
    const earth = url.includes("earth");
    cloned.traverse((child) => {
      child.castShadow = false;
      child.receiveShadow = false;
      child.frustumCulled = !voyager;
      if (child instanceof THREE.Mesh) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((material) => {
          if (!material) return;
          if (material.blending === THREE.MultiplyBlending) {
            material.blending = THREE.NormalBlending;
            material.premultipliedAlpha = false;
          }
          if (url.includes("saturn") || url.includes("uranus") || voyager) {
            material.side = THREE.DoubleSide;
          }
          if (earth && material instanceof THREE.MeshStandardMaterial) {
            material.metalness *= 0.18;
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

type Props = {
  body: CelestialBody;
  reducedMotion: boolean;
};

export default function PlanetAsset({ body, reducedMotion }: Props) {
  const group = useRef<THREE.Group>(null);
  const visual = useRef<THREE.Group>(null);
  const hitArea = useRef<THREE.Mesh>(null);
  const [tiltX, tiltY, tiltZ] = body.tilt ?? [0, 0, 0];
  const spin = useRef(tiltY);
  const scale = useRef(reducedMotion || body.focusFrom <= 0 ? 1 : 0.03);

  useFrame(({ clock, camera, size }, delta) => {
    if (!group.current || !visual.current) return;

    const [x, y, z] = getBodyWorldPosition(body.id, clock.elapsedTime);
    group.current.position.set(x, y, z);

    // Keep a small screen-space touch target without covering neighbouring bodies.
    if (hitArea.current) {
      const distance = camera.position.distanceTo(group.current.position);
      const fov = camera instanceof THREE.PerspectiveCamera ? camera.fov : 42;
      const touchRadius = distance * Math.tan(THREE.MathUtils.degToRad(fov / 2)) * 44 / Math.max(1, size.height);
      const radius = Math.max(body.radius * scale.current, Math.min(inspectHitRadius(body), touchRadius));
      hitArea.current.scale.setScalar(radius);
    }

    const inspecting = inspectTarget.get() === body.id;
    const targetScale = inspecting ? 1 : getBodyAppearScale(body, journeyProgress.get(), reducedMotion);
    scale.current += (targetScale - scale.current) * (1 - Math.exp(-3.6 * delta));
    visual.current.scale.setScalar(scale.current);

    if (inspecting) {
      visual.current.rotation.set(tiltX + inspectPose.pitch, inspectPose.yaw, tiltZ);
      return;
    }
    if (!reducedMotion && !inspectTarget.get()) spin.current += body.spin * delta;
    visual.current.rotation.set(tiltX, spin.current, tiltZ);
  });

  const focusBody = (id = body.id) => {
    if (!body.inspectable || inspectPose.pointerMoved) return;
    openInspect(id, getBodyFocusProgress(id));
    inspectPose.ignoreMiss = true;
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
        // The tiny craft remains selectable when its touch target overlaps a
        // planet's enclosing sphere. Its target is limited to 44 screen pixels.
        const craftHit = event.intersections.find((hit) => hit.object.userData.bodyId === "parker");
        focusBody(craftHit ? "parker" : body.id);
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
            <pointLight color="#eef5ff" intensity={3.2} distance={18} decay={2} />
            <pointLight color="#9ec7ff" intensity={1.4} distance={10} decay={2} position={[0.8, 0.4, 1.2]} />
          </>
        )}
      </group>
      {body.inspectable && (
        <mesh ref={hitArea} userData={{ bodyId: body.id }} renderOrder={body.id === "parker" || body.id === "moon" ? 8 : 0}>
          <sphereGeometry args={[1, 20, 20]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>
      )}
    </group>
  );
}

export function preloadPlanet(url: string) {
  useGLTF.preload(url);
}
