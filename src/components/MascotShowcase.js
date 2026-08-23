import { FEST_CONFIG } from '../config/festConfig.js';

export function renderMascotShowcase() {
  const angles = FEST_CONFIG.mascot.angles;
  
  return `
    <section id="mascot-showcase" class="reveal-on-scroll" style="padding: 100px 0; position: relative;">
      <div class="container">
        
        <!-- Section Header -->
        <div style="text-align: center; margin-bottom: 50px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; padding: 4px 14px; border-radius: 20px; background: var(--neon-pink-subtle); border: 1px solid var(--border-subtle); color: var(--neon-pink); font-family: var(--font-heading); font-size: 0.75rem; font-weight: 700; letter-spacing: 2px; margin-bottom: 16px;">
            <span>360° INTERACTIVE EXPERIENCE</span>
          </div>
          <h2 class="gradient-text-pink" style="font-family: var(--font-heading); font-size: clamp(2.2rem, 4.5vw, 3.5rem); font-weight: 900; letter-spacing: 2px; margin-bottom: 12px;">
            OFFICIAL MASCOT SHOWCASE
          </h2>
          <p style="color: var(--text-secondary); font-size: 1.05rem; max-width: 620px; margin: 0 auto; line-height: 1.6;">
            Explore the futuristic <strong>Pink Panther</strong> visual identity from every angle. Click or drag to inspect the character's 360° profile.
          </p>
        </div>

        <!-- 360° Character Viewer Stage -->
        <div class="glass-panel" style="max-width: 900px; margin: 0 auto; padding: 40px; position: relative; overflow: hidden; background: radial-gradient(circle at center, rgba(255, 42, 133, 0.12) 0%, rgba(9, 5, 14, 0.9) 75%); border: 1px solid var(--border-glow);">
          
          <!-- Cyber HUD Background Elements -->
          <div style="position: absolute; top: 20px; left: 24px; font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-pink); opacity: 0.8;">
            [MASCOT_ID: PINK_PANTHER_2026]
          </div>
          <div style="position: absolute; top: 20px; right: 24px; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
            MODE: 360° ROTATION
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; align-items: center;">
            
            <!-- Character Display Image Container -->
            <div style="position: relative; height: 380px; display: flex; align-items: center; justify-content: center;">
              
              <!-- Glowing Halo Rings -->
              <div style="position: absolute; width: 280px; height: 280px; border: 1px dashed var(--neon-pink-glow); border-radius: 50%; animation: spinSlow 20s linear infinite;"></div>
              <div style="position: absolute; width: 220px; height: 220px; border: 1px solid rgba(157, 78, 221, 0.3); border-radius: 50%;"></div>
              
              <!-- Main Active Image -->
              <img id="mascot-angle-img" src="${angles[0].src}" alt="${angles[0].label}" style="height: 340px; width: auto; object-fit: contain; position: relative; z-index: 2; filter: drop-shadow(0 0 25px rgba(255, 42, 133, 0.5)); transition: opacity 0.3s ease, transform 0.3s var(--ease-out-expo);" />
            
            </div>

            <!-- Interactive Angle Selectors & Spec Info -->
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div>
                <span style="font-family: var(--font-heading); font-size: 0.8rem; font-weight: 800; color: var(--neon-pink); letter-spacing: 2px; display: block; margin-bottom: 8px;">
                  CHARACTER PROFILE
                </span>
                <h3 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 900; color: #fff; margin-bottom: 12px;">
                  THE PINK PANTHER
                </h3>
                <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
                  Dressed in futuristic cyberpunk attire with pink shirt, blue shorts, gold chain, and sleek dark sunglasses — serving as the official ambassador for <strong>KEN'Z FEST</strong>.
                </p>
              </div>

              <!-- Angle Chips -->
              <div>
                <label style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 12px;">
                  SELECT ANGLE / ROTATE VIEW (CLICK):
                </label>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;" id="mascot-angle-buttons">
                  ${angles.map((ang, idx) => `
                    <button class="mascot-angle-chip ${idx === 0 ? 'active' : ''}" data-src="${ang.src}" data-label="${ang.label}" style="padding: 10px 16px; border-radius: 8px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: ${idx === 0 ? '#fff' : 'var(--text-secondary)'}; background: ${idx === 0 ? 'var(--neon-pink)' : 'rgba(255, 42, 133, 0.1)'}; border: 1px solid ${idx === 0 ? 'var(--neon-pink)' : 'var(--border-subtle)'}; transition: all 0.25s ease; cursor: pointer;">
                      ${ang.label} (${ang.angle})
                    </button>
                  `).join('')}
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 16px; padding-top: 16px; border-top: 1px solid rgba(255, 42, 133, 0.15);">
                <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">
                  <span style="color: var(--neon-pink); font-weight: 700;">360° ROTATION:</span> AUTOMATIC / MANUAL
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}
