import { FEST_CONFIG } from '../config/festConfig.js';

export function renderCyberFooter() {
  const inst = FEST_CONFIG.institution;

  return `
    <footer id="contact" style="background: rgba(4, 2, 7, 0.95); border-top: 1px solid var(--border-subtle); padding: 80px 0 40px; position: relative;">
      <div class="container">
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; margin-bottom: 60px;">
          
          <!-- Column 1: Festival Identity -->
          <div>
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
              <div style="width: 52px; height: 52px; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px var(--neon-pink-glow); flex-shrink: 0; background: #000;">
                <img src="${FEST_CONFIG.mascot.officialLogo}" alt="KEN'Z FEST Logo" style="width: 100%; height: 100%; object-fit: contain;">
              </div>
              <div>
                <div style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 900; color: #fff; letter-spacing: 2px;">
                  ${FEST_CONFIG.name}
                </div>
                <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--neon-pink);">KNCET AUTONOMOUS</span>
              </div>
            </div>

            <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 20px;">
              ${FEST_CONFIG.tagline}. The premier national level tech fest of ${inst.name}.
            </p>

            <div style="width: 100%; max-width: 320px; border-radius: 10px; overflow: hidden; border: 1px solid var(--border-subtle); box-shadow: 0 0 16px var(--neon-pink-subtle);">
              <img src="${FEST_CONFIG.mascot.ogBanner}" alt="Social Media Banner" style="width: 100%; height: auto; display: block;">
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h4 style="font-family: var(--font-cyber); font-size: 0.9rem; font-weight: 700; color: var(--neon-pink); letter-spacing: 2px; margin-bottom: 16px;">
              NAVIGATION HUD
            </h4>
            <div style="display: flex; flex-direction: column; gap: 10px; font-family: var(--font-mono); font-size: 0.85rem;">
              <a href="#hero" style="color: var(--text-secondary); text-decoration: none; transition: color 0.2s;">> 01. HOME PORTAL</a>
              <a href="#events" style="color: var(--text-secondary); text-decoration: none; transition: color 0.2s;">> 02. COMPETITION TRACKS</a>
              <a href="#mascot-3d" style="color: var(--text-secondary); text-decoration: none; transition: color 0.2s;">> 03. 3D MASCOT INSPECTOR</a>
              <a href="#schedule" style="color: var(--text-secondary); text-decoration: none; transition: color 0.2s;">> 04. EVENT SCHEDULE & TIMELINE</a>
              <a href="#coordinators" style="color: var(--text-secondary); text-decoration: none; transition: color 0.2s;">> 05. EVENT COORDINATORS</a>
              <a href="#travel-guide" style="color: var(--text-secondary); text-decoration: none; transition: color 0.2s;">> 06. LOCATION & BUS ROUTES</a>
              <a href="#about" style="color: var(--text-secondary); text-decoration: none; transition: color 0.2s;">> 07. HOST INSTITUTION</a>
              <a href="#admin" style="color: var(--neon-pink); text-decoration: none; font-weight: 700; transition: color 0.2s;">> 08. ADMIN QR SCANNER</a>
            </div>
          </div>

          <!-- Column 3: Contact & Venue -->
          <div>
            <h4 style="font-family: var(--font-cyber); font-size: 0.9rem; font-weight: 700; color: var(--neon-cyan); letter-spacing: 2px; margin-bottom: 16px;">
              CAMPUS HEADQUARTERS
            </h4>
            <div style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.5; margin-bottom: 14px;">
              <strong style="color: #fff;">${inst.name}</strong><br/>
              ${inst.location}
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted); margin-bottom: 8px;">
              COORDINATES: <span style="color: var(--neon-cyan);">${inst.coordinates}</span>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem;">
              EMAIL: <a href="mailto:${inst.contactEmail}" style="color: var(--neon-pink); text-decoration: none; font-weight: 700;">${inst.contactEmail}</a>
            </div>
          </div>

        </div>

        <div style="border-top: 1px solid rgba(255, 42, 133, 0.12); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">
          <div>
            &copy; 2026 ${FEST_CONFIG.name}. Kongunadu College of Engineering and Technology.
          </div>
          <div style="color: var(--neon-pink);">
            SYSTEM: THREE.JS WEBGL // PRODUCTION READY
          </div>
        </div>

      </div>
    </footer>
  `;
}
