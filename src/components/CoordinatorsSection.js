import { COORDINATORS_DATA } from '../config/coordinatorsData.js';

export function renderCoordinatorsSection() {
  const { faculty, students } = COORDINATORS_DATA;

  return `
    <section id="coordinators" style="padding: 100px 0 80px; position: relative; overflow: hidden; background: radial-gradient(circle at 50% 10%, rgba(255, 42, 133, 0.05) 0%, transparent 60%);">
      
      <div class="container" style="position: relative; z-index: 2;">
        
        <!-- Section Header -->
        <div style="text-align: center; margin-bottom: 50px;" class="cyber-popup stagger-1">
          <div class="cyber-badge" style="margin-bottom: 12px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span>COMMAND & HELPLINE TEAM</span>
          </div>
          <h2 class="text-gradient-pink" style="font-family: var(--font-heading); font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 900; letter-spacing: -1px; margin-bottom: 12px; text-transform: uppercase;">
            EVENT COORDINATORS
          </h2>
          <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto; font-size: 0.95rem; line-height: 1.6;">
            Have queries regarding registrations, event rules, workshop accommodation, or competition schedules? Connect with our faculty & student coordinators directly via Call or WhatsApp.
          </p>
        </div>

        <!-- 1. Faculty Coordinators Grid -->
        <div style="margin-bottom: 48px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;" class="cyber-popup stagger-2">
            <div style="height: 2px; width: 24px; background: var(--neon-cyan);"></div>
            <h3 style="font-family: var(--font-cyber); font-size: 1.1rem; color: var(--neon-cyan); letter-spacing: 2px; font-weight: 800;">
              STAFF CO-ORDINATORS
            </h3>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            ${faculty.map(f => `
              <div class="cyber-panel cyber-hud-bracket cyber-popup stagger-2" style="padding: 24px; background: rgba(14, 8, 22, 0.85); border: 1px solid var(--border-glow); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px;">
                    <div style="font-size: 2.2rem; filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.4));">${f.avatar}</div>
                    <span class="cyber-badge-cyan" style="font-size: 0.68rem; font-weight: 800;">${f.role}</span>
                  </div>
                  <h4 style="font-family: var(--font-cyber); font-size: 1.2rem; color: #fff; font-weight: 800; margin-bottom: 4px;">
                    ${f.name}
                  </h4>
                  <div style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono); margin-bottom: 18px;">
                    ${f.department}
                  </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 16px;">
                  <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <a href="tel:${f.phone.replace(/\\s+/g, '')}" class="btn-cyber-cyan" title="Call ${f.name}" style="flex: 1; justify-content: center; padding: 10px 14px; font-size: 0.82rem; font-weight: 800; letter-spacing: 1px;">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      <span>CALL</span>
                    </a>
                    
                    <a href="https://wa.me/${f.whatsapp}?text=Hi%20${encodeURIComponent(f.name)},%20I%20have%20a%20query%20regarding%20KEN'Z%20FEST%202026" target="_blank" rel="noopener noreferrer" class="btn-cyber-outline" title="WhatsApp ${f.name}" style="flex: 1; justify-content: center; padding: 10px 14px; font-size: 0.82rem; font-weight: 800; letter-spacing: 1px; border-color: rgba(37, 211, 102, 0.5); color: #25D366;">
                      <span>WHATSAPP</span>
                    </a>
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
              STUDENT CO-ORDINATORS
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
                  <div style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono); margin-bottom: 16px;">
                    ${s.department}
                  </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 14px;">
                  <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <a href="tel:${s.phone.replace(/\\s+/g, '')}" class="btn-cyber-cyan" title="Call ${s.name}" style="flex: 1; justify-content: center; padding: 9px 12px; font-size: 0.78rem; font-weight: 800; letter-spacing: 1px;">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      <span>CALL</span>
                    </a>
                    
                    <a href="https://wa.me/${s.whatsapp}?text=Hi%20${encodeURIComponent(s.name)},%20I%20have%20a%20query%20regarding%20KEN'Z%20FEST%202026" target="_blank" rel="noopener noreferrer" class="btn-cyber-outline" title="WhatsApp ${s.name}" style="flex: 1; justify-content: center; padding: 9px 12px; font-size: 0.78rem; font-weight: 800; letter-spacing: 1px; border-color: rgba(37, 211, 102, 0.5); color: #25D366;">
                      <span>WHATSAPP</span>
                    </a>
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
