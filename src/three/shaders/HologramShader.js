import * as THREE from 'three';

export const HologramShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0xff2a85) },
    uRimColor: { value: new THREE.Color(0x00f0ff) },
    uScanlineDensity: { value: 60.0 },
    uGlitchIntensity: { value: 0.04 },
    uOpacity: { value: 0.85 }
  },

  vertexShader: `
    uniform float uTime;
    uniform float uGlitchIntensity;

    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying float vGlitch;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      
      vec3 pos = position;
      
      // Periodic cyber glitch jitter along X
      float glitchTrigger = step(0.92, sin(uTime * 4.0 + position.y * 3.0));
      float offset = (random(vec2(position.y, uTime)) - 0.5) * uGlitchIntensity * glitchTrigger;
      pos.x += offset;
      vGlitch = glitchTrigger;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,

  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform vec3 uRimColor;
    uniform float uScanlineDensity;
    uniform float uOpacity;

    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying float vGlitch;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);

      // Fresnel Rim Glow
      float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);

      // Animated Horizontal Scanlines
      float scanlines = sin(vUv.y * uScanlineDensity - uTime * 6.0) * 0.5 + 0.5;
      scanlines = pow(scanlines, 1.5);

      // Color composition
      vec3 baseColor = mix(uColor, uRimColor, fresnel);
      baseColor += uRimColor * fresnel * 1.5;
      baseColor += vec3(scanlines * 0.25);

      // Glitch color shift
      if (vGlitch > 0.5) {
        baseColor = mix(baseColor, vec3(1.0, 0.9, 0.2), 0.4);
      }

      float alpha = (fresnel * 0.7 + scanlines * 0.3 + 0.15) * uOpacity;
      gl_FragColor = vec4(baseColor, clamp(alpha, 0.0, 1.0));
    }
  `
};
