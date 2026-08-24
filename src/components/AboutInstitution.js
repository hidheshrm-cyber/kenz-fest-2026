import { FEST_CONFIG } from '../config/festConfig.js';

export function renderAboutInstitution() {
  const inst = FEST_CONFIG.institution;

  return `
    <section id="about" class="cyber-section-ambient" style="position: relative; z-index: 2; padding: 130px 0 80px; min-height: 100vh; overflow: hidden;">
      
      <!-- Background Cyber Objects & Ambience -->
      <div class="cyber-bg-grid-mesh"></div>
      <div class="cyber-bg-orb cyber-bg-orb-cyan" style="width: 500px; height: 500px; top: 10%; right: -100px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-pink" style="width: 450px; height: 450px; bottom: 10%; left: -90px;"></div>
      <div class="cyber-floating-ring" style="width: 380px; height: 380px; top: 15%; left: 5%;"></div>
      <div class="cyber-floating-diamond" style="bottom: 20%; right: 6%;"></div>
      <div class="cyber-watermark" style="top: 18%; left: 50%; transform: translateX(-50%); opacity: 0.035;">KNCET</div>

      <div class="container" style="position: relative; z-index: 2;">
        
        <div class="cyber-panel cyber-hud-bracket cyber-popup-scale" style="padding: 50px 40px; background: linear-gradient(135deg, rgba(18, 9, 28, 0.85) 0%, rgba(9, 5, 14, 0.95) 100%); border-color: var(--border-glow);">
          
          <!-- Glowing Background Orb -->
          <div style="position: absolute; top: -50px; right: -50px; width: 350px; height: 350px; background: var(--neon-pink-glow); filter: blur(100px); border-radius: 50%; pointer-events: none;"></div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 44px; align-items: center;">
            
            <!-- Left Info Column -->
            <div class="cyber-popup stagger-1">
              <div class="cyber-badge" style="margin-bottom: 16px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                <span>HOST INSTITUTION PROFILE</span>
              </div>

              <!-- Official College Logo & Title Row -->
              <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 20px; flex-wrap: wrap;">
                <div style="padding: 8px 16px; border-radius: 10px; background: rgba(255, 255, 255, 0.96); box-shadow: 0 0 25px rgba(0, 240, 255, 0.35); border: 1px solid var(--border-cyan-glow); display: inline-flex; align-items: center; justify-content: center;">
                  <img src="${inst.logo}" alt="${inst.name} Official Logo" style="height: 48px; width: auto; object-fit: contain; display: block;" />
                </div>
                <div>
                  <h2 class="text-gradient-pink" style="font-family: var(--font-heading); font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; letter-spacing: 1px; margin: 0; line-height: 1.1;">
                    ${inst.shortName}
                  </h2>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--neon-cyan); font-weight: 700; letter-spacing: 1.5px; display: block; margin-top: 4px;">AUTONOMOUS CAMPUS</span>
                </div>
              </div>

              <h3 style="font-family: var(--font-cyber); font-size: 1.1rem; color: #fff; margin-bottom: 14px; font-weight: 700;">
                ${inst.name}
              </h3>

              <p style="color: var(--neon-cyan); font-family: var(--font-mono); font-size: 0.8rem; line-height: 1.5; margin-bottom: 16px;">
                ${inst.affiliation} • ${inst.accreditation}
              </p>

              <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.65; margin-bottom: 24px;">
                Kongunadu College of Engineering and Technology is a premier engineering destination equipped with world-class computing facilities, robotic innovation incubators, and high-performance research laboratories dedicated to fostering technological excellence.
              </p>

              <!-- Stats Metrics Row -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 24px;">
                ${FEST_CONFIG.stats.map(st => `
                  <div class="cyber-popup stagger-2" style="padding: 16px; border-radius: 8px; background: rgba(255, 42, 133, 0.06); border: 1px solid var(--border-subtle);">
                    <div style="font-family: var(--font-cyber); font-size: 1.5rem; font-weight: 900; color: var(--neon-pink); line-height: 1; margin-bottom: 4px;">
                      ${st.value}
                    </div>
                    <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); letter-spacing: 1px;">
                      ${st.label}
                    </div>
                  </div>
                `).join('')}
              </div>

            </div>

            <!-- Right Visual Banner Card Column -->
            <div class="cyber-panel cyber-popup stagger-3" style="padding: 24px; background: rgba(7, 5, 13, 0.8); border-color: var(--border-subtle); display: flex; flex-direction: column; gap: 20px;">
              
              <!-- Mascot AI Matrix Banner -->
              <div style="width: 100%; height: 220px; border-radius: 12px; overflow: hidden; position: relative; border: 1px solid var(--border-subtle);">
                <img src="${FEST_CONFIG.mascot.actionImage}" alt="Cyber Panther Matrix Lab" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.95) contrast(1.15);">
                <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(4, 2, 8, 0.85); padding: 4px 14px; border-radius: 20px; border: 1px solid var(--neon-pink); font-family: var(--font-mono); font-size: 0.72rem; color: var(--neon-pink);">
                  [CAMPUS AI MATRIX LAB // ACTIVE]
                </div>
              </div>

              <!-- Campus Geolocation & Contacts -->
              <div style="display: flex; flex-direction: column; gap: 14px;">
                
                <div style="display: flex; gap: 12px; align-items: flex-start;">
                  <div style="color: var(--neon-pink); margin-top: 3px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <strong style="color: #fff; font-size: 0.92rem; display: block;">Campus Venue</strong>
                    <span style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.4; display: block;">${inst.location}</span>
                  </div>
                </div>

                <div style="display: flex; gap: 12px; align-items: flex-start;">
                  <div style="color: var(--neon-cyan); margin-top: 3px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <strong style="color: #fff; font-size: 0.92rem; display: block;">Official Queries</strong>
                    <a href="mailto:${inst.contactEmail}" style="color: var(--neon-pink); font-size: 0.88rem; font-weight: 600; text-decoration: none;">${inst.contactEmail}</a>
                  </div>
                </div>

              </div>

              <!-- College Website Link -->
              <a href="${inst.website}" target="_blank" rel="noopener" class="btn-cyber-outline" style="width: 100%; justify-content: center; text-align: center; margin-top: 6px;">
                VISIT INSTITUTION WEBSITE
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
