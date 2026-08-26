import { COORDINATORS_DATA } from '../config/coordinatorsData.js';

export function renderCoordinatorsSection() {
  const { chiefPatrons, patrons, leadership, techGurus, projectAssistants, students } = COORDINATORS_DATA;

  return `
    <section id="coordinators" class="cyber-section-ambient" style="padding: 130px 0 90px; min-height: 100vh; position: relative;">
      
      <!-- Background Cyber Objects & Ambience -->
      <div class="cyber-bg-grid-mesh"></div>
      <div class="cyber-bg-orb cyber-bg-orb-pink" style="width: 520px; height: 520px; top: 5%; left: -100px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-cyan" style="width: 480px; height: 480px; bottom: 8%; right: -90px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-purple" style="width: 400px; height: 400px; top: 40%; left: 50%; transform: translateX(-50%);"></div>
      <div class="cyber-floating-ring" style="width: 450px; height: 450px; top: 10%; right: 4%;"></div>
      <div class="cyber-floating-diamond" style="top: 45%; left: 4%;"></div>
      <div class="cyber-watermark" style="top: 10%; left: 50%; transform: translateX(-50%); opacity: 0.035;">TEAM KEN'Z</div>

      <div class="container" style="position: relative; z-index: 2; max-width: 1300px;">
        
        <!-- Section Header -->
        <div style="text-align: center; margin-bottom: 60px;" class="cyber-popup stagger-1">
          <div class="cyber-badge" style="margin-bottom: 14px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span>COMMAND & ORGANIZING COMMITTEE</span>
          </div>
          <h2 class="text-gradient-pink" style="font-family: var(--font-heading); font-size: clamp(2.4rem, 6vw, 4rem); font-weight: 900; letter-spacing: -1px; margin-bottom: 14px; text-transform: uppercase;">
            TEAM KEN'Z
          </h2>
          <p style="color: var(--text-secondary); max-width: 680px; margin: 0 auto; font-size: 1rem; line-height: 1.6;">
            Meet the visionary leadership, mentors, tech-gurus, project assistants, and student coordinators driving KEN'Z FEST 2026.
          </p>
        </div>

        <!-- ==========================================
             LEVEL 01 // CHIEF PATRON
        =========================================== -->
        <div style="margin-bottom: 50px;" class="cyber-popup stagger-1">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; border-bottom: 1px solid rgba(255, 42, 133, 0.2); padding-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="height: 20px; width: 4px; background: var(--neon-pink);"></div>
              <div>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-pink); font-weight: 700; letter-spacing: 2px;">LEVEL 01 // CHIEF PATRON</div>
                <h3 style="font-family: var(--font-cyber); font-size: 1.25rem; color: #fff; letter-spacing: 1px; font-weight: 800; margin-top: 2px;">
                  CHIEF PATRON
                </h3>
              </div>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); letter-spacing: 1px;">
              ROSTER COUNT // <span style="color: var(--neon-pink); font-weight: 700;">1 MEMBER</span>
            </div>
          </div>

          <div style="display: flex; justify-content: center;">
            ${chiefPatrons.map(cp => `
              <div class="cyber-panel cyber-hud-bracket" style="padding: 32px; background: linear-gradient(135deg, rgba(255, 42, 133, 0.1) 0%, rgba(14, 8, 22, 0.95) 100%); border: 1px solid var(--neon-pink); max-width: 520px; width: 100%; text-align: center; box-shadow: 0 0 35px rgba(255, 42, 133, 0.2);">
                <div style="font-size: 2.8rem; margin-bottom: 12px; filter: drop-shadow(0 0 15px rgba(255, 42, 133, 0.6));">${cp.avatar}</div>
                <span class="cyber-badge" style="font-size: 0.72rem; font-weight: 800; margin-bottom: 12px; display: inline-block;">${cp.role}</span>
                <h4 style="font-family: var(--font-heading); font-size: 1.5rem; color: #fff; font-weight: 900; margin-bottom: 6px; letter-spacing: 0.5px;">
                  ${cp.name}
                </h4>
                <div style="font-size: 0.85rem; color: var(--neon-pink); font-weight: 700; margin-bottom: 6px;">
                  ${cp.role}
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
                  ${cp.organization}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- ==========================================
             LEVEL 02 // PATRONS
        =========================================== -->
        <div style="margin-bottom: 50px;" class="cyber-popup stagger-2">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; border-bottom: 1px solid rgba(0, 240, 255, 0.2); padding-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="height: 20px; width: 4px; background: var(--neon-cyan);"></div>
              <div>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-cyan); font-weight: 700; letter-spacing: 2px;">LEVEL 02 // PATRONS</div>
                <h3 style="font-family: var(--font-cyber); font-size: 1.25rem; color: #fff; letter-spacing: 1px; font-weight: 800; margin-top: 2px;">
                  PATRONS
                </h3>
              </div>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); letter-spacing: 1px;">
              ROSTER COUNT // <span style="color: var(--neon-cyan); font-weight: 700;">4 MEMBERS</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
            ${patrons.map(p => `
              <div class="cyber-panel cyber-hud-bracket" style="padding: 24px; background: rgba(14, 8, 22, 0.88); border: 1px solid var(--border-glow); text-align: center;">
                <div style="font-size: 2.2rem; margin-bottom: 10px; filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.4));">${p.avatar}</div>
                <span class="cyber-badge-cyan" style="font-size: 0.68rem; font-weight: 800; margin-bottom: 10px; display: inline-block;">${p.role}</span>
                <h4 style="font-family: var(--font-heading); font-size: 1.18rem; color: #fff; font-weight: 800; margin-bottom: 4px;">
                  ${p.name}
                </h4>
                <div style="font-size: 0.82rem; color: var(--neon-cyan); font-weight: 700; margin-bottom: 6px;">
                  ${p.role}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
                  ${p.organization}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- ==========================================
             LEVEL 03 // ACADEMIC & R&D LEADERSHIP
        =========================================== -->
        <div style="margin-bottom: 50px;" class="cyber-popup stagger-2">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; border-bottom: 1px solid rgba(255, 42, 133, 0.2); padding-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="height: 20px; width: 4px; background: var(--neon-pink);"></div>
              <div>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-pink); font-weight: 700; letter-spacing: 2px;">LEVEL 03 // ACADEMIC & R&D LEADERSHIP</div>
                <h3 style="font-family: var(--font-cyber); font-size: 1.25rem; color: #fff; letter-spacing: 1px; font-weight: 800; margin-top: 2px;">
                  MENTOR & COORDINATORS
                </h3>
              </div>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); letter-spacing: 1px;">
              ROSTER COUNT // <span style="color: var(--neon-pink); font-weight: 700;">3 MEMBERS</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            ${leadership.map(l => `
              <div class="cyber-panel cyber-hud-bracket" style="padding: 26px; background: rgba(14, 8, 22, 0.9); border: 1px solid var(--border-glow); text-align: center;">
                <div style="font-size: 2.3rem; margin-bottom: 10px; filter: drop-shadow(0 0 10px rgba(255, 42, 133, 0.5));">${l.avatar}</div>
                <span class="cyber-badge" style="font-size: 0.68rem; font-weight: 800; margin-bottom: 10px; display: inline-block;">${l.role}</span>
                <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: #fff; font-weight: 800; margin-bottom: 4px;">
                  ${l.name}
                </h4>
                <div style="font-size: 0.85rem; color: var(--neon-pink); font-weight: 700; margin-bottom: 6px;">
                  ${l.role}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
                  ${l.organization}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- ==========================================
             LEVEL 04 // R&D TECHNICAL CREW
        =========================================== -->
        <div style="margin-bottom: 50px;" class="cyber-popup stagger-3">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; border-bottom: 1px solid rgba(0, 240, 255, 0.2); padding-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="height: 20px; width: 4px; background: var(--neon-cyan);"></div>
              <div>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-cyan); font-weight: 700; letter-spacing: 2px;">LEVEL 04 // R&D TECHNICAL CREW</div>
                <h3 style="font-family: var(--font-cyber); font-size: 1.25rem; color: #fff; letter-spacing: 1px; font-weight: 800; margin-top: 2px;">
                  TECH-GURUS
                </h3>
              </div>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); letter-spacing: 1px;">
              ROSTER COUNT // <span style="color: var(--neon-cyan); font-weight: 700;">4 MEMBERS</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            ${techGurus.map(tg => `
              <div class="cyber-panel cyber-hud-bracket" style="padding: 22px; background: rgba(14, 8, 22, 0.85); border: 1px solid var(--border-glow); display: flex; align-items: center; gap: 16px;">
                <div style="font-size: 2rem; filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.5));">${tg.avatar}</div>
                <div>
                  <span class="cyber-badge-cyan" style="font-size: 0.62rem; font-weight: 800; padding: 2px 6px;">TECH GURU</span>
                  <h4 style="font-family: var(--font-cyber); font-size: 1.1rem; color: #fff; font-weight: 800; margin: 4px 0 2px;">
                    ${tg.name}
                  </h4>
                  <div style="font-size: 0.75rem; color: var(--neon-cyan); font-weight: 600;">
                    ${tg.role}
                  </div>
                  <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">
                    ${tg.organization}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- ==========================================
             LEVEL 05 // PROJECT ASSISTANTS
        =========================================== -->
        <div style="margin-bottom: 50px;" class="cyber-popup stagger-3">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; border-bottom: 1px solid rgba(255, 42, 133, 0.2); padding-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="height: 20px; width: 4px; background: var(--neon-pink);"></div>
              <div>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-pink); font-weight: 700; letter-spacing: 2px;">LEVEL 05 // PROJECT ASSISTANTS</div>
                <h3 style="font-family: var(--font-cyber); font-size: 1.25rem; color: #fff; letter-spacing: 1px; font-weight: 800; margin-top: 2px;">
                  PROJECT ASSISTANTS
                </h3>
              </div>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); letter-spacing: 1px;">
              ROSTER COUNT // <span style="color: var(--neon-pink); font-weight: 700;">4 MEMBERS</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            ${projectAssistants.map(pa => `
              <div class="cyber-panel cyber-hud-bracket" style="padding: 22px; background: rgba(14, 8, 22, 0.85); border: 1px solid var(--border-glow); display: flex; align-items: center; gap: 16px;">
                <div style="font-size: 2rem; filter: drop-shadow(0 0 8px rgba(255, 42, 133, 0.5));">${pa.avatar}</div>
                <div>
                  <span class="cyber-badge" style="font-size: 0.62rem; font-weight: 800; padding: 2px 6px;">PROJECT ASSISTANT</span>
                  <h4 style="font-family: var(--font-cyber); font-size: 1.1rem; color: #fff; font-weight: 800; margin: 4px 0 2px;">
                    ${pa.name}
                  </h4>
                  <div style="font-size: 0.75rem; color: var(--neon-pink); font-weight: 600;">
                    ${pa.role}
                  </div>
                  <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">
                    ${pa.organization}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- ==========================================
             LEVEL 06 // STUDENT ORGANIZING COMMITTEE
        =========================================== -->
        <div class="cyber-popup stagger-4">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; border-bottom: 1px solid rgba(0, 240, 255, 0.2); padding-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="height: 20px; width: 4px; background: var(--neon-cyan);"></div>
              <div>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-cyan); font-weight: 700; letter-spacing: 2px;">LEVEL 06 // STUDENT ORGANIZING COMMITTEE</div>
                <h3 style="font-family: var(--font-cyber); font-size: 1.25rem; color: #fff; letter-spacing: 1px; font-weight: 800; margin-top: 2px;">
                  STUDENT COORDINATORS
                </h3>
              </div>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); letter-spacing: 1px;">
              ROSTER COUNT // <span style="color: var(--neon-cyan); font-weight: 700;">11 MEMBERS</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
            ${students.map(s => `
              <div class="cyber-panel cyber-hud-bracket" style="padding: 22px; background: rgba(14, 8, 22, 0.85); border: 1px solid var(--border-glow); text-align: left;">
                <div style="margin-bottom: 10px;">
                  <span class="cyber-badge" style="font-size: 0.62rem; font-weight: 800; padding: 3px 8px;">STUDENT COORDINATOR</span>
                </div>
                
                <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #fff; font-weight: 800; margin-bottom: 6px;">
                  ${s.name}
                </h4>
                <div style="font-size: 0.78rem; color: var(--neon-pink); font-weight: 600; margin-bottom: 4px;">
                  ${s.role}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
                  ${s.department}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}


