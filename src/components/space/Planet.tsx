"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { WORLD } from "@/lib/space/journey";
import { createPlanetTextures } from "@/lib/space/planetTextures";
import type { QualityProfile } from "@/lib/space/quality";

const atmosphereVertex = `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vNormal = normalize(mat3(modelMatrix) * normal);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const atmosphereFragment = `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  uniform vec3 uColor;
  uniform float uStrength;
  void main() {
    float ndv = max(dot(normalize(vNormal), normalize(vViewDir)), 0.0);
    float fresnel = pow(1.0 - ndv, 4.8);
    vec3 color = mix(uColor * 0.15, uColor, fresnel);
    gl_FragColor = vec4(color, clamp(fresnel * uStrength, 0.0, 0.55));
  }
`;

export default function Planet({
  quality,
  reducedMotion,
}: {
  quality: QualityProfile;
  reducedMotion: boolean;
}) {
  const planet = useRef<THREE.Group>(null);
  const clouds = useRef<THREE.Mesh>(null);
  const textures = useMemo(
    () => createPlanetTextures(quality.planetTexture),
    [quality.planetTexture],
  );

  useEffect(() => () => textures.dispose(), [textures]);

  const atmosphere = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertex,
        fragmentShader: atmosphereFragment,
        uniforms: {
          uColor: { value: new THREE.Color("#6eb6ff") },
          uStrength: { value: quality.quality === "low" ? 0.28 : 0.38 },
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
      }),
    [quality.quality],
  );

  useFrame((_, delta) => {
    const speed = reducedMotion ? 0.015 : 0.045;
    if (planet.current) planet.current.rotation.y += speed * delta;
    if (clouds.current) clouds.current.rotation.y += speed * 1.35 * delta;
  });

  const segments = quality.planetSegments;

  return (
    <group position={WORLD.earth} rotation={[0.18, -0.4, 0.08]}>
      <group ref={planet}>
        <mesh>
          <sphereGeometry args={[2.35, segments, segments]} />
          <meshStandardMaterial
            map={textures.albedo}
            bumpMap={textures.bump}
            bumpScale={0.028}
            roughness={0.78}
            metalness={0.04}
          />
        </mesh>
        {quality.clouds && (
          <mesh ref={clouds}>
            <sphereGeometry args={[2.385, Math.max(32, segments / 2), Math.max(32, segments / 2)]} />
            <meshStandardMaterial
              map={textures.clouds}
              transparent
              depthWrite={false}
              opacity={0.55}
              roughness={1}
              metalness={0}
            />
          </mesh>
        )}
      </group>
      <mesh scale={1.018}>
        <sphereGeometry args={[2.35, 32, 32]} />
        <primitive object={atmosphere} attach="material" />
      </mesh>
    </group>
  );
}
