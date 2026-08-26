import { FEST_CONFIG } from '../config/festConfig.js';

export function renderAboutInstitution() {
  const inst = FEST_CONFIG.institution;

  return `
    <section id="about" class="cyber-section-ambient" style="position: relative; z-index: 2; padding: 130px 0 90px; min-height: 100vh; overflow: hidden;">
      
      <!-- Background Cyber Objects & Ambience -->
      <div class="cyber-bg-grid-mesh"></div>
      <div class="cyber-bg-orb cyber-bg-orb-cyan" style="width: 550px; height: 550px; top: 8%; right: -120px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-pink" style="width: 500px; height: 500px; bottom: 8%; left: -100px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-purple" style="width: 420px; height: 420px; top: 45%; left: 50%; transform: translateX(-50%);"></div>
      <div class="cyber-floating-ring" style="width: 420px; height: 420px; top: 12%; left: 4%;"></div>
      <div class="cyber-floating-diamond" style="bottom: 18%; right: 5%;"></div>
      <div class="cyber-watermark" style="top: 15%; left: 50%; transform: translateX(-50%); opacity: 0.035;">KNCET // KEN'Z</div>

      <div class="container" style="position: relative; z-index: 2; max-width: 1300px;">
        
        <!-- Section Header -->
        <div style="text-align: center; margin-bottom: 50px;" class="cyber-popup stagger-1">
          <div class="cyber-badge" style="margin-bottom: 14px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            <span>DISCOVER THE LEGACY // 2026 EDITION</span>
          </div>
          <h2 class="text-gradient-pink" style="font-family: var(--font-heading); font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 900; letter-spacing: 2px; margin-bottom: 12px; line-height: 1.15;">
            INSTITUTION & KEN'Z 2K26
          </h2>
          <p style="color: var(--text-secondary); font-size: 1.05rem; max-width: 750px; margin: 0 auto; line-height: 1.6;">
            Discover the excellence of Kongunadu College of Engineering and Technology (Autonomous) and the vision driving KEN'Z 2K26 — The Ultimate Technological Frontier.
          </p>
        </div>

        <!-- ==========================================
             BLOCK 1: HOST INSTITUTION (KNCET)
        =========================================== -->
        <div class="cyber-panel cyber-hud-bracket cyber-popup-scale" style="padding: 44px; background: linear-gradient(135deg, rgba(18, 9, 28, 0.9) 0%, rgba(9, 5, 14, 0.98) 100%); border-color: var(--border-glow); margin-bottom: 40px;">
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: center;">
            
            <!-- Left Info Column -->
            <div class="cyber-popup stagger-1">
              
              <!-- College Logo & Title Badge -->
              <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 22px; flex-wrap: wrap;">
                <div style="padding: 10px 18px; border-radius: 12px; background: rgba(255, 255, 255, 0.98); box-shadow: 0 0 25px rgba(0, 240, 255, 0.35); border: 1px solid var(--border-cyan-glow); display: inline-flex; align-items: center; justify-content: center;">
                  <img src="${inst.logo}" alt="${inst.name} Official Logo" style="height: 52px; width: auto; object-fit: contain; display: block;" />
                </div>
                <div>
                  <h3 class="text-gradient-cyan" style="font-family: var(--font-heading); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 900; letter-spacing: 1px; margin: 0; line-height: 1.1;">
                    ${inst.shortName}
                  </h3>
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-pink); font-weight: 700; letter-spacing: 2px; display: block; margin-top: 4px;">AUTONOMOUS INSTITUTION</span>
                </div>
              </div>

              <h4 style="font-family: var(--font-cyber); font-size: 1.25rem; color: #fff; margin-bottom: 12px; font-weight: 800; line-height: 1.3;">
                ${inst.name}
              </h4>

              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px;">
                <span class="cyber-badge-cyan" style="font-size: 0.68rem; font-weight: 800;">NAAC 'A' GRADE ACCREDITED</span>
                <span class="cyber-badge" style="font-size: 0.68rem; font-weight: 800;">NBA TIER-1 ACCREDITED</span>
                <span class="cyber-badge-cyan" style="font-size: 0.68rem; font-weight: 800;">AICTE APPROVED</span>
                <span class="cyber-badge" style="font-size: 0.68rem; font-weight: 800;">ANNA UNIVERSITY AFFILIATED</span>
              </div>

              <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7; margin-bottom: 20px;">
                Kongunadu College of Engineering and Technology (Autonomous), established under the visionary leadership of Kongunadu Educational Charitable Trust, is a center of academic brilliance located on a serene 60+ acre green eco-friendly campus in Thottiam, Tiruchirappalli.
              </p>

              <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7; margin-bottom: 24px;">
                Equipped with the prestigious <strong style="color: var(--neon-cyan);">AICTE IDEA Lab</strong>, high-performance computing centers with 1,200+ workstations, smart lecture halls, advanced robotics research facilities, and an active industry-institution partnership cell, KNCET equips students with future-ready engineering competencies and ethical leadership.
              </p>

              <!-- Stats Metrics Row -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
                <div style="padding: 14px 18px; border-radius: 8px; background: rgba(0, 240, 255, 0.05); border: 1px solid rgba(0, 240, 255, 0.2);">
                  <div style="font-family: var(--font-cyber); font-size: 1.4rem; font-weight: 900; color: var(--neon-cyan); margin-bottom: 2px;">
                    60+ ACRES
                  </div>
                  <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); letter-spacing: 1px;">
                    GREEN ECO CAMPUS
                  </div>
                </div>
                <div style="padding: 14px 18px; border-radius: 8px; background: rgba(255, 42, 133, 0.05); border: 1px solid rgba(255, 42, 133, 0.2);">
                  <div style="font-family: var(--font-cyber); font-size: 1.4rem; font-weight: 900; color: var(--neon-pink); margin-bottom: 2px;">
                    1,200+ COMPUTERS
                  </div>
                  <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); letter-spacing: 1px;">
                    1 GBPS OPTICAL BACKBONE
                  </div>
                </div>
              </div>

            </div>

            <!-- Right Campus Image Card -->
            <div class="cyber-panel cyber-popup stagger-2" style="padding: 16px; background: rgba(7, 5, 13, 0.85); border-color: var(--border-subtle); display: flex; flex-direction: column; gap: 18px;">
              
              <!-- Campus Facade Image with HUD overlay -->
              <div style="width: 100%; height: 260px; border-radius: 10px; overflow: hidden; position: relative; border: 1px solid var(--border-glow); box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);">
                <img src="/assets/kncet_campus_overview.jpg" alt="Kongunadu College of Engineering and Technology Campus Overview" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.98) contrast(1.1);" />
                
                <div style="position: absolute; top: 12px; right: 12px; background: rgba(4, 2, 8, 0.88); padding: 5px 14px; border-radius: 20px; border: 1px solid var(--neon-cyan); font-family: var(--font-mono); font-size: 0.7rem; color: var(--neon-cyan); font-weight: 700;">
                  [CAMPUS OVERVIEW // AUTONOMOUS]
                </div>
                
                <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(4, 2, 8, 0.88); padding: 6px 14px; border-radius: 8px; border: 1px solid rgba(255, 42, 133, 0.6); font-family: var(--font-mono); font-size: 0.72rem; color: #fff;">
                  📍 THOTTIAM, TIRUCHIRAPPALLI
                </div>
              </div>

              <!-- Campus Highlights List -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-family: var(--font-mono); font-size: 0.75rem;">
                <div style="padding: 10px; background: rgba(255, 255, 255, 0.03); border-radius: 6px; border: 1px solid var(--border-subtle); color: #fff;">
                  ⚡ <strong style="color: var(--neon-cyan);">AICTE IDEA Lab</strong><br/>
                  <span style="color: var(--text-muted);">Advanced 3D & PCB Fab</span>
                </div>
                <div style="padding: 10px; background: rgba(255, 255, 255, 0.03); border-radius: 6px; border: 1px solid var(--border-subtle); color: #fff;">
                  🌐 <strong style="color: var(--neon-pink);">Wi-Fi 6 Campus</strong><br/>
                  <span style="color: var(--text-muted);">High-Speed Mesh Network</span>
                </div>
                <div style="padding: 10px; background: rgba(255, 255, 255, 0.03); border-radius: 6px; border: 1px solid var(--border-subtle); color: #fff;">
                  🏛️ <strong style="color: var(--neon-cyan);">Digital Auditoriums</strong><br/>
                  <span style="color: var(--text-muted);">1,500+ Seating Capacity</span>
                </div>
                <div style="padding: 10px; background: rgba(255, 255, 255, 0.03); border-radius: 6px; border: 1px solid var(--border-subtle); color: #fff;">
                  💼 <strong style="color: var(--neon-pink);">90%+ Placements</strong><br/>
                  <span style="color: var(--text-muted);">Fortune 500 Recruiters</span>
                </div>
              </div>

              <!-- College Website Link -->
              <a href="${inst.website}" target="_blank" rel="noopener" class="btn-cyber-primary" style="width: 100%; justify-content: center; text-align: center; padding: 12px 20px;">
                EXPLORE OFFICIAL COLLEGE WEBSITE
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>

            </div>

          </div>

        </div>

        <!-- ==========================================
             BLOCK 2: ALL ABOUT KEN'Z 2K26
        =========================================== -->
        <div class="cyber-panel cyber-hud-bracket cyber-popup-scale" style="padding: 44px; background: linear-gradient(135deg, rgba(14, 8, 24, 0.95) 0%, rgba(6, 3, 10, 0.98) 100%); border-color: rgba(255, 42, 133, 0.35); margin-bottom: 40px;">
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px; flex-wrap: wrap; gap: 16px; border-bottom: 1px solid rgba(255, 42, 133, 0.2); padding-bottom: 20px;">
            <div>
              <div class="cyber-badge" style="margin-bottom: 8px;">
                <span>NATIONAL TECHNICAL FESTIVAL // 2026</span>
              </div>
              <h3 class="text-gradient-pink" style="font-family: var(--font-heading); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 900; letter-spacing: 1.5px; margin: 0;">
                ABOUT KEN'Z 2K26
              </h3>
            </div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <span class="cyber-badge-cyan" style="font-size: 0.75rem; font-weight: 800; padding: 6px 14px;">₹80,000+ CASH REWARDS</span>
              <span class="cyber-badge" style="font-size: 0.75rem; font-weight: 800; padding: 6px 14px;">50+ COLLEGES</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 28px; margin-bottom: 36px;">
            
            <div style="padding: 24px; background: rgba(255, 42, 133, 0.04); border: 1px solid rgba(255, 42, 133, 0.2); border-radius: 12px;">
              <div style="font-size: 2rem; margin-bottom: 12px;">⚡</div>
              <h4 style="font-family: var(--font-cyber); font-size: 1.15rem; color: #fff; font-weight: 800; margin-bottom: 8px;">
                The Ultimate Tech Arena
              </h4>
              <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin: 0;">
                KEN'Z 2K26 is the flagship national-level technological symposium engineered to challenge undergraduate and postgraduate innovators across Artificial Intelligence, Cybersecurity, Robotics, and Software Systems.
              </p>
            </div>

            <div style="padding: 24px; background: rgba(0, 240, 255, 0.04); border: 1px solid rgba(0, 240, 255, 0.2); border-radius: 12px;">
              <div style="font-size: 2rem; margin-bottom: 12px;">🔬</div>
              <h4 style="font-family: var(--font-cyber); font-size: 1.15rem; color: #fff; font-weight: 800; margin-bottom: 8px;">
                AICTE IDEA Lab Powered
              </h4>
              <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin: 0;">
                Co-hosted in synergy with the AICTE IDEA Lab, offering participants real-world hardware prototyping, automated PCB milling, 3D additive manufacturing masterclasses, and project acceleration.
              </p>
            </div>

            <div style="padding: 24px; background: rgba(189, 0, 255, 0.04); border: 1px solid rgba(189, 0, 255, 0.2); border-radius: 12px;">
              <div style="font-size: 2rem; margin-bottom: 12px;">🚀</div>
              <h4 style="font-family: var(--font-cyber); font-size: 1.15rem; color: #fff; font-weight: 800; margin-bottom: 8px;">
                Venture & Incubation Pathways
              </h4>
              <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin: 0;">
                InnovateX Startup Ideathon provides direct pitch access to angel investors, incubators, and industry leaders, turning visionary student ideas into viable tech ventures.
              </p>
            </div>

          </div>

          <!-- Festival Highlights Matrix -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
            ${FEST_CONFIG.stats.map(st => `
              <div style="padding: 20px; border-radius: 10px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); text-align: center;">
                <div style="font-family: var(--font-cyber); font-size: 1.75rem; font-weight: 900; color: var(--neon-pink); margin-bottom: 4px;">
                  ${st.value}
                </div>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); letter-spacing: 1px;">
                  ${st.label}
                </div>
              </div>
            `).join('')}
          </div>

        </div>

        <!-- ==========================================
             BLOCK 3: OFFICIAL CONTACT & DIRECT HELPDESK
        =========================================== -->
        <div class="cyber-panel cyber-hud-bracket cyber-popup" style="padding: 36px 40px; background: rgba(9, 5, 15, 0.95); border: 1px solid var(--border-cyan-glow);">
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; align-items: center;">
            
            <div>
              <div class="cyber-badge-cyan" style="margin-bottom: 10px;">
                <span>DIRECT COMMUNICATION CHANNELS</span>
              </div>
              <h4 style="font-family: var(--font-heading); font-size: 1.4rem; color: #fff; font-weight: 900; letter-spacing: 1px; margin-bottom: 8px;">
                CONNECT WITH THE KEN'Z 2K26 SECRETARIAT
              </h4>
              <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5; margin: 0;">
                Have questions regarding event registrations, workshop kits, accommodation, or travel coordination? Reach out directly to our central organizing team.
              </p>
            </div>

            <!-- Email Card with Direct Mailto & Copy -->
            <div style="padding: 22px; border-radius: 12px; background: linear-gradient(135deg, rgba(255, 42, 133, 0.08) 0%, rgba(0, 240, 255, 0.05) 100%); border: 1px solid var(--border-glow); display: flex; flex-direction: column; gap: 14px;">
              
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(255, 42, 133, 0.15); border: 1px solid var(--neon-pink); display: flex; align-items: center; justify-content: center; color: var(--neon-pink); flex-shrink: 0;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); letter-spacing: 1px;">OFFICIAL FESTIVAL EMAIL</div>
                  <a href="mailto:kenz@kongunadu.ac.in" style="font-family: var(--font-cyber); font-size: 1.15rem; color: var(--neon-cyan); font-weight: 800; text-decoration: none; word-break: break-all;">
                    kenz@kongunadu.ac.in
                  </a>
                </div>
              </div>

              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <a href="mailto:kenz@kongunadu.ac.in" class="btn-cyber-primary" style="flex: 1; justify-content: center; text-align: center; padding: 10px 16px; font-size: 0.8rem;">
                  SEND EMAIL DIRECTLY
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
                <button onclick="navigator.clipboard.writeText('kenz@kongunadu.ac.in'); alert('Copied kenz@kongunadu.ac.in to clipboard!');" class="btn-cyber-outline" style="padding: 10px 16px; font-size: 0.8rem; cursor: pointer;">
                  COPY EMAIL
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
