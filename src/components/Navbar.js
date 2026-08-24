import { FEST_CONFIG } from '../config/festConfig.js';

export function renderNavbar() {
  return `
    <header id="main-header">
      <nav id="main-nav" class="cyber-panel cyber-hud-bracket nav-bar-container">
        
        <!-- Brand Logo & Identity -->
        <a href="#/" class="nav-brand" id="nav-brand-logo">
          <div class="brand-logo-frame">
            <img src="${FEST_CONFIG.mascot.officialLogo}" alt="KEN'Z FEST Logo" class="brand-logo-img">
          </div>
          <div class="brand-text-block" style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.2;">
            <span class="brand-name-text">${FEST_CONFIG.shortName}</span>
            <span class="brand-sub-text">KNCET</span>
            <span class="brand-sub-text" style="color: var(--neon-cyan); font-size: 0.65rem; letter-spacing: 1px; white-space: normal;">POWERED BY AICTE IDEA LAB</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="desktop-nav-links">
          <a href="#/" class="nav-link active">HOME</a>
          <a href="#/sponsors" class="nav-link">SPONSORS</a>
          <a href="#/about" class="nav-link">ABOUT US</a>
          <a href="#/institution" class="nav-link">INSTITUTION</a>
          <a href="#/location" class="nav-link">LOCATION</a>
          <a href="#/faq" class="nav-link">FAQ</a>
        </div>

        <!-- Right Actions & Mobile Menu -->
        <div class="nav-actions-block">
          <button id="mobile-menu-btn" class="nav-mobile-btn cyber-panel">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

      </nav>

      <!-- Mobile Dropdown Drawer -->
      <div id="mobile-menu" class="mobile-nav-drawer cyber-panel" style="display: none;">
        <div class="mobile-drawer-inner">
          <a href="#/" class="mobile-nav-link">
            <span class="mobile-nav-idx">01</span>
            <span class="mobile-nav-text">HOME PORTAL</span>
          </a>
          <a href="#/sponsors" class="mobile-nav-link">
            <span class="mobile-nav-idx">02</span>
            <span class="mobile-nav-text">SPONSORS</span>
          </a>
          <a href="#/about" class="mobile-nav-link">
            <span class="mobile-nav-idx">03</span>
            <span class="mobile-nav-text">ABOUT US</span>
          </a>
          <a href="#/institution" class="mobile-nav-link">
            <span class="mobile-nav-idx">04</span>
            <span class="mobile-nav-text">INSTITUTION</span>
          </a>
          <a href="#/location" class="mobile-nav-link">
            <span class="mobile-nav-idx">05</span>
            <span class="mobile-nav-text">LOCATION MAP</span>
          </a>
          <a href="#/faq" class="mobile-nav-link text-gradient-cyan">
            <span class="mobile-nav-idx">06</span>
            <span class="mobile-nav-text">FAQ</span>
          </a>
        </div>
      </div>
    </header>
  `;
}
