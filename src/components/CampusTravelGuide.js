import { FEST_CONFIG } from '../config/festConfig.js';

export function renderCampusTravelGuide() {
  const inst = FEST_CONFIG.institution;

  return `
    <section id="travel-guide" class="cyber-section-ambient" style="padding: 130px 0 80px; min-height: 100vh; position: relative; overflow: hidden;">
      
      <!-- Background Cyber Objects & Ambience -->
      <div class="cyber-bg-grid-mesh"></div>
      <div class="cyber-bg-orb cyber-bg-orb-cyan" style="width: 520px; height: 520px; top: 12%; left: -100px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-pink" style="width: 460px; height: 460px; bottom: 10%; right: -90px;"></div>
      <div class="cyber-floating-ring" style="width: 400px; height: 400px; top: 15%; right: 6%;"></div>
      <div class="cyber-floating-diamond" style="bottom: 25%; left: 8%;"></div>
      <div class="cyber-watermark" style="top: 15%; left: 50%; transform: translateX(-50%); opacity: 0.035;">LOCATION</div>

      <div class="container" style="position: relative; z-index: 2;">
        
        <!-- Section Header -->
        <div style="text-align: center; margin-bottom: 50px;" class="cyber-popup stagger-1">
          <div class="cyber-badge-cyan" style="margin-bottom: 12px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="10" r="3"></circle><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path></svg>
            <span>TRANSIT & CAMPUS GPS</span>
          </div>
          <h2 class="text-gradient-cyan" style="font-family: var(--font-heading); font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 900; letter-spacing: -1px; margin-bottom: 12px; text-transform: uppercase;">
            CAMPUS LOCATION & TRAVEL GUIDE
          </h2>
          <p style="color: var(--text-secondary); max-width: 620px; margin: 0 auto; font-size: 0.95rem; line-height: 1.6;">
            Conveniently situated on the Namakkal–Trichy State Highway with non-stop bus connectivity, dedicated participant pickup points, and direct transit assistance.
          </p>
        </div>

        <!-- 2-Column Grid: Map / GPS Card (Left) + Transit & Bus Routes (Right) -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; margin-bottom: 36px;">
          
          <!-- Left Column: Interactive Map & GPS Hub -->
          <div class="cyber-panel cyber-hud-bracket cyber-popup stagger-2" style="padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <h3 style="font-family: var(--font-cyber); font-size: 1.15rem; color: #fff; margin: 0; font-weight: 800;">
                  CAMPUS GPS COORDINATES
                </h3>
                <span class="cyber-badge" style="font-size: 0.68rem;">HIGHWAY HUB</span>
              </div>

              <!-- Map Embed Frame -->
              <div style="width: 100%; height: 260px; border-radius: 10px; overflow: hidden; border: 1px solid var(--border-glow); margin-bottom: 18px; position: relative; background: #000;">
                <iframe 
                  title="Kongunadu College of Engineering and Technology Location"
                  src="https://maps.google.com/maps?q=Kongunadu%20College%20of%20Engineering%20and%20Technology,%20Thottiam&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style="border:0; filter: contrast(1.1) brightness(0.85) invert(90%) hue-rotate(180deg);" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

              <!-- Address & Coordinates Block -->
              <div style="font-family: var(--font-mono); font-size: 0.84rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
                <strong style="color: #fff; font-size: 0.92rem; display: block; margin-bottom: 4px;">${inst.name}</strong>
                ${inst.location}
              </div>
            </div>

            <div style="display: flex; gap: 12px; flex-wrap: wrap; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 16px;">
              <a href="https://maps.google.com/?q=Kongunadu+College+of+Engineering+and+Technology+Thottiam" target="_blank" rel="noopener noreferrer" class="btn-cyber-cyan" style="flex: 1; justify-content: center; padding: 10px 16px; font-size: 0.8rem;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                <span>OPEN IN GOOGLE MAPS</span>
              </a>
              <a href="tel:+919842712345" class="btn-cyber-outline" style="padding: 10px 16px; font-size: 0.8rem;">
                <span>TRANSIT HELPLINE</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Bus Routes & Transport Directives -->
          <div class="cyber-panel cyber-hud-bracket cyber-popup stagger-3" style="padding: 24px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--neon-pink); box-shadow: 0 0 10px var(--neon-pink);"></div>
              <h3 style="font-family: var(--font-cyber); font-size: 1.15rem; color: #fff; margin: 0; font-weight: 800;">
                TRANSIT DIRECTIVES & BUS ROUTES
              </h3>
            </div>

            <div style="display: flex; flex-direction: column; gap: 14px;">
              
              <!-- Route 1: Trichy Route -->
              <div style="padding: 14px 16px; border-radius: 8px; background: rgba(0, 240, 255, 0.04); border: 1px solid rgba(0, 240, 255, 0.15);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-family: var(--font-cyber); font-size: 0.88rem; color: var(--neon-cyan); font-weight: 800;">FROM TRICHY (TIRUCHIRAPPALLI)</span>
                  <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">~45 KM • ~50 MINS</span>
                </div>
                <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45; margin: 0;">
                  Board any government or private bus heading towards <strong>Namakkal / Salem</strong> from Chathiram Bus Stand or Central Bus Stand. Request the <strong>"Kongunadu College Stop"</strong> directly in front of the main campus arch.
                </p>
              </div>

              <!-- Route 2: Namakkal Route -->
              <div style="padding: 14px 16px; border-radius: 8px; background: rgba(255, 42, 133, 0.04); border: 1px solid rgba(255, 42, 133, 0.15);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-family: var(--font-cyber); font-size: 0.88rem; color: var(--neon-pink); font-weight: 800;">FROM NAMAKKAL / SALEM</span>
                  <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">~35 KM • ~40 MINS</span>
                </div>
                <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45; margin: 0;">
                  From Namakkal Central Bus Stand, take any direct Trichy-bound bus via Thottiam. Buses run every <strong>10 minutes</strong>. Get down at the college entrance gate.
                </p>
              </div>

              <!-- Route 3: Karur / Musiri / Erode Route -->
              <div style="padding: 14px 16px; border-radius: 8px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-family: var(--font-cyber); font-size: 0.88rem; color: #fff; font-weight: 800;">FROM KARUR / MUSIRI / ERODE</span>
                  <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">DIRECT CONNECTIVITY</span>
                </div>
                <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45; margin: 0;">
                  Regular connecting services operate via Musiri and Thottiam junctions with round-the-clock local transport and auto services.
                </p>
              </div>

              <!-- Route 4: Railway Hubs -->
              <div style="padding: 12px 16px; border-radius: 8px; background: rgba(0, 0, 0, 0.4); border: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 12px;">
                <div style="font-size: 1.5rem;">🚆</div>
                <div style="font-size: 0.8rem; color: var(--text-secondary); font-family: var(--font-mono);">
                  <strong>Nearest Railway Stations:</strong> Trichy Junction (TPJ), Namakkal (NMKL), Karur Junction (KRR).
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
