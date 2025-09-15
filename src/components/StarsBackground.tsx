'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = { className?: string; density?: number };

export default function StarsBackground({ className = '', density = 8000 }: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const getSize = () => {
      const { clientWidth, clientHeight } = mount;
      return { w: Math.max(1, clientWidth), h: Math.max(1, clientHeight) };
    };
    const { w, h } = getSize();

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000010, 0.0008);

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 2000);
    camera.position.z = 40;

    const count = Math.max(1000, density);
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    const tmp = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3 + 0] = (Math.random() - 0.5) * 2000;
      pos[i3 + 1] = (Math.random() - 0.5) * 2000;
      pos[i3 + 2] = (Math.random() - 0.5) * 2000;

      const t = Math.random();
      if (t < 0.7) tmp.setHSL(0.6, 0.1, 0.85 + Math.random() * 0.15);
      else if (t < 0.9) tmp.setHSL(0.08, 0.7, 0.75 + Math.random() * 0.2);
      else tmp.setHSL(0.8, 0.55, 0.7 + Math.random() * 0.2);

      col[i3 + 0] = tmp.r;
      col[i3 + 1] = tmp.g;
      col[i3 + 2] = tmp.b;

      siz[i] = 0.8 + Math.random() * 2.8; // em “pixels” (ajustado no shader)
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(siz, 1));

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      uniforms: {
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
        uSizeMult: { value: 1.0 },
      },
      vertexShader: `
        precision mediump float;
        uniform float uPixelRatio;
        uniform float uSizeMult;
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          // gl_PointSize em pixels, com leve atenuação por distância
          gl_PointSize = size * (300.0 / -mvPosition.z) * uSizeMult * uPixelRatio;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        precision mediump float;
        varying vec3 vColor;
        void main() {
          // disco suave (glow) usando gl_PointCoord
          vec2 uv = gl_PointCoord - vec2(0.5);
          float d = length(uv);
          float alpha = smoothstep(0.5, 0.0, d);
          alpha *= 0.9 + 0.1 * (1.0 - d);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
    });

    const stars = new THREE.Points(geo, mat);
    scene.add(stars);

    // Nébulas baratas
    const nebulaMat = new THREE.MeshBasicMaterial({
      color: 0x441188,
      transparent: true,
      opacity: 0.10,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const nebulaGeo = new THREE.PlaneGeometry(1400, 900, 1, 1);

    const n1 = new THREE.Mesh(nebulaGeo, nebulaMat.clone());
    n1.position.set(200, 120, -200);
    n1.rotation.x = Math.PI / 5;

    const n2 = new THREE.Mesh(nebulaGeo, nebulaMat.clone());
    n2.position.set(-320, -220, -260);
    n2.rotation.set(-Math.PI / 7, 0, Math.PI / 3);

    const n3 = new THREE.Mesh(nebulaGeo, nebulaMat.clone());
    n3.position.set(120, -340, -300);
    n3.rotation.set(Math.PI / 4, Math.PI / 5, 0);

    scene.add(n1, n2, n3);

    const mouse = { x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener('mousemove', onMouse);

    const start = performance.now();
    const animate = () => {
      const t = (performance.now() - start) * 0.001;

      stars.rotation.x += 0.00015;
      stars.rotation.y += 0.00025;

      n1.rotation.z += 0.0002;
      n2.rotation.x += 0.00025;
      n3.rotation.y += 0.00015;

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 10, 0.03);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 6, 0.03);
      camera.lookAt(0, 0, 0);

      (mat.uniforms).uSizeMult.value = 1.0 + Math.sin(t * 1.7) * 0.05;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const { w: nw, h: nh } = getSize();
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh, false);
      (mat.uniforms).uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 2);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouse);
      ro.disconnect();

      scene.remove(stars, n1, n2, n3);
      geo.dispose();
      (mat as THREE.Material).dispose();
      nebulaGeo.dispose();
      (n1.material as THREE.Material).dispose();
      (n2.material as THREE.Material).dispose();
      (n3.material as THREE.Material).dispose();

      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [density]);

  return (
    <div
      ref={mountRef}
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
      aria-hidden
    />
  );
}
