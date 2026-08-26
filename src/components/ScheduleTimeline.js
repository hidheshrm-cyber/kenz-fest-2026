import { renderCountdownTimer } from './CountdownTimer.js';
import { FEST_CONFIG } from '../config/festConfig.js';

export function renderScheduleTimeline() {
  const mainSchedule = [
    { time: "08:30 AM", title: "Participant Check-In & Kit Distribution", venue: "College Main Reception", badge: "CHECK-IN" },
    { time: "09:30 AM", title: "Grand Inaugural Ceremony & Keynote Address", venue: "Auditorium Hall A", badge: "INAUGURATION" },
    { time: "10:30 AM", title: "24-Hour Cyber Hackathon - Problem Statement Reveal", venue: "Computing Labs 1 & 2", badge: "HACKATHON" },
    { time: "11:00 AM", title: "InnovateX Startup Ideathon - Pitching Rounds", venue: "Innovation & Incubation Center", badge: "IDEATHON" },
    { time: "01:00 PM", title: "Networking Lunch & Interactive Tech Demos", venue: "Student Dining Complex", badge: "BREAK" },
    { time: "02:30 PM", title: "Expert Keynote: Quantum AI & Cyber Systems", venue: "Main Auditorium (KNCET)", badge: "TECH TALK" },
    { time: "03:30 PM", title: "Visual Tech Architecture (Slide Show Presentations)", venue: "AV Hall 1", badge: "TECH PPT" },
    { time: "04:30 PM", title: "Cyber Arena: Speed Debugging & Web Sprint Battles", venue: "Cyber Arena Lab 4 & 5", badge: "COMPETITIVE" },
    { time: "05:30 PM", title: "Grand Valedictory & Cash Prize Pool Distribution", venue: "Main Auditorium", badge: "AWARDS" }
  ];

  return `
    <section id="schedule" style="position: relative; padding: 100px 0; background: rgba(14, 8, 22, 0.5);">
      <div class="container" style="position: relative; z-index: 2;">
        
        <!-- Section Header -->
        <div class="cyber-popup" style="text-align: center; margin-bottom: 40px;">
          <div class="cyber-badge" style="margin-bottom: 16px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>PROGRAM SCHEDULE</span>
          </div>
          <h2 class="text-gradient-pink" style="font-family: var(--font-heading); font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 900; letter-spacing: 2px; margin-bottom: 14px;">
            EVENT TIMELINE
          </h2>
          <p style="color: var(--text-secondary); font-size: 1.05rem; max-width: 650px; margin: 0 auto; line-height: 1.6;">
            Explore live festival track sessions and featured national workshops.
          </p>
        </div>

        <!-- Schedule Selector Tabs -->
        <div class="cyber-popup stagger-2" style="display: flex; justify-content: center; gap: 16px; margin-bottom: 44px; flex-wrap: wrap;">
          <button id="tab-day-1" class="btn-cyber-primary schedule-day-tab active" data-day="1" style="padding: 12px 28px;">
            MAIN TRACK SESSIONS
          </button>
          <button id="tab-day-2" class="btn-cyber-outline schedule-day-tab" data-day="2" style="padding: 12px 28px;">
            LIVE EVENTS
          </button>
        </div>

        <!-- Schedule Timeline Container -->
        <div class="cyber-panel cyber-hud-bracket cyber-popup-scale" style="max-width: 850px; margin: 0 auto; padding: 36px 30px;">
          
          <!-- Main Schedule List -->
          <div id="schedule-list-day1" class="schedule-list" style="display: flex; flex-direction: column; gap: 20px;">
            ${mainSchedule.map((item, idx) => renderTimelineItem(item, idx)).join('')}
          </div>

          <!-- Upcoming Events (Single Featured Workshop Row) -->
          <div id="schedule-list-day2" class="schedule-list" style="display: none; flex-direction: column; gap: 20px;">
            
            <div class="cyber-panel cyber-hud-bracket cyber-popup is-visible" style="padding: 28px; background: linear-gradient(135deg, rgba(255, 42, 133, 0.08) 0%, rgba(0, 240, 255, 0.05) 100%); border: 1px solid var(--border-glow); position: relative;">
              
              <!-- Top Badge & Date Row -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
                <span class="cyber-badge" style="font-size: 0.72rem; letter-spacing: 1px;">
                  LIVE WORKSHOP
                </span>
                <span class="cyber-badge-cyan" style="font-size: 0.78rem; font-weight: 800;">
                  28th & 29th AUGUST 2026
                </span>
              </div>

              <!-- Main Title -->
              <h3 style="font-family: var(--font-cyber); font-size: 1.5rem; font-weight: 900; color: #fff; margin-bottom: 12px; line-height: 1.3;">
                3D PRINTING WORKSHOP'26 & PCB PROTOTYPING MACHINE
              </h3>

              <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
                An exclusive 2-day hands-on engineering masterclass covering industrial additive manufacturing and automated PCB hardware fabrication.
              </p>

              <!-- Day 1 & Day 2 Sub-Tracks -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 24px;">
                
                <!-- Day 1 Track -->
                <div style="padding: 16px; border-radius: 8px; background: rgba(255, 42, 133, 0.06); border: 1px solid rgba(255, 42, 133, 0.2);">
                  <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--neon-pink); font-weight: 800; margin-bottom: 6px;">
                    DAY 1 • 28 AUGUST 2026
                  </div>
                  <h4 style="font-family: var(--font-cyber); font-size: 1.05rem; font-weight: 800; color: #fff; margin-bottom: 4px;">
                    3D PRINTING WORKSHOP'26
                  </h4>
                  <div style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
                    CAD Slicing, FDM Printers, Materials & Rapid 3D Prototyping
                  </div>
                </div>

                <!-- Day 2 Track -->
                <div style="padding: 16px; border-radius: 8px; background: rgba(0, 240, 255, 0.06); border: 1px solid rgba(0, 240, 255, 0.2);">
                  <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--neon-cyan); font-weight: 800; margin-bottom: 6px;">
                    DAY 2 • 29 AUGUST 2026
                  </div>
                  <h4 style="font-family: var(--font-cyber); font-size: 1.05rem; font-weight: 800; color: #fff; margin-bottom: 4px;">
                    PCB PROTOTYPING MACHINE
                  </h4>
                  <div style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
                    Circuit Schematic Layout, CNC PCB Milling & Etching Labs
                  </div>
                </div>

              </div>

              <!-- Live Workshop Countdown Clock -->
              <div style="margin-bottom: 20px; padding: 16px; border-radius: 10px; background: rgba(0, 0, 0, 0.45); border: 1px solid var(--border-subtle); display: flex; flex-direction: column; align-items: center; gap: 10px;">
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-cyan); letter-spacing: 1.5px; font-weight: 700;">
                  ⏳ WORKSHOP STARTS IN:
                </div>
                ${renderCountdownTimer()}
              </div>

              <!-- Footer Row with Venue and Register CTA -->
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 16px;">
                <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted);">
                  VENUE: <strong style="color: #fff;">Advanced Fabrication & Prototyping Lab (KNCET)</strong>
                </div>
                <div style="display: flex; gap: 10px; align-items: center;">
                  <button class="btn-cyber-outline view-event-btn" data-event-id="workshop" style="padding: 8px 16px; font-size: 0.76rem;">
                    <span>VIEW DETAILS</span>
                  </button>
                  <a href="${FEST_CONFIG.workshopGoogleForm}" target="_blank" rel="noopener noreferrer" class="btn-cyber-primary" style="padding: 8px 18px; font-size: 0.76rem; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                    <span>REGISTER (GOOGLE FORM)</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

function renderTimelineItem(item, idx = 0) {
  const staggerClass = `stagger-${(idx % 4) + 1}`;

  return `
    <div class="cyber-popup ${staggerClass}" style="display: flex; gap: 20px; align-items: flex-start; padding: 16px; border-radius: 10px; background: rgba(255, 42, 133, 0.04); border: 1px solid rgba(255, 42, 133, 0.15); transition: transform 0.2s ease;">
      <!-- Time Badge -->
      <div style="min-width: 130px; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 800; color: var(--neon-cyan); flex-shrink: 0; padding-top: 2px;">
        ${item.time}
      </div>

      <!-- Details -->
      <div style="flex: 1;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px; flex-wrap: wrap;">
          <h4 style="font-family: var(--font-cyber); font-size: 1.05rem; font-weight: 800; color: #fff; margin: 0;">
            ${item.title}
          </h4>
          <span class="cyber-badge" style="font-size: 0.65rem; padding: 2px 8px;">${item.badge}</span>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">
          VENUE: <span style="color: var(--text-secondary);">${item.venue}</span>
        </div>
      </div>
    </div>
  `;
}
