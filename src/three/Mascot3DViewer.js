import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class Mascot3DViewer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.mascotGroup = null;
    this.characterMesh = null;
    this.characterMaterial = null;
    this.holoRings = [];
    this.shardGroup = null;
    this.textures = {};
    this.currentTextureKey = 'front';
    this.isWireframe = false;
    this.autoRotate = true;
    this.rotationSpeed = 0.008;
    this.clock = new THREE.Clock();

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 600;
    const height = this.container.clientHeight || 450;

    // 1. Scene Setup
    this.scene = new THREE.Scene();

    // 2. Camera Setup
    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    this.camera.position.set(0, 1.3, 4.2);

    // 3. Renderer Setup with Antialias & Alpha
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.3;
    this.container.appendChild(this.renderer.domElement);

    // 4. OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.maxPolarAngle = Math.PI / 2 + 0.05;
    this.controls.minDistance = 2.2;
    this.controls.maxDistance = 7.0;
    this.controls.target.set(0, 1.1, 0);

    // 5. Lighting Rig
    this.setupLighting();

    // 6. Load Turnaround Textures & Build 3D Character Model
    this.loadTextures(() => {
      this.buildCyberMascot();
    });

    // 7. Event Listeners
    window.addEventListener('resize', this.onResize.bind(this));

    // 8. Start Render Loop
    this.animate();
  }

  setupLighting() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x221133, 2.5);
    this.scene.add(ambientLight);

    // Key Hot-Pink Spotlight
    const pinkSpot = new THREE.SpotLight(0xff2a85, 12.0, 20, Math.PI / 3, 0.5);
    pinkSpot.position.set(3.5, 4.5, 4.0);
    this.scene.add(pinkSpot);

    // Cyan Fill Spotlight
    const cyanSpot = new THREE.SpotLight(0x00f0ff, 10.0, 20, Math.PI / 3, 0.5);
    cyanSpot.position.set(-3.5, 3.5, 3.0);
    this.scene.add(cyanSpot);

    // Purple Rim Light from Back
    const purpleRim = new THREE.PointLight(0x9d4edd, 8.0, 12);
    purpleRim.position.set(0, 2.5, -3.5);
    this.scene.add(purpleRim);

    // Floor Glow Light
    const floorLight = new THREE.PointLight(0xff2a85, 4.0, 6);
    floorLight.position.set(0, -0.3, 0);
    this.scene.add(floorLight);
  }

  loadTextures(onComplete) {
    const loader = new THREE.TextureLoader();
    const assets = {
      front: '/assets/front.png',
      front34: '/assets/front34.png',
      side: '/assets/side.png',
      back34: '/assets/back34.png',
      back: '/assets/back.png'
    };

    let loadedCount = 0;
    const total = Object.keys(assets).length;

    Object.entries(assets).forEach(([key, url]) => {
      loader.load(url, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        this.textures[key] = texture;
        loadedCount++;
        if (loadedCount === total && onComplete) {
          onComplete();
        }
      });
    });
  }

  buildCyberMascot() {
    this.mascotGroup = new THREE.Group();

    // 1. Holographic Pedestal Platform Base
    const pedestalGeo = new THREE.CylinderGeometry(1.6, 1.8, 0.18, 6);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x0e0818,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x220933
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.set(0, -0.2, 0);
    this.mascotGroup.add(pedestal);

    // Pedestal Glowing Neon Rim
    const rimGeo = new THREE.TorusGeometry(1.7, 0.025, 16, 6);
    rimGeo.rotateX(Math.PI / 2);
    const rimMat = new THREE.MeshBasicMaterial({ color: 0xff2a85 });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.position.set(0, -0.1, 0);
    this.mascotGroup.add(rim);

    // Inner Projector Lens Disc
    const discGeo = new THREE.CircleGeometry(1.1, 32);
    discGeo.rotateX(-Math.PI / 2);
    const discMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.35
    });
    const disc = new THREE.Mesh(discGeo, discMat);
    disc.position.set(0, -0.09, 0);
    this.mascotGroup.add(disc);

    // 2. 3D Character Avatar Plane (Interactive Turnaround Mascot)
    const charGeo = new THREE.PlaneGeometry(1.5, 2.7, 32, 32);
    this.characterMaterial = new THREE.MeshStandardMaterial({
      map: this.textures.front || null,
      transparent: true,
      alphaTest: 0.05,
      roughness: 0.4,
      metalness: 0.2,
      emissive: 0x220515,
      side: THREE.DoubleSide
    });

    this.characterMesh = new THREE.Mesh(charGeo, this.characterMaterial);
    this.characterMesh.position.set(0, 1.25, 0);
    this.mascotGroup.add(this.characterMesh);

    // 3. Orbiting Holographic Gyroscope Rings
    const ring1Geo = new THREE.TorusGeometry(1.6, 0.015, 16, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xff2a85, wireframe: true });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.position.set(0, 1.25, 0);
    ring1.rotation.x = Math.PI / 2.5;
    this.mascotGroup.add(ring1);
    this.holoRings.push(ring1);

    const ring2Geo = new THREE.TorusGeometry(1.85, 0.012, 16, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.position.set(0, 1.25, 0);
    ring2.rotation.y = Math.PI / 3;
    this.mascotGroup.add(ring2);
    this.holoRings.push(ring2);

    // 4. Floating 3D Cyber Shards & Tech Nodes
    this.shardGroup = new THREE.Group();
    for (let i = 0; i < 20; i++) {
      const shardGeo = i % 2 === 0 ? new THREE.OctahedronGeometry(0.07) : new THREE.TetrahedronGeometry(0.08);
      const shardMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xff2a85 : 0x00f0ff,
        wireframe: true
      });
      const shard = new THREE.Mesh(shardGeo, shardMat);
      const angle = (i / 20) * Math.PI * 2;
      const radius = 1.35 + Math.sin(i) * 0.3;
      shard.position.set(Math.cos(angle) * radius, 0.4 + (i / 20) * 1.8, Math.sin(angle) * radius);
      this.shardGroup.add(shard);
    }
    this.mascotGroup.add(this.shardGroup);

    // Center pivot
    this.mascotGroup.position.set(0, -0.3, 0);
    this.scene.add(this.mascotGroup);
  }

  updateAngleTexture() {
    if (!this.characterMesh || !this.camera || !this.textures.front) return;

    // Calculate relative viewing angle between camera and mascot
    const camPos = this.camera.position;
    const mascotRot = this.mascotGroup ? this.mascotGroup.rotation.y : 0;
    
    // Angle in radians from mascot's forward vector
    let angle = Math.atan2(camPos.x, camPos.z) - mascotRot;
    
    // Normalize to [0, 2*PI)
    angle = (angle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    const deg = (angle * 180) / Math.PI;

    let targetKey = 'front';
    let flipX = false;

    // 8-directional angle mapping to available turnaround textures
    if (deg >= 337.5 || deg < 22.5) {
      targetKey = 'front';
    } else if (deg >= 22.5 && deg < 67.5) {
      targetKey = 'front34';
      flipX = false;
    } else if (deg >= 67.5 && deg < 112.5) {
      targetKey = 'side';
      flipX = false;
    } else if (deg >= 112.5 && deg < 157.5) {
      targetKey = 'back34';
      flipX = false;
    } else if (deg >= 157.5 && deg < 202.5) {
      targetKey = 'back';
    } else if (deg >= 202.5 && deg < 247.5) {
      targetKey = 'back34';
      flipX = true; // Mirrored for symmetrical 3/4 back
    } else if (deg >= 247.5 && deg < 292.5) {
      targetKey = 'side';
      flipX = true; // Mirrored for left profile
    } else if (deg >= 292.5 && deg < 337.5) {
      targetKey = 'front34';
      flipX = true; // Mirrored for left 3/4 front
    }

    if (this.textures[targetKey] && this.characterMaterial.map !== this.textures[targetKey]) {
      this.characterMaterial.map = this.textures[targetKey];
      this.characterMaterial.needsUpdate = true;
    }

    // Apply horizontal mirroring if viewing from opposite side
    this.characterMesh.scale.x = flipX ? -1 : 1;
  }

  setCameraPreset(preset) {
    if (!this.camera || !this.controls) return;

    let targetPos = { x: 0, y: 1.3, z: 4.2 };

    switch (preset) {
      case 'front':
        targetPos = { x: 0, y: 1.3, z: 4.2 };
        break;
      case 'front34':
        targetPos = { x: 2.8, y: 1.5, z: 3.0 };
        break;
      case 'side':
        targetPos = { x: 4.2, y: 1.3, z: 0.1 };
        break;
      case 'back34':
        targetPos = { x: 2.8, y: 1.5, z: -3.0 };
        break;
      case 'back':
        targetPos = { x: 0, y: 1.3, z: -4.2 };
        break;
      case 'hero':
        targetPos = { x: 0, y: 0.5, z: 3.6 };
        break;
      case 'action':
        targetPos = { x: -2.6, y: 1.8, z: 3.0 };
        break;
      case 'emblem':
        targetPos = { x: 0, y: 1.8, z: 2.2 };
        break;
      default:
        targetPos = { x: 0, y: 1.3, z: 4.2 };
    }

    this.camera.position.set(targetPos.x, targetPos.y, targetPos.z);
    this.controls.target.set(0, 1.1, 0);
    this.controls.update();
  }

  toggleWireframe() {
    this.isWireframe = !this.isWireframe;
    if (this.characterMaterial) {
      this.characterMaterial.wireframe = this.isWireframe;
      this.characterMaterial.needsUpdate = true;
    }
    if (this.mascotGroup) {
      this.mascotGroup.traverse((child) => {
        if (child.isMesh && child.material && child !== this.characterMesh) {
          child.material.wireframe = this.isWireframe;
        }
      });
    }
    return this.isWireframe;
  }

  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    return this.autoRotate;
  }

  setRotationSpeed(speed) {
    this.rotationSpeed = speed;
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // Auto rotate turntable
    if (this.autoRotate && this.mascotGroup) {
      this.mascotGroup.rotation.y += this.rotationSpeed;
    }

    // Dynamic Turnaround Texture Angle Switcher
    this.updateAngleTexture();

    // Floating breathing bounce
    if (this.mascotGroup) {
      this.mascotGroup.position.y = -0.3 + Math.sin(elapsedTime * 1.8) * 0.05;
    }

    // Rotate Hologram Rings
    if (this.holoRings.length >= 2) {
      this.holoRings[0].rotation.z = elapsedTime * 0.6;
      this.holoRings[1].rotation.x = elapsedTime * 0.45;
    }

    // Rotate Data Shards
    if (this.shardGroup) {
      this.shardGroup.rotation.y = -elapsedTime * 0.4;
    }

    if (this.controls) {
      this.controls.update();
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
