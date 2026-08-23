import { FEST_CONFIG } from '../config/festConfig.js';

export function renderMascotVisual() {
  return `
    <div class="mascot-container" data-parallax data-parallax-speed="25" style="position: relative; width: 100%; max-width: 480px; margin: 0 auto; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center;">
      <!-- Cyber Hologram Halo Rings -->
      <div style="position: absolute; width: 110%; height: 110%; border: 1px dashed rgba(255, 42, 133, 0.35); border-radius: 50%; animation: pulseGlow 4s infinite ease-in-out;"></div>
      <div style="position: absolute; width: 90%; height: 90%; border: 1px solid rgba(157, 78, 221, 0.25); border-radius: 50%;"></div>

      <!-- Mascot Badge Box -->
      <div class="glass-panel" style="position: relative; width: 85%; height: 85%; border-radius: 24px; padding: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: radial-gradient(circle at center, rgba(255, 42, 133, 0.15) 0%, rgba(10, 6, 18, 0.8) 70%); border: 1px solid var(--neon-pink); box-shadow: 0 0 35px var(--neon-pink-glow);">
        
        <!-- Pink Panther Cyber Emblem (SVG Vector Artwork) -->
        <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 15px #ff2a85); animation: floatSlow 5s ease-in-out infinite;">
          <!-- Sleek Pink Panther Cyber Head Silhouette -->
          <path d="M100 25 C60 25 35 60 35 105 C35 145 60 175 100 175 C140 175 165 145 165 105 C165 60 140 25 100 25 Z" fill="url(#pinkGrad)" stroke="#ff007f" stroke-width="3"/>
          <!-- Panther Ears -->
          <path d="M45 45 L20 15 L55 30 Z" fill="#ff2a85" stroke="#ff007f" stroke-width="2"/>
          <path d="M155 45 L180 15 L145 30 Z" fill="#ff2a85" stroke="#ff007f" stroke-width="2"/>
          <!-- Futuristic Visor Eyes -->
          <path d="M60 85 Q100 70 140 85 Q100 100 60 85 Z" fill="#00f0ff" opacity="0.9" style="filter: drop-shadow(0 0 8px #00f0ff);"/>
          <!-- Muzzle & Details -->
          <path d="M85 130 C85 120 115 120 115 130 C115 145 85 145 85 130 Z" fill="#ffaed5"/>
          <polygon points="95,120 105,120 100,126" fill="#ff007f"/>
          
          <defs>
            <linearGradient id="pinkGrad" x1="35" y1="25" x2="165" y2="175" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ff77bc"/>
              <stop offset="0.5" stop-color="#ff2a85"/>
              <stop offset="1" stop-color="#7b003a"/>
            </linearGradient>
          </defs>
        </svg>

        <div style="margin-top: 16px; font-family: var(--font-heading); font-size: 0.9rem; font-weight: 800; letter-spacing: 3px; color: var(--neon-pink); text-shadow: 0 0 10px var(--neon-pink);">
          OFFICIAL MASCOT
        </div>
        <div style="font-size: 1.1rem; font-weight: 700; color: #fff; letter-spacing: 1px;">
          ${FEST_CONFIG.mascot.name.toUpperCase()}
        </div>
      </div>
    </div>
  `;
}
