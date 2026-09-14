import * as THREE from "three";
import { fbm } from "@/lib/space/noise";

function makeCanvas(size: number): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  return canvas;
}

function toTexture(canvas: HTMLCanvasElement, srgb: boolean): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.anisotropy = 4;
  texture.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.LinearSRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export type PlanetTextures = {
  albedo: THREE.CanvasTexture;
  bump: THREE.CanvasTexture;
  clouds: THREE.CanvasTexture;
  dispose: () => void;
};

export function createPlanetTextures(size: number): PlanetTextures {
  const albedoCanvas = makeCanvas(size);
  const bumpCanvas = makeCanvas(size);
  const cloudCanvas = makeCanvas(Math.max(128, size / 2));

  const albedo = albedoCanvas.getContext("2d", { willReadFrequently: true });
  const bump = bumpCanvas.getContext("2d", { willReadFrequently: true });
  const clouds = cloudCanvas.getContext("2d", { willReadFrequently: true });
  if (!albedo || !bump || !clouds) {
    throw new Error("Canvas 2D is required to build planet textures.");
  }

  const albedoData = albedo.createImageData(size, size);
  const bumpData = bump.createImageData(size, size);

  for (let y = 0; y < size; y += 1) {
    const v = y / (size - 1);
    const lat = v * 2 - 1;
    for (let x = 0; x < size; x += 1) {
      const u = x / (size - 1);
      const n = fbm(u * 14, v * 7, 6);
      const ridge = fbm(u * 22 + 12, v * 11 + 4, 5);
      const land = n > 0.5 + Math.abs(lat) * 0.03;
      const ice = Math.abs(lat) > 0.78 || (land && Math.abs(lat) > 0.62 && ridge > 0.5);

      let r: number;
      let g: number;
      let b: number;
      let h: number;

      if (ice) {
        r = 214;
        g = 228;
        b = 240;
        h = 210;
      } else if (land) {
        const dry = ridge;
        r = Math.floor(42 + dry * 90);
        g = Math.floor(78 + (1 - dry) * 70);
        b = Math.floor(36 + dry * 28);
        h = Math.floor(90 + dry * 90);
      } else {
        const deep = 0.35 + n * 0.4 + (1 - Math.abs(lat)) * 0.12;
        r = Math.floor(6 + deep * 18);
        g = Math.floor(28 + deep * 70);
        b = Math.floor(72 + deep * 110);
        h = 28;
      }

      const i = (y * size + x) * 4;
      albedoData.data[i] = r;
      albedoData.data[i + 1] = g;
      albedoData.data[i + 2] = b;
      albedoData.data[i + 3] = 255;
      bumpData.data[i] = h;
      bumpData.data[i + 1] = h;
      bumpData.data[i + 2] = h;
      bumpData.data[i + 3] = 255;
    }
  }

  albedo.putImageData(albedoData, 0, 0);
  bump.putImageData(bumpData, 0, 0);

  const cw = cloudCanvas.width;
  const ch = cloudCanvas.height;
  const cloudData = clouds.createImageData(cw, ch);
  for (let y = 0; y < ch; y += 1) {
    for (let x = 0; x < cw; x += 1) {
      const n = fbm((x / cw) * 8 + 30, (y / ch) * 4 + 18, 4);
      const alpha = Math.max(0, (n - 0.52) * 3.2);
      const i = (y * cw + x) * 4;
      const c = 230 + n * 20;
      cloudData.data[i] = c;
      cloudData.data[i + 1] = c;
      cloudData.data[i + 2] = 245;
      cloudData.data[i + 3] = Math.floor(Math.min(1, alpha) * 150);
    }
  }
  clouds.putImageData(cloudData, 0, 0);

  const albedoTex = toTexture(albedoCanvas, true);
  const bumpTex = toTexture(bumpCanvas, false);
  const cloudTex = toTexture(cloudCanvas, true);
  cloudTex.wrapT = THREE.RepeatWrapping;

  return {
    albedo: albedoTex,
    bump: bumpTex,
    clouds: cloudTex,
    dispose: () => {
      albedoTex.dispose();
      bumpTex.dispose();
      cloudTex.dispose();
    },
  };
}
