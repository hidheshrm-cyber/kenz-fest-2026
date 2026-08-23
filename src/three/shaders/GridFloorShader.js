import * as THREE from 'three';

export const GridFloorShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color(0xff2a85) }, // Neon Pink
    uColor2: { value: new THREE.Color(0x00f0ff) }, // Electric Cyan
    uSpeed: { value: 1.2 },
    uGridDensity: { value: 24.0 },
    uFadeDistance: { value: 35.0 }
  },

  vertexShader: `
    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,

  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform float uSpeed;
    uniform float uGridDensity;
    uniform float uFadeDistance;

    varying vec3 vWorldPosition;
    varying vec2 vUv;

    void main() {
      // Coordinate animation for infinite moving perspective grid
      vec2 coord = vWorldPosition.xz;
      coord.y += uTime * uSpeed * 2.0;

      vec2 grid = abs(fract(coord * (uGridDensity * 0.05) - 0.5) - 0.5) / fwidth(coord * (uGridDensity * 0.05));
      float line = min(grid.x, grid.y);
      float c = 1.0 - min(line, 1.0);

      // Distance fading
      float dist = length(vWorldPosition.xz);
      float alpha = smoothstep(uFadeDistance, 2.0, dist) * c;

      // Color gradient between Neon Pink and Electric Cyan based on depth
      vec3 finalColor = mix(uColor1, uColor2, sin(coord.y * 0.1 + uTime) * 0.5 + 0.5);

      // Add a subtle center pulse glow
      finalColor += uColor1 * (1.0 - smoothstep(0.0, 15.0, dist)) * 0.4;

      gl_FragColor = vec4(finalColor, alpha * 0.75);
    }
  `
};
