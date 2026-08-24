export function renderFAQSection() {
  return `
    <section id="faq-section" class="cyber-section-ambient" style="min-height: 100vh; padding: 130px 0 80px; position: relative;">
      
      <!-- Background Cyber Objects & Ambience -->
      <div class="cyber-bg-grid-mesh"></div>
      <div class="cyber-bg-orb cyber-bg-orb-cyan" style="width: 520px; height: 520px; top: 12%; right: -120px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-pink" style="width: 420px; height: 420px; bottom: 8%; left: -80px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-purple" style="width: 380px; height: 380px; top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>
      <div class="cyber-floating-ring" style="width: 350px; height: 350px; bottom: 18%; right: 8%;"></div>
      <div class="cyber-floating-diamond" style="top: 22%; left: 6%;"></div>
      <div class="cyber-watermark" style="top: 20%; left: 50%; transform: translateX(-50%); opacity: 0.035;">SUPPORT</div>

      <div class="container" style="position: relative; z-index: 2;">
        
        <div class="section-header text-center cyber-popup stagger-1">
          <div class="cyber-badge" style="margin-bottom: 12px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <span>KNOWLEDGE BASE & FAQ</span>
          </div>
          <h2 class="glitch-text text-gradient-pink" data-text="FAQ & SUPPORT" style="font-family: var(--font-heading); font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 900; letter-spacing: -1px; margin-bottom: 12px;">
            FAQ & SUPPORT
          </h2>
          <div class="cyber-divider" style="margin: 20px auto;"></div>
          <p style="color: var(--text-secondary); font-size: 1.05rem; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            Got questions? We have answers. Find everything you need to know about KEN'Z FEST 2026.
          </p>
        </div>

        <div style="max-width: 820px; margin: 50px auto 0; display: flex; flex-direction: column; gap: 18px;" class="cyber-popup stagger-2">
          
          <div class="cyber-panel cyber-hud-bracket" style="padding: 26px; background: rgba(14, 8, 22, 0.85); border: 1px solid var(--border-glow);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
              <span style="display: inline-block; width: 8px; height: 8px; background: var(--neon-cyan); border-radius: 50%; box-shadow: 0 0 8px var(--neon-cyan);"></span>
              <h3 style="color: #fff; font-family: var(--font-cyber); font-size: 1.15rem; letter-spacing: 1px;">When and where is KEN'Z FEST happening?</h3>
            </div>
            <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.92rem; padding-left: 20px;">
              The fest takes place at the <strong style="color: #fff;">Kongunadu College of Engineering and Technology (KNCET)</strong> campus. Check out the <a href="#/location" style="color: var(--neon-cyan); text-decoration: underline;">Location tab</a> for travel routes, GPS coordinates, and bus schedules.
            </p>
          </div>

          <div class="cyber-panel cyber-hud-bracket" style="padding: 26px; background: rgba(14, 8, 22, 0.85); border: 1px solid var(--border-glow);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
              <span style="display: inline-block; width: 8px; height: 8px; background: var(--neon-pink); border-radius: 50%; box-shadow: 0 0 8px var(--neon-pink);"></span>
              <h3 style="color: #fff; font-family: var(--font-cyber); font-size: 1.15rem; letter-spacing: 1px;">Who is eligible to participate?</h3>
            </div>
            <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.92rem; padding-left: 20px;">
              All registered undergraduate and postgraduate engineering, polytechnic, and arts/science students with a valid college ID card are welcome to participate in workshops and competition tracks.
            </p>
          </div>

          <div class="cyber-panel cyber-hud-bracket" style="padding: 26px; background: rgba(14, 8, 22, 0.85); border: 1px solid var(--border-glow);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
              <span style="display: inline-block; width: 8px; height: 8px; background: var(--neon-cyan); border-radius: 50%; box-shadow: 0 0 8px var(--neon-cyan);"></span>
              <h3 style="color: #fff; font-family: var(--font-cyber); font-size: 1.15rem; letter-spacing: 1px;">How do I register for events and workshops?</h3>
            </div>
            <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.92rem; padding-left: 20px;">
              You can click on the <strong style="color: #fff;">REGISTER FOR WORKSHOP</strong> button or explore individual event tracks on the Home page to register online. On-spot registration will also be available at the registration desk.
            </p>
          </div>

          <div class="cyber-panel cyber-hud-bracket" style="padding: 26px; background: rgba(14, 8, 22, 0.85); border: 1px solid var(--border-glow);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
              <span style="display: inline-block; width: 8px; height: 8px; background: var(--neon-pink); border-radius: 50%; box-shadow: 0 0 8px var(--neon-pink);"></span>
              <h3 style="color: #fff; font-family: var(--font-cyber); font-size: 1.15rem; letter-spacing: 1px;">Will food and accommodation be provided?</h3>
            </div>
            <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.92rem; padding-left: 20px;">
              Yes! Refreshments and lunch will be provided for all registered participants. Outstation participants can request hostel accommodation during registration.
            </p>
          </div>

        </div>

      </div>
    </section>
  `;
}

