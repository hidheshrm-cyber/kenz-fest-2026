import { FEST_CONFIG } from '../config/festConfig.js';

export function renderAboutSection() {
  return `
    <section id="about" class="reveal-on-scroll" style="padding: 100px 0; position: relative;">
      <div class="container">
        
        <div class="glass-panel" style="padding: 60px 40px; position: relative; overflow: hidden; background: linear-gradient(135deg, rgba(18, 9, 26, 0.8) 0%, rgba(9, 5, 14, 0.95) 100%); border: 1px solid var(--border-glow);">
          
          <!-- Background Glow Pill -->
          <div style="position: absolute; -100px; right: -100px; width: 300px; height: 300px; background: var(--neon-pink-glow); filter: blur(90px); border-radius: 50%; pointer-events: none;"></div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items: center;">
            
            <div>
              <div style="display: inline-flex; align-items: center; gap: 8px; padding: 4px 14px; border-radius: 20px; background: var(--neon-pink-subtle); border: 1px solid var(--border-subtle); color: var(--neon-pink); font-family: var(--font-heading); font-size: 0.75rem; font-weight: 700; letter-spacing: 2px; margin-bottom: 20px;">
                <span>ABOUT THE FESTIVAL</span>
              </div>

              <h2 class="gradient-text-pink" style="font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; letter-spacing: 1px; margin-bottom: 20px;">
                ${FEST_CONFIG.name}
              </h2>

              <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px;">
                <strong>${FEST_CONFIG.name}</strong> is the flagship national college technology festival hosted by <strong>${FEST_CONFIG.venue}</strong>. Bringing together brilliant minds, innovators, developers, and technological visionaries from across the nation.
              </p>

              <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 30px;">
                Scheduled for <strong>${FEST_CONFIG.dates}</strong>, the festival features hands-on hackathons, research paper presentations, industry keynotes, and high-stakes competitive tech arenas.
              </p>

              <div style="display: flex; gap: 24px; flex-wrap: wrap;">
                <div>
                  <span style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 900; color: var(--neon-pink); display: block;">28 & 29</span>
                  <span style="font-size: 0.8rem; color: var(--text-muted); letter-spacing: 1px;">AUGUST 2026</span>
                </div>
                <div style="width: 1px; background: var(--border-subtle);"></div>
                <div>
                  <span style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 900; color: #fff; display: block;">7+</span>
                  <span style="font-size: 0.8rem; color: var(--text-muted); letter-spacing: 1px;">MAIN EVENTS</span>
                </div>
                <div style="width: 1px; background: var(--border-subtle);"></div>
                <div>
                  <span style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 900; color: var(--pink-accent); display: block;">100%</span>
                  <span style="font-size: 0.8rem; color: var(--text-muted); letter-spacing: 1px;">TECHNICAL EXCELLENCE</span>
                </div>
              </div>
            </div>

            <!-- Venue Info Box with Mascot Action Banner -->
            <div class="glass-panel" style="padding: 24px; background: rgba(9, 5, 14, 0.7); border: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 20px;">
              <div style="width: 100%; height: 200px; border-radius: 12px; overflow: hidden; position: relative; border: 1px solid var(--border-subtle);">
                <img src="${FEST_CONFIG.mascot.actionImage}" alt="Cyber Panther Matrix Lab" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9) contrast(1.1);">
                <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(5, 3, 8, 0.85); padding: 4px 12px; border-radius: 20px; border: 1px solid var(--neon-pink); font-family: var(--font-mono); font-size: 0.7rem; color: var(--neon-pink);">
                  [AI MATRIX LAB OPERATIONAL]
                </div>
              </div>

              <h3 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: #fff; letter-spacing: 1px;">
                HOST INSTITUTION
              </h3>
              
              <div style="display: flex; gap: 14px;">
                <div style="color: var(--neon-pink); flex-shrink: 0; margin-top: 4px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div style="font-weight: 700; color: #fff; font-size: 0.95rem;">${FEST_CONFIG.venue}</div>
                  <div style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 4px;">${FEST_CONFIG.location}</div>
                </div>
              </div>

              <div style="display: flex; gap: 14px;">
                <div style="color: var(--neon-pink); flex-shrink: 0; margin-top: 4px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div style="font-weight: 700; color: #fff; font-size: 0.95rem;">Official Inquiries</div>
                  <a href="mailto:${FEST_CONFIG.contactEmail}" class="text-neon-pink" style="font-size: 0.9rem; text-decoration: none; font-weight: 600;">
                    ${FEST_CONFIG.contactEmail}
                  </a>
                </div>
              </div>

              <a href="mailto:${FEST_CONFIG.contactEmail}" class="btn-neon" style="width: 100%; text-align: center; justify-content: center; margin-top: 8px;">
                CONTACT ORGANIZERS
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
