'use client';

import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Trail, Float, Sphere, Box, Torus, Cylinder, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

interface SkillIcon3DProps {
  skill: string;
  speed?: number;
  className?: string;
}

export default function SkillIcon3D({ 
  skill, 
  speed = 4,
  className = '' 
}: SkillIcon3DProps) {
  return (
    <div className={`w-full h-64 ${className}`}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <color attach="background" args={['transparent']} />
        <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
          <TechIcon skill={skill} />
        </Float>
        <Stars saturation={0} count={50} speed={0.5} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

function TechIcon({ skill }: { skill: string }) {
  const getTechConfig = (tech: string) => {
    switch (tech) {
      case 'HTML5':
        return {
          center: { color: [1, 0.3, 0.1], shape: 'box' },
          electrons: [
            { color: [1, 0.5, 0.2], speed: 4, radius: 2.2 },
            { color: [1, 0.4, 0.1], speed: 4.5, radius: 2.4 },
            { color: [1, 0.6, 0.3], speed: 5, radius: 2.6 }
          ]
        };
      case 'CSS3':
        return {
          center: { color: [0.1, 0.5, 1], shape: 'box' },
          electrons: [
            { color: [0.2, 0.7, 1], speed: 4.2, radius: 2.1 },
            { color: [0.1, 0.6, 1], speed: 4.7, radius: 2.3 },
            { color: [0.3, 0.8, 1], speed: 5.2, radius: 2.5 }
          ]
        };
      case 'JavaScript':
        return {
          center: { color: [1, 1, 0.2], shape: 'box' },
          electrons: [
            { color: [1, 1, 0.4], speed: 3.8, radius: 2.0 },
            { color: [1, 1, 0.1], speed: 4.3, radius: 2.2 },
            { color: [1, 1, 0.5], speed: 4.8, radius: 2.4 }
          ]
        };
      case 'ReactJS':
      case 'React Native':
        return {
          center: { color: [0.2, 0.8, 1], shape: 'sphere' },
          electrons: [
            { color: [0.4, 0.9, 1], speed: 4.5, radius: 2.3 },
            { color: [0.1, 0.7, 1], speed: 5.0, radius: 2.5 },
            { color: [0.3, 0.9, 1], speed: 5.5, radius: 2.7 }
          ]
        };
      case 'TypeScript':
        return {
          center: { color: [0.2, 0.5, 1], shape: 'box' },
          electrons: [
            { color: [0.3, 0.6, 1], speed: 4.1, radius: 2.1 },
            { color: [0.1, 0.4, 1], speed: 4.6, radius: 2.3 },
            { color: [0.4, 0.7, 1], speed: 5.1, radius: 2.5 }
          ]
        };
      case 'NextJS':
        return {
          center: { color: [0.1, 0.1, 0.1], shape: 'sphere' },
          electrons: [
            { color: [0.3, 0.3, 0.3], speed: 4.0, radius: 2.0 },
            { color: [0.2, 0.2, 0.2], speed: 4.5, radius: 2.2 },
            { color: [0.4, 0.4, 0.4], speed: 5.0, radius: 2.4 }
          ]
        };
      case 'NestJS':
        return {
          center: { color: [1, 0.2, 0.2], shape: 'torus' },
          electrons: [
            { color: [1, 0.4, 0.4], speed: 4.3, radius: 2.2 },
            { color: [1, 0.1, 0.1], speed: 4.8, radius: 2.4 },
            { color: [1, 0.5, 0.5], speed: 5.3, radius: 2.6 }
          ]
        };
      case 'GraphQL':
        return {
          center: { color: [1, 0.2, 0.8], shape: 'box' },
          electrons: [
            { color: [1, 0.4, 0.9], speed: 4.4, radius: 2.2 },
            { color: [1, 0.1, 0.7], speed: 4.9, radius: 2.4 },
            { color: [1, 0.5, 1], speed: 5.4, radius: 2.6 }
          ]
        };
      case 'MongoDB':
        return {
          center: { color: [0.2, 1, 0.2], shape: 'cylinder' },
          electrons: [
            { color: [0.4, 1, 0.4], speed: 4.2, radius: 2.1 },
            { color: [0.1, 1, 0.1], speed: 4.7, radius: 2.3 },
            { color: [0.5, 1, 0.5], speed: 5.2, radius: 2.5 }
          ]
        };
      default:
        return {
          center: { color: [0.5, 0.5, 0.5], shape: 'sphere' },
          electrons: [
            { color: [0.7, 0.7, 0.7], speed: 4, radius: 2 },
            { color: [0.3, 0.3, 0.3], speed: 4.5, radius: 2.2 },
            { color: [0.8, 0.8, 0.8], speed: 5, radius: 2.4 }
          ]
        };
    }
  };

  const config = getTechConfig(skill);
  
  const renderCenter = () => {
    const { color, shape } = config.center;
    const material = <meshBasicMaterial color={color} toneMapped={false} />;
    
    switch (shape) {
      case 'box':
        return <Box args={[0.4, 0.4, 0.4]}>{material}</Box>;
      case 'torus':
        return <Torus args={[0.3, 0.1, 8, 16]}>{material}</Torus>;
      case 'cylinder':
        return <Cylinder args={[0.3, 0.3, 0.4, 8]}>{material}</Cylinder>;
      default:
        return <Sphere args={[0.25, 32, 32]}>{material}</Sphere>;
    }
  };

  return (
    <group>
      {config.electrons.map((electron, index) => (
        <Electron 
          key={index}
          position={[0, 0, 0.3]} 
          speed={electron.speed} 
          color={electron.color}
          radius={electron.radius}
          rotation={[0, 0, (index * Math.PI * 2) / 3]}
        />
      ))}
      {renderCenter()}
    </group>
  );
}

function Electron({ 
  radius = 2, 
  speed = 5, 
  color = [2, 1, 10],
  ...props 
}: { 
  radius?: number; 
  speed?: number; 
  color?: [number, number, number];
} & any) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius, 
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 
      0
    );
  });
  
  return (
    <group {...props}>
      <Trail local width={2.5} length={6} color={new THREE.Color(...color)} attenuation={(t) => t * t}>
        <mesh ref={ref}>
          <sphereGeometry args={[0.12]} />
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}
