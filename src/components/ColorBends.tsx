"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type ColorBendsProps = {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  rotation?: number;
  speed?: number;
  frequency?: number;
  noise?: number;
  iterations?: number;
  intensity?: number;
  bandWidth?: number;
  fadeTop?: number;
};

const MAX_COLORS = 8 as const;

const frag = `
#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform int uIterations;
uniform float uIntensity;
uniform float uBandWidth;
uniform float uFadeTop;
uniform vec3 uBgColor;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

  for (int j = 0; j < 5; j++) {
    if (j >= uIterations - 1) break;
    vec2 rr = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
    q += (rr - q) * 0.15;
  }

  vec3 col = vec3(0.0);

  if (uColorCount > 0) {
    vec2 s = q;
    vec3 sumCol = vec3(0.0);
    for (int i = 0; i < MAX_COLORS; ++i) {
      if (i >= uColorCount) break;
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float m = mix(m0, m1, kMix);
      float w = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
      sumCol += uColors[i] * w;
    }
    col = clamp(sumCol, 0.0, 1.0);
  } else {
    vec2 s = q;
    for (int k = 0; k < 3; ++k) {
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float m = mix(m0, m1, kMix);
      col[k] = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
    }
  }

  col *= uIntensity;

  if (uNoise > 0.0001) {
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
    col += (n - 0.5) * uNoise;
    col = clamp(col, 0.0, 1.0);
  }

  // fadeTop: darken toward uBgColor from the top of the viewport downward.
  // Three.js PlaneGeometry maps vUv.y=1 at the top edge and vUv.y=0 at the bottom.
  if (uFadeTop > 0.0) {
    float yFromTop = 1.0 - vUv.y;
    float fade = smoothstep(0.0, uFadeTop, yFromTop);
    col = mix(uBgColor, col, fade);
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

function hexToNormalized(hex: string): [number, number, number] {
  const h = hex.replace("#", "").trim();
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  return [r, g, b];
}

const BG_COLOR = "#110f16";

export default function ColorBends({
  className,
  style,
  color,
  rotation = 90,
  speed = 0.2,
  frequency = 1.0,
  noise = 0.15,
  iterations = 1,
  intensity = 1.5,
  bandWidth = 6,
  fadeTop = 0,
}: ColorBendsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const rafRef = useRef<number | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const rotationRef = useRef(rotation);
  const autoRotateRef = useRef(0);
  const startTimeRef = useRef(0);

  const scale = 1;
  const warpStrength = 1;
  const mouseInfluence = 0;
  const parallax = 0;

  const [bgR, bgG, bgB] = hexToNormalized(BG_COLOR);

  useEffect(() => {
    const container = containerRef.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uColorsArray = Array.from({ length: MAX_COLORS }, () => new THREE.Vector3(0, 0, 0));

    const material = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uCanvas: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uRot: { value: new THREE.Vector2(1, 0) },
        uColorCount: { value: 0 },
        uColors: { value: uColorsArray },
        uScale: { value: scale },
        uFrequency: { value: frequency },
        uWarpStrength: { value: warpStrength },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uMouseInfluence: { value: mouseInfluence },
        uParallax: { value: parallax },
        uNoise: { value: noise },
        uIterations: { value: iterations },
        uIntensity: { value: intensity },
        uBandWidth: { value: bandWidth },
        uFadeTop: { value: fadeTop },
        uBgColor: { value: new THREE.Vector3(bgR, bgG, bgB) },
      },
      transparent: false,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: "high-performance",
      alpha: false,
      // Avoid compositor tearing / blank frames when the mobile browser UI resizes the viewport.
      preserveDrawingBuffer: true,
    });
    rendererRef.current = renderer;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(new THREE.Color(BG_COLOR), 1);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.pointerEvents = "none";
    container.appendChild(renderer.domElement);

    startTimeRef.current = performance.now();

    let lastW = 0;
    let lastH = 0;
    let resizeDebounce: ReturnType<typeof setTimeout> | null = null;

    const applySize = (w: number, h: number) => {
      const cw = Math.max(1, Math.round(w));
      const ch = Math.max(1, Math.round(h));
      if (
        lastW > 0 &&
        lastH > 0 &&
        Math.abs(cw - lastW) < 2 &&
        Math.abs(ch - lastH) < 2
      ) {
        return;
      }
      lastW = cw;
      lastH = ch;
      renderer.setSize(cw, ch, false);
      (material.uniforms.uCanvas.value as THREE.Vector2).set(cw, ch);
    };

    const handleResize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      applySize(w, h);
    };

    const scheduleResize = () => {
      if (resizeDebounce !== null) clearTimeout(resizeDebounce);
      resizeDebounce = setTimeout(() => {
        resizeDebounce = null;
        handleResize();
      }, 150);
    };

    handleResize();

    const ro = new ResizeObserver(() => {
      scheduleResize();
    });
    ro.observe(container);
    resizeObserverRef.current = ro;

    const loop = () => {
      const now = performance.now();
      const elapsed = (now - startTimeRef.current) / 1000;
      material.uniforms.uTime.value = elapsed;

      const deg =
        (rotationRef.current % 360) + autoRotateRef.current * elapsed;
      const rad = (deg * Math.PI) / 180;
      (material.uniforms.uRot.value as THREE.Vector2).set(
        Math.cos(rad),
        Math.sin(rad)
      );

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (resizeDebounce !== null) clearTimeout(resizeDebounce);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      resizeObserverRef.current?.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      if (
        renderer.domElement &&
        renderer.domElement.parentElement === container
      ) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const material = materialRef.current;
    if (!material) return;

    rotationRef.current = rotation;
    material.uniforms.uSpeed.value = speed;
    material.uniforms.uScale.value = scale;
    material.uniforms.uFrequency.value = frequency;
    material.uniforms.uWarpStrength.value = warpStrength;
    material.uniforms.uMouseInfluence.value = mouseInfluence;
    material.uniforms.uParallax.value = parallax;
    material.uniforms.uNoise.value = noise;
    material.uniforms.uIterations.value = iterations;
    material.uniforms.uIntensity.value = intensity;
    material.uniforms.uBandWidth.value = bandWidth;
    material.uniforms.uFadeTop.value = fadeTop;

    const toVec3 = (hex: string) => {
      const h = hex.replace("#", "").trim();
      const v =
        h.length === 3
          ? [
              parseInt(h[0] + h[0], 16),
              parseInt(h[1] + h[1], 16),
              parseInt(h[2] + h[2], 16),
            ]
          : [
              parseInt(h.slice(0, 2), 16),
              parseInt(h.slice(2, 4), 16),
              parseInt(h.slice(4, 6), 16),
            ];
      return new THREE.Vector3(v[0] / 255, v[1] / 255, v[2] / 255);
    };

    const colorList = color ? [color] : [];
    const arr = colorList.slice(0, MAX_COLORS).map(toVec3);
    for (let i = 0; i < MAX_COLORS; i++) {
      const vec = (material.uniforms.uColors.value as THREE.Vector3[])[i];
      if (i < arr.length) vec.copy(arr[i]);
      else vec.set(0, 0, 0);
    }
    material.uniforms.uColorCount.value = arr.length;
  }, [
    rotation,
    speed,
    scale,
    frequency,
    warpStrength,
    mouseInfluence,
    parallax,
    noise,
    iterations,
    intensity,
    bandWidth,
    fadeTop,
    color,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden ${className ?? ""}`}
      style={style}
    />
  );
}
