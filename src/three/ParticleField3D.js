import * as THREE from 'three';

export class ParticleField3D {
  constructor(scene, count = 3000) {
    this.scene = scene;
    this.count = count;
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.points = null;
    this.geometry = null;
    this.material = null;
    this.init();
  }

  init() {
    this.geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.count * 3);
    const colors = new Float32Array(this.count * 3);
    const scales = new Float32Array(this.count);

    const pink = new THREE.Color(0xff2a85);
    const cyan = new THREE.Color(0x00f0ff);
    const purple = new THREE.Color(0x8a2be2);
    const colorPalette = [pink, cyan, purple];

    for (let i = 0; i < this.count; i++) {
      // Cylindrical distribution around origin
      const radius = 5 + Math.random() * 35;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 40;

      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;

      // Pick random color
      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;

      scales[i] = Math.random() * 2.0 + 0.5;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Custom point texture generator for soft glowing particles
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(255, 42, 133, 0.8)');
    grad.addColorStop(0.7, 'rgba(0, 240, 255, 0.2)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    this.material = new THREE.PointsMaterial({
      size: 0.35,
      map: texture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.points);

    // Mouse trajectory tracking
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  update(delta, elapsedTime) {
    if (!this.points) return;

    // Smooth mouse interpolation
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Smooth GPU rotation & breathing float (Zero CPU buffer uploads)
    this.points.rotation.y = elapsedTime * 0.03 + this.mouse.x * 0.2;
    this.points.rotation.x = this.mouse.y * 0.1;
    this.points.position.y = Math.sin(elapsedTime * 0.8) * 0.6;
  }
}
