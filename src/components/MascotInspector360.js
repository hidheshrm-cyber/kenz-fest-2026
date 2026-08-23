import { FEST_CONFIG } from '../config/festConfig.js';

export function renderMascotInspector360() {
  const angles = FEST_CONFIG.mascot.angles;

  return `
    <section id="mascot-3d" style="position: relative; padding: 100px 0; overflow: hidden;">
      <div class="container" style="position: relative; z-index: 2;">
        
        <!-- Section Header -->
        <div class="cyber-popup" style="text-align: center; margin-bottom: 40px;">
          <div class="cyber-badge-cyan" style="margin-bottom: 16px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            <span>REAL-TIME 3D WEBGL ENGINE</span>
          </div>
          <h2 class="text-gradient-pink" style="font-family: var(--font-heading); font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 900; letter-spacing: 2px; margin-bottom: 14px;">
            3D MASCOT INSPECTOR
          </h2>
          <p style="color: var(--text-secondary); font-size: 1.05rem; max-width: 650px; margin: 0 auto; line-height: 1.6;">
            Interact with the official <strong>Cyber Pink Panther</strong> in real-time 3D space. Rotate, inspect wireframes, and switch camera angles.
          </p>
        </div>

        <!-- 3D Viewer Stage Panel -->
        <div class="cyber-panel cyber-hud-bracket cyber-popup-scale" style="padding: 30px; position: relative; background: radial-gradient(circle at center, rgba(255, 42, 133, 0.08) 0%, rgba(9, 5, 14, 0.95) 75%); border-color: var(--border-glow);">
          
          <!-- Top HUD Header -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid rgba(255, 42, 133, 0.15); padding-bottom: 12px; flex-wrap: wrap; gap: 10px;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-pink);">
              [AVATAR_ID: CYBER_PANTHER_2026 // WEBGL_RENDER]
            </div>
            <div style="display: flex; gap: 10px; align-items: center;">
              
              <!-- Wireframe Toggle -->
              <button id="toggle-wireframe-btn" class="btn-cyber-outline" style="padding: 6px 14px; font-size: 0.7rem;">
                WIREFRAME: OFF
              </button>

              <!-- Turntable Toggle -->
              <button id="toggle-autorotate-btn" class="btn-cyber-outline" style="padding: 6px 14px; font-size: 0.7rem;">
                ROTATION: AUTO
              </button>

            </div>
          </div>

          <!-- Main Layout Grid (3D Canvas + Controls) -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; align-items: center;">
            
            <!-- Three.js 3D WebGL Canvas Container -->
            <div id="three-mascot-container" style="width: 100%; height: 420px; border-radius: 12px; overflow: hidden; position: relative; background: rgba(5, 3, 8, 0.6); border: 1px solid var(--border-subtle); cursor: grab;">
              <!-- Overlay 3D Hint -->
              <div style="position: absolute; bottom: 12px; left: 16px; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); pointer-events: none;">
                [DRAG / SCROLL TO ORBIT & ZOOM 3D SCENE]
              </div>
            </div>

            <!-- Interactive Angle Chips & Character Info -->
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div>
                <span class="cyber-badge" style="margin-bottom: 8px;">MASCOT BIOMETRICS</span>
                <h3 style="font-family: var(--font-cyber); font-size: 1.8rem; font-weight: 900; color: #fff; margin-bottom: 10px;">
                  CYBER PINK PANTHER
                </h3>
                <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
                  Equipped with neon cybernetic eye HUD, holographic code wings, gold chain necklace, and high-frequency pink sneakers — serving as the official digital ambassador for KEN'Z FEST.
                </p>
              </div>

              <!-- Camera Preset Selector Buttons -->
              <div>
                <label style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 12px;">
                  SELECT CAMERA PRESET / PERSPECTIVE:
                </label>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="mascot-angle-buttons">
                  ${angles.map((ang, idx) => `
                    <button class="mascot-camera-chip cyber-tab-btn ${idx === 0 ? 'active' : ''}" data-preset="${ang.id}">
                      ${ang.label} (${ang.angle})
                    </button>
                  `).join('')}
                </div>
              </div>

              <div style="padding-top: 16px; border-top: 1px solid rgba(255, 42, 133, 0.15); font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); display: flex; justify-content: space-between;">
                <span>FPS: <strong style="color: var(--neon-cyan);">60.0 STABLE</strong></span>
                <span>RENDERER: <strong style="color: var(--neon-pink);">THREE.JS SHADER</strong></span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
