import { FEST_CONFIG } from '../config/festConfig.js';

export function renderNavbar() {
  return `
    <header id="main-header">
      <nav id="main-nav" class="cyber-panel cyber-hud-bracket nav-bar-container">
        
        <!-- Brand Logo & Identity -->
        <a href="#hero" class="nav-brand" id="nav-brand-logo">
          <div class="brand-logo-frame">
            <img src="${FEST_CONFIG.mascot.officialLogo}" alt="KEN'Z FEST Logo" class="brand-logo-img">
          </div>
          <div class="brand-text-block" style="display: flex; flex-direction: column; gap: 2px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="brand-name-text">${FEST_CONFIG.shortName}</span>
              <span class="cyber-badge nav-online-pill">ONLINE</span>
            </div>
            <span class="brand-sub-text" style="color: var(--neon-cyan); font-size: 0.65rem; letter-spacing: 1px;">Powered by AICTE IDEA Lab</span>
            <span class="brand-sub-text">KNCET AUTONOMOUS</span>
          </div>
        </a>

        <!-- Desktop Navigation Links (Ordered Correctly) -->
        <div class="desktop-nav-links">
          <a href="#hero" class="nav-link active">HOME</a>
          <a href="#events" class="nav-link">EXPLORE EVENTS</a>
          <a href="#coordinators" class="nav-link">COORDINATORS</a>
          <a href="#about" class="nav-link">INSTITUTION</a>
          <a href="#campus-guide" class="nav-link">LOCATION</a>
          <a href="#mascot-3d" class="nav-link text-gradient-cyan">3D MASCOT</a>
        </div>

        <!-- HUD Action Controls -->
        <div class="nav-actions-block">
          
          <!-- Register Action CTA (High Visibility, Never Clipped) -->
          <a href="${FEST_CONFIG.workshopGoogleForm}" target="_blank" rel="noopener noreferrer" id="nav-register-btn" class="btn-cyber-primary nav-reg-btn" style="text-decoration: none;">
            REGISTER
          </a>
          
          <!-- Mobile Hamburger Menu Button -->
          <button id="mobile-menu-btn" class="nav-mobile-btn" aria-label="Open Navigation Menu">
            <svg id="hamburger-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            <svg id="close-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

      </nav>

      <!-- Mobile Dropdown Drawer with High-Visibility Touch Links (Ordered Correctly) -->
      <div id="mobile-menu" class="mobile-nav-drawer cyber-panel" style="display: none;">
        <div class="mobile-drawer-inner">
          <a href="#hero" class="mobile-nav-link">
            <span class="mobile-nav-idx">01</span>
            <span class="mobile-nav-text">HOME PORTAL</span>
          </a>
          <a href="#events" class="mobile-nav-link">
            <span class="mobile-nav-idx">02</span>
            <span class="mobile-nav-text">EXPLORE EVENTS</span>
          </a>
          <a href="#coordinators" class="mobile-nav-link">
            <span class="mobile-nav-idx">03</span>
            <span class="mobile-nav-text">COORDINATORS</span>
          </a>
          <a href="#about" class="mobile-nav-link">
            <span class="mobile-nav-idx">04</span>
            <span class="mobile-nav-text">INSTITUTION</span>
          </a>
          <a href="#campus-guide" class="mobile-nav-link">
            <span class="mobile-nav-idx">05</span>
            <span class="mobile-nav-text">LOCATION MAP</span>
          </a>
          <a href="#mascot-3d" class="mobile-nav-link text-gradient-cyan">
            <span class="mobile-nav-idx">06</span>
            <span class="mobile-nav-text">3D MASCOT</span>
          </a>
          
          <div class="mobile-action-wrapper" style="margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(255,42,133,0.2);">
            <a href="${FEST_CONFIG.workshopGoogleForm}" target="_blank" rel="noopener noreferrer" class="btn-cyber-primary mobile-menu-register-btn" style="width: 100%; justify-content: center; padding: 16px; font-size: 1.1rem; text-decoration: none; display: flex; align-items: center;">
              REGISTER
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}
