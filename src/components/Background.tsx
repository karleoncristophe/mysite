'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface BackgroundProps {
  className?: string;
}

export default function Background({ className = '' }: BackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const mountElement = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountElement.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 8000;
    const positions = new Float32Array(starsCount * 3);
    const colors = new Float32Array(starsCount * 3);
    const sizes = new Float32Array(starsCount);

    for (let i = 0; i < starsCount; i++) {
      const i3 = i * 3;
      
      positions[i3] = (Math.random() - 0.5) * 2000;
      positions[i3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i3 + 2] = (Math.random() - 0.5) * 2000;

      const starColor = new THREE.Color();
      const starType = Math.random();
      
      if (starType < 0.7) {
        starColor.setHSL(0.6, 0.1, 0.8 + Math.random() * 0.2);
      } else if (starType < 0.9) {
        starColor.setHSL(0.1, 0.8, 0.7 + Math.random() * 0.3);
      } else {
        starColor.setHSL(0.8, 0.6, 0.6 + Math.random() * 0.4);
      }
      
      colors[i3] = starColor.r;
      colors[i3 + 1] = starColor.g;
      colors[i3 + 2] = starColor.b;

      sizes[i] = Math.random() * 3 + 0.5;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const starsMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const nebulaGeometry = new THREE.PlaneGeometry(1000, 1000, 32, 32);
    const nebulaMaterial = new THREE.MeshBasicMaterial({
      color: 0x4400aa,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
    });

    const nebula1 = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    nebula1.position.set(200, 100, -100);
    nebula1.rotation.x = Math.PI / 4;
    scene.add(nebula1);

    const nebula2 = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    nebula2.position.set(-300, -200, -150);
    nebula2.rotation.x = -Math.PI / 6;
    nebula2.rotation.z = Math.PI / 3;
    scene.add(nebula2);

    const nebula3 = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    nebula3.position.set(100, -300, -200);
    nebula3.rotation.x = Math.PI / 3;
    nebula3.rotation.y = Math.PI / 4;
    scene.add(nebula3);

    camera.position.z = 30;

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0002;

      nebula1.rotation.z += 0.0001;
      nebula2.rotation.x += 0.0002;
      nebula3.rotation.y += 0.0001;

      const positions = stars.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < starsCount; i++) {
        const i3 = i * 3;
        
        const mouseInfluence = 1 / (1 + Math.sqrt(
          Math.pow(positions[i3] - mouseRef.current.x * 500, 2) +
          Math.pow(positions[i3 + 1] - mouseRef.current.y * 500, 2)
        ) * 0.001);

        positions[i3] += Math.sin(time * 0.2 + i * 0.001) * 0.02 * mouseInfluence;
        positions[i3 + 1] += Math.cos(time * 0.2 + i * 0.001) * 0.02 * mouseInfluence;
        positions[i3 + 2] += Math.sin(time * 0.1 + i * 0.002) * 0.01;
      }
      stars.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountElement && renderer.domElement) {
        mountElement.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`fixed inset-0 -z-10 ${className}`} />;
}
