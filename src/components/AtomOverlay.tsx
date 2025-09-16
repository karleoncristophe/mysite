'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

type Props = {
  className?: string;
  color?: string;         // cor das linhas
  electronColor?: string; // cor dos elétrons
  lineWidth?: number;
  scale?: number;
  speed?: number;
  opacity?: number;
};

export default function AtomRingsWithElectrons({
  className = 'fixed inset-0 -z-10 pointer-events-none',
  color = '#6d6eff',
  electronColor = '#bdbdd2',
  lineWidth = 1,
  scale = 1,
  speed = 0.15,
  opacity = 0.9,
}: Props) {
  return (
    <div className={className} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ alpha: true, antialias: false }}
      >
        <group scale={scale}>
          <RingsWithElectrons
            color={color}
            electronColor={electronColor}
            lineWidth={lineWidth}
            speed={speed}
            opacity={opacity}
          />
        </group>
      </Canvas>
    </div>
  );
}

function RingsWithElectrons({
  color,
  electronColor,
  lineWidth,
  speed,
  opacity,
}: {
  color: string;
  electronColor: string;
  lineWidth: number;
  speed: number;
  opacity: number;
}) {
  const ellipsePoints = useMemo(
    () => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, Math.PI * 2, false, 0).getPoints(64),
    []
  );

  const rings = [
    { rot: 0 },
    { rot: Math.PI / 3 },
    { rot: -Math.PI / 3 },
  ];

  return (
    <group>
      {rings.map((r, idx) => (
        <Orbit
          key={idx}
          rotation={[0, 0, r.rot]}
          ellipsePoints={ellipsePoints}
          color={color}
          electronColor={electronColor}
          lineWidth={lineWidth}
          speed={speed}
          opacity={opacity}
        />
      ))}
    </group>
  );
}

function Orbit({
  rotation,
  ellipsePoints,
  color,
  electronColor,
  lineWidth,
  speed,
  opacity,
}: {
  rotation: [number, number, number];
  ellipsePoints: THREE.Vector2[];
  color: string;
  electronColor: string;
  lineWidth: number;
  speed: number;
  opacity: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const electronRef = useRef<THREE.Mesh>(null);

  useFrame((state, dt) => {
    if (groupRef.current) groupRef.current.rotation.z += speed * 0.25 * dt;
    if (electronRef.current) {
      const t = state.clock.getElapsedTime() * speed * 2.5; // orbitando devagar
      const i = Math.floor((t * ellipsePoints.length) % ellipsePoints.length);
      const p = ellipsePoints[i];
      electronRef.current.position.set(p.x, p.y, 0);
    }
  });

  return (
    <group ref={groupRef} rotation={rotation}>
      <Line
        points={ellipsePoints}
        color={color}
        opacity={opacity}
        transparent
        linewidth={lineWidth}
      />
      <mesh ref={electronRef}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color={electronColor} toneMapped={false} />
      </mesh> 
    </group>
  );
}
