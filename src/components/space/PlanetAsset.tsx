"use client";

import { Suspense, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { CelestialBody } from "@/lib/space/bodies";
import { inspectPose, inspectTarget, openInspect } from "@/lib/space/stores";
import type { QualityProfile } from "@/lib/space/quality";

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
    cloned.traverse((child) => {
      child.castShadow = false;
      child.receiveShadow = false;
      child.frustumCulled = true;
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

function Atmosphere({ radius, color }: { radius: number; color: string }) {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
        uniforms: {
          uColor: { value: new THREE.Color(color) },
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vViewDir;
          void main() {
            vec4 world = modelMatrix * vec4(position, 1.0);
            vNormal = normalize(mat3(modelMatrix) * normal);
            vViewDir = normalize(cameraPosition - world.xyz);
            gl_Position = projectionMatrix * viewMatrix * world;
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vViewDir;
          uniform vec3 uColor;
          void main() {
            float fresnel = pow(1.0 - max(dot(normalize(vNormal), normalize(vViewDir)), 0.0), 4.6);
            gl_FragColor = vec4(uColor, fresnel * 0.32);
          }
        `,
      }),
    [color],
  );

  return (
    <mesh scale={1.045}>
      <sphereGeometry args={[radius, 24, 24]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

type Props = {
  body: CelestialBody;
  quality: QualityProfile;
  reducedMotion: boolean;
  showLabel: boolean;
};

export default function PlanetAsset({ body, quality, reducedMotion, showLabel }: Props) {
  const group = useRef<THREE.Group>(null);
  const spin = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    const inspecting = inspectTarget.get() === body.id;
    if (inspecting) {
      group.current.rotation.y = inspectPose.yaw;
      group.current.rotation.x = inspectPose.pitch;
      return;
    }
    if (!reducedMotion) spin.current += body.spin * delta;
    group.current.rotation.y = spin.current;
    group.current.rotation.x = 0;
  });

  return (
    <group
      ref={group}
      position={body.position}
      onClick={(event) => {
        if (!body.inspectable) return;
        event.stopPropagation();
        openInspect(body.id);
      }}
      onPointerOver={() => {
        if (body.inspectable) document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
      }}
    >
      {body.src ? (
        <Suspense fallback={<FallbackSphere body={body} />}>
          <FittedModel url={body.src} radius={body.radius} />
        </Suspense>
      ) : (
        <FallbackSphere body={body} />
      )}
      {body.atmosphere && quality.quality !== "low" && (
        <Atmosphere radius={body.radius} color={body.atmosphere} />
      )}
      {showLabel && (
        <Html
          sprite
          pointerEvents="none"
          position={[body.radius * 1.55, body.radius * 0.75, 0]}
          distanceFactor={18}
          style={{ pointerEvents: "none" }}
        >
          <div className="sci-label">
            <span>OBJECT // {body.name}</span>
            <span>TYPE // {body.type}</span>
            <b>{body.feature}</b>
          </div>
        </Html>
      )}
    </group>
  );
}

export function preloadPlanet(url: string) {
  useGLTF.preload(url);
}
