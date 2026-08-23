import * as THREE from 'three';
import { ParticleField3D } from './ParticleField3D.js';
import { GridFloorShader } from './shaders/GridFloorShader.js';

export class SceneManager {
  constructor(canvasId = 'bg-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.particles = null;
    this.gridMesh = null;
    this.gridMaterial = null;
    this.clock = new THREE.Clock();

    this.init();
  }

  init() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene Setup with Cyberpunk Fog
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x07050d, 0.035);

    // 2. Camera Setup
    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    this.camera.position.set(0, 3.5, 14);
    this.camera.lookAt(0, 1.0, 0);

    // 3. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Infinite Perspective Grid Floor
    const gridGeometry = new THREE.PlaneGeometry(80, 80, 64, 64);
    gridGeometry.rotateX(-Math.PI / 2);

    this.gridMaterial = new THREE.ShaderMaterial({
      vertexShader: GridFloorShader.vertexShader,
      fragmentShader: GridFloorShader.fragmentShader,
      uniforms: THREE.UniformsUtils.clone(GridFloorShader.uniforms),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.gridMesh = new THREE.Mesh(gridGeometry, this.gridMaterial);
    this.gridMesh.position.set(0, -2.5, 0);
    this.scene.add(this.gridMesh);

    // 5. 3,000+ 3D Particle Field
    this.particles = new ParticleField3D(this.scene, 3000);

    // 6. Volumetric Lighting
    const pinkLight = new THREE.PointLight(0xff2a85, 3.0, 30);
    pinkLight.position.set(10, 8, 5);
    this.scene.add(pinkLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 3.0, 30);
    cyanLight.position.set(-10, 8, 5);
    this.scene.add(cyanLight);

    // 7. Event Handlers
    window.addEventListener('resize', this.onResize.bind(this), { passive: true });
    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });

    // 8. Start Animation Loop
    this.animate();
  }

  onResize() {
    if (!this.renderer || !this.camera) return;
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  onScroll() {
    const scrollY = window.scrollY;
    if (this.camera) {
      this.camera.position.y = 3.5 - scrollY * 0.003;
      this.camera.rotation.x = -0.15 + scrollY * 0.0002;
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // Update Grid Uniforms
    if (this.gridMaterial && this.gridMaterial.uniforms) {
      this.gridMaterial.uniforms.uTime.value = elapsedTime;
    }

    // Update Particle Field
    if (this.particles) {
      this.particles.update(delta, elapsedTime);
    }

    // Render Scene
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
