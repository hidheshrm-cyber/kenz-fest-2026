import { FEST_CONFIG } from '../config/festConfig.js';

export function renderHeroHUD() {
  return `
    <!-- 1. Full-Screen Edge-to-Edge 3D Video Intro Gate (First Screen on Entry) -->
    <section id="video-intro-gate" style="position: relative; width: 100vw; height: 100vh; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; align-items: center; padding: 90px 20px 40px; box-sizing: border-box;">
      
      <!-- Fullscreen 3D Video Layer (Edge to Edge 100% Viewport) -->
      <div style="position: absolute; inset: 0; z-index: 1; overflow: hidden;">
        <video id="front-intro-video" autoplay muted loop playsinline preload="auto" disablepictureinpicture disableremoteplayback style="width: 100%; height: 100%; object-fit: cover; display: block; will-change: transform;">
          <source src="${FEST_CONFIG.mascot.videoBg}" type="video/mp4">
        </video>
        <!-- Subtle Top & Bottom Gradient Shadows for Seamless Blending -->
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(7, 5, 13, 0.4) 0%, rgba(7, 5, 13, 0) 25%, rgba(7, 5, 13, 0) 65%, rgba(7, 5, 13, 0.95) 100%); pointer-events: none;"></div>
      </div>

      <!-- Empty Top Space for 100% Clean Video View -->
      <div></div>

      <!-- Bottom Floating Enter & Scroll Prompt -->
      <div style="text-align: center; z-index: 5; position: relative; display: flex; flex-direction: column; align-items: center; gap: 14px; margin-bottom: 10px;">
        <a href="#hero" id="btn-enter-festival" class="btn-cyber-primary" style="padding: 14px 40px; font-size: 0.92rem; box-shadow: 0 0 35px var(--neon-pink-glow);">
          <span>ENTER KEN'Z FEST</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>

        <a href="#hero" class="scroll-indicator-pulse" style="color: var(--neon-cyan); font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 2px; text-shadow: 0 0 12px var(--neon-cyan-glow);">
          <span>SCROLL DOWN TO EXPLORE</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
        </a>
      </div>

    </section>

    <!-- 2. Main Festival Dashboard & Hero Details (Reveals After Scrolling) -->
    <section id="hero" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; padding: 110px 0 60px; overflow: hidden;">
      
      <!-- Backdrop with Soft Cyber Mask for Text Legibility -->
      <div style="position: absolute; inset: 0; z-index: -1; overflow: hidden;">
        <img src="${FEST_CONFIG.mascot.heroImage}" alt="Cyberpunk Backdrop" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.3; filter: contrast(1.15) brightness(0.85);">
        <!-- Dark Cyberpunk Radial & Linear Gradients -->
        <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(7, 5, 13, 0.4) 0%, rgba(7, 5, 13, 0.96) 80%);"></div>
      </div>

      <div class="container" style="position: relative; z-index: 2;">
        
        <!-- Main Top Row: Left Info Content + Right Presenting Mascot Side-by-Side -->
        <div class="hero-main-row cyber-popup stagger-1">
          
          <!-- Left Text Info Column -->
          <div class="hero-info-block">
            
            <!-- Institutional HUD Header Badge -->
            <div class="hero-badge-group">
              <div class="cyber-badge-cyan" style="font-size: 0.7rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 12 8"></polygon></svg>
                <span>${FEST_CONFIG.institution.name}</span>
              </div>

              <div class="cyber-badge" style="font-size: 0.7rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>AUTONOMOUS INSTITUTION</span>
              </div>
            </div>

            <!-- Grand Title -->
            <h1 class="text-gradient-pink cyber-popup stagger-2 hero-title">
              ${FEST_CONFIG.name}
            </h1>

            <!-- Cyber Tagline -->
            <p class="cyber-popup stagger-3 hero-tagline">
              // THE ULTIMATE TECHNOLOGICAL FRONTIER //
            </p>

            <!-- Description -->
            <p class="cyber-popup stagger-3 hero-desc">
              Join innovators, coders, and visionaries for a premier national tech fest featuring high-impact competition tracks and <strong style="color: #fff;">₹80,000+</strong> in cash prize pools.
            </p>

          </div>

          <!-- Right Mascot Side Column (Directly right of title) -->
          <div class="hero-mascot-side cyber-popup stagger-2">
            
            <!-- Volumetric Neon Aura Glow -->
            <div class="hero-mascot-aura"></div>
            
            <!-- Presenting Pink Panther Mascot Image -->
            <div class="hero-mascot-frame">
              <img src="${FEST_CONFIG.mascot.presentingImage}" alt="KEN'Z FEST Mascot" class="hero-mascot-img">
            </div>

            <!-- Floor Pedestal Shadow -->
            <div class="hero-mascot-shadow"></div>

          </div>

        </div>

        <!-- Action Launch Buttons Row -->
        <div class="hero-action-buttons cyber-popup stagger-4">
          <a href="${FEST_CONFIG.workshopGoogleForm}" target="_blank" rel="noopener noreferrer" id="hero-register-btn" class="btn-cyber-primary hero-btn-main" style="text-decoration: none;">
            <span>REGISTER FOR WORKSHOP</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>

          <a href="#mascot-3d" class="btn-cyber-cyan hero-btn-sub">
            <span>INSPECT 3D MASCOT</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          </a>

          <a href="#events" class="btn-cyber-outline hero-btn-sub">
            <span>VIEW EVENT TRACKS</span>
          </a>
        </div>

      </div>
    </section>
  `;
}
