export function renderSponsorsSection() {
  return `
    <section id="sponsors-section" class="cyber-section-ambient" style="min-height: 100vh; padding: 130px 0 80px; position: relative;">
      
      <!-- Background Cyber Objects & Ambience -->
      <div class="cyber-bg-grid-mesh"></div>
      <div class="cyber-bg-orb cyber-bg-orb-pink" style="width: 500px; height: 500px; top: 10%; left: -100px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-cyan" style="width: 450px; height: 450px; bottom: 10%; right: -80px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-purple" style="width: 350px; height: 350px; top: 40%; left: 60%;"></div>
      <div class="cyber-floating-ring" style="width: 400px; height: 400px; top: 15%; right: 5%;"></div>
      <div class="cyber-floating-diamond" style="top: 60%; left: 8%;"></div>
      <div class="cyber-watermark" style="top: 25%; left: 50%; transform: translateX(-50%); opacity: 0.035;">PARTNERS</div>

      <div class="container" style="position: relative; z-index: 2;">
        
        <div class="section-header text-center cyber-popup stagger-1">
          <div class="cyber-badge" style="margin-bottom: 12px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>STRATEGIC ALLIANCES</span>
          </div>
          <h2 class="glitch-text text-gradient-pink" data-text="SPONSORS & PARTNERS" style="font-family: var(--font-heading); font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 900; letter-spacing: -1px; margin-bottom: 12px;">
            SPONSORS & PARTNERS
          </h2>
          <div class="cyber-divider" style="margin: 20px auto;"></div>
          <p style="color: var(--text-secondary); font-size: 1.05rem; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            Powered by industry pioneers and tech leaders shaping the frontier of engineering excellence.
          </p>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; margin-top: 50px;" class="cyber-popup stagger-2">
          
          <!-- Platinum Sponsor -->
          <div class="cyber-panel cyber-hud-bracket" style="padding: 40px; text-align: center; width: 100%; max-width: 650px; border-color: var(--neon-pink); background: rgba(14, 8, 22, 0.85); box-shadow: 0 0 30px rgba(255, 42, 133, 0.15);">
            <div style="color: var(--neon-pink); font-family: var(--font-cyber); font-size: 0.85rem; letter-spacing: 3px; font-weight: 800; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span style="display: inline-block; width: 8px; height: 8px; background: var(--neon-pink); border-radius: 50%; box-shadow: 0 0 8px var(--neon-pink);"></span>
              PLATINUM TITLE SPONSOR
            </div>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,42,133,0.2); padding: 40px; border-radius: 12px;">
              <h3 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; letter-spacing: 1px;">AICTE IDEA LAB</h3>
              <p style="color: var(--neon-cyan); font-family: var(--font-mono); font-size: 0.85rem; margin-top: 8px;">Innovation, Design & Entrepreneurship Academy</p>
            </div>
          </div>

          <!-- Gold Sponsors -->
          <div style="display: flex; gap: 24px; width: 100%; max-width: 650px; flex-wrap: wrap;">
            <div class="cyber-panel cyber-hud-bracket" style="padding: 30px; text-align: center; flex: 1; min-width: 260px; border-color: var(--neon-cyan); background: rgba(14, 8, 22, 0.85);">
              <div style="color: var(--neon-cyan); font-family: var(--font-cyber); font-size: 0.75rem; letter-spacing: 2px; font-weight: 800; margin-bottom: 16px;">
                ASSOCIATE PARTNER
              </div>
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0,240,255,0.2); padding: 24px; border-radius: 10px;">
                <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: #fff;">KNCET ALUMNI</h3>
                <p style="color: var(--text-muted); font-size: 0.78rem; font-family: var(--font-mono); margin-top: 4px;">Global Engineering Network</p>
              </div>
            </div>

            <div class="cyber-panel cyber-hud-bracket" style="padding: 30px; text-align: center; flex: 1; min-width: 260px; border-color: var(--neon-cyan); background: rgba(14, 8, 22, 0.85);">
              <div style="color: var(--neon-cyan); font-family: var(--font-cyber); font-size: 0.75rem; letter-spacing: 2px; font-weight: 800; margin-bottom: 16px;">
                TECH ECOSYSTEM PARTNER
              </div>
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(0,240,255,0.2); padding: 24px; border-radius: 10px;">
                <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: #fff;">CYBER CORP LABS</h3>
                <p style="color: var(--text-muted); font-size: 0.78rem; font-family: var(--font-mono); margin-top: 4px;">Next-Gen Software Solutions</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

