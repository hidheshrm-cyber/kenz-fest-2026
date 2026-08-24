import { COORDINATORS_DATA } from '../config/coordinatorsData.js';

export function renderCoordinatorsSection() {
  const { faculty, students } = COORDINATORS_DATA;

  return `
    <section id="coordinators" class="cyber-section-ambient" style="padding: 130px 0 80px; min-height: 100vh; position: relative;">
      
      <!-- Background Cyber Objects & Ambience -->
      <div class="cyber-bg-grid-mesh"></div>
      <div class="cyber-bg-orb cyber-bg-orb-pink" style="width: 520px; height: 520px; top: 8%; left: -100px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-cyan" style="width: 480px; height: 480px; bottom: 12%; right: -90px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-purple" style="width: 350px; height: 350px; top: 45%; left: 55%;"></div>
      <div class="cyber-floating-ring" style="width: 420px; height: 420px; top: 12%; right: 4%;"></div>
      <div class="cyber-floating-diamond" style="top: 55%; left: 5%;"></div>
      <div class="cyber-watermark" style="top: 15%; left: 50%; transform: translateX(-50%); opacity: 0.035;">LEADERSHIP</div>

      <div class="container" style="position: relative; z-index: 2;">
        
        <!-- Section Header -->
        <div style="text-align: center; margin-bottom: 50px;" class="cyber-popup stagger-1">
          <div class="cyber-badge" style="margin-bottom: 12px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span>LEADERSHIP & ORGANIZING TEAM</span>
          </div>
          <h2 class="text-gradient-pink" style="font-family: var(--font-heading); font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 900; letter-spacing: -1px; margin-bottom: 12px; text-transform: uppercase;">
            ABOUT US & TEAM
          </h2>
          <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto; font-size: 0.95rem; line-height: 1.6;">
            Meet the faculty advisors, research directors, and student coordinators driving KEN'Z FEST 2026.
          </p>
        </div>

        <!-- 1. Faculty Coordinators Grid -->
        <div style="margin-bottom: 48px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;" class="cyber-popup stagger-2">
            <div style="height: 2px; width: 24px; background: var(--neon-cyan);"></div>
            <h3 style="font-family: var(--font-cyber); font-size: 1.1rem; color: var(--neon-cyan); letter-spacing: 2px; font-weight: 800;">
              FACULTY & LEADERSHIP
            </h3>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            ${faculty.map(f => `
              <div class="cyber-panel cyber-hud-bracket cyber-popup stagger-2" style="padding: 24px; background: rgba(14, 8, 22, 0.85); border: 1px solid var(--border-glow); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px;">
                    <div style="font-size: 2.2rem; filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.4));">${f.avatar}</div>
                    <span class="cyber-badge-cyan" style="font-size: 0.68rem; font-weight: 800; text-align: right; max-width: 65%;">${f.role}</span>
                  </div>
                  <h4 style="font-family: var(--font-cyber); font-size: 1.25rem; color: #fff; font-weight: 800; margin-bottom: 6px;">
                    ${f.name}
                  </h4>
                  <div style="font-size: 0.82rem; color: var(--neon-cyan); font-weight: 600; margin-bottom: 6px;">
                    ${f.role}
                  </div>
                  <div style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">
                    ${f.department}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2. Student Leads Grid -->
        <div>
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;" class="cyber-popup stagger-3">
            <div style="height: 2px; width: 24px; background: var(--neon-pink);"></div>
            <h3 style="font-family: var(--font-cyber); font-size: 1.1rem; color: var(--neon-pink); letter-spacing: 2px; font-weight: 800;">
              STUDENT COORDINATORS
            </h3>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
            ${students.map(s => `
              <div class="cyber-panel cyber-hud-bracket cyber-popup stagger-3" style="padding: 22px; background: rgba(14, 8, 22, 0.85); border: 1px solid var(--border-glow); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
                    <span class="cyber-badge" style="font-size: 0.65rem; font-weight: 800; padding: 2px 8px;">${s.role}</span>
                    <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--neon-cyan); font-weight: 700;">${s.track}</span>
                  </div>
                  
                  <h4 style="font-family: var(--font-cyber); font-size: 1.15rem; color: #fff; font-weight: 800; margin-bottom: 4px;">
                    ${s.name}
                  </h4>
                  <div style="font-size: 0.8rem; color: var(--neon-pink); font-weight: 600; margin-bottom: 4px;">
                    ${s.role}
                  </div>
                  <div style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">
                    ${s.department}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}

