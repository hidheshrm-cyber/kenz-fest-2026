import { FEST_CONFIG } from '../config/festConfig.js';

export function renderFooter() {
  return `
    <footer id="contact" style="background: rgba(5, 3, 10, 0.95); border-top: 1px solid var(--border-subtle); padding: 80px 0 40px; position: relative;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; margin-bottom: 60px;">
          <div>
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
              <div style="width: 56px; height: 56px; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px var(--neon-pink-glow); flex-shrink: 0;">
                <img src="${FEST_CONFIG.mascot.emblemLogo}" alt="KEN'Z FEST Logo" style="width: 100%; height: 100%; object-fit: contain;">
              </div>
              <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 900; color: #fff; letter-spacing: 2px;">
                ${FEST_CONFIG.name}
              </div>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; max-width: 340px; margin-bottom: 16px;">
              ${FEST_CONFIG.tagline}. Join the premier national tech fest of Kongunadu College of Engineering and Technology.
            </p>
            <div style="width: 100%; max-width: 340px; border-radius: 10px; overflow: hidden; border: 1px solid var(--border-subtle);">
              <img src="${FEST_CONFIG.mascot.ogBanner}" alt="KEN'Z FEST Banner" style="width: 100%; height: auto; display: block; opacity: 0.85;">
            </div>
          </div>

          <div>
            <h4 style="font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--neon-pink); letter-spacing: 2px; margin-bottom: 16px;">
              EVENT VENUE & DATES
            </h4>
            <div style="color: var(--text-primary); font-size: 0.95rem; font-weight: 600; margin-bottom: 8px;">
              ${FEST_CONFIG.dates}
            </div>
            <div style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5;">
              ${FEST_CONFIG.venue}<br/>
              ${FEST_CONFIG.location}
            </div>
          </div>

          <div>
            <h4 style="font-family: var(--font-heading); font-size: 0.9rem; font-weight: 700; color: var(--neon-pink); letter-spacing: 2px; margin-bottom: 16px;">
              GET IN TOUCH
            </h4>
            <div style="margin-bottom: 12px;">
              <span style="color: var(--text-muted); font-size: 0.85rem; display: block;">Official Email:</span>
              <a href="mailto:${FEST_CONFIG.contactEmail}" class="text-neon-pink" style="font-weight: 600; font-size: 1rem;">
                ${FEST_CONFIG.contactEmail}
              </a>
            </div>
            <div style="color: var(--text-muted); font-size: 0.85rem;">
              Mascot Visual Identity: <span style="color: #fff; font-weight: 600;">${FEST_CONFIG.mascot.name}</span>
            </div>
          </div>
        </div>

        <div style="border-top: 1px solid rgba(255, 42, 133, 0.1); padding-top: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          &copy; 2026 ${FEST_CONFIG.name}. All rights reserved. ${FEST_CONFIG.venue}.
        </div>
      </div>
    </footer>
  `;
}
