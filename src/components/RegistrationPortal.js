import { FEST_CONFIG } from '../config/festConfig.js';
import { FEST_EVENTS } from '../config/eventsData.js';
import { dbService } from '../config/supabaseClient.js';
import QRCode from 'qrcode';

export function renderRegistrationPortal() {
  return `
    <div id="registration-modal-backdrop" class="cyber-modal-overlay">
      <div class="cyber-modal-container cyber-hud-bracket" style="max-width: 680px;">
        
        <!-- Close Button -->
        <button id="reg-close-btn" style="position: absolute; top: 20px; right: 20px; width: 36px; height: 36px; border-radius: 50%; background: rgba(255, 42, 133, 0.15); border: 1px solid var(--neon-pink); color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <!-- Form Wrapper -->
        <div id="reg-form-view">
          
          <div style="margin-bottom: 24px;">
            <span class="cyber-badge" style="margin-bottom: 8px;">OFFICIAL REGISTRATION PORTAL</span>
            <h2 class="text-gradient-pink" style="font-family: var(--font-cyber); font-size: 1.8rem; font-weight: 900; margin-bottom: 6px;">
              KEN'Z FEST
            </h2>
            <p style="color: var(--text-secondary); font-size: 0.88rem;">
              Complete your entry for national-level event tracks. Free participation verification available.
            </p>
          </div>

          <form id="cyber-reg-form" style="display: flex; flex-direction: column; gap: 18px;">
            
            <!-- Event Track Selector -->
            <div>
              <label style="display: block; font-family: var(--font-mono); font-size: 0.78rem; color: var(--neon-cyan); margin-bottom: 6px; font-weight: 700;">
                SELECT COMPETITION TRACK *
              </label>
              <select id="reg-event-select" required style="width: 100%; padding: 12px 16px; background: rgba(7, 5, 13, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; color: #fff; font-family: var(--font-body); font-size: 0.9rem; outline: none;">
                ${FEST_EVENTS.map(ev => `
                  <option value="${ev.id}">${ev.title} (${ev.categoryBadge})</option>
                `).join('')}
              </select>
            </div>

            <!-- Two-Column Form Row -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              
              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px;">
                  LEAD / PARTICIPANT NAME *
                </label>
                <input type="text" id="reg-name" required placeholder="e.g. Alex Hunter" style="width: 100%; padding: 12px 14px; background: rgba(7, 5, 13, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; color: #fff; font-size: 0.9rem; outline: none;" />
              </div>

              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px;">
                  EMAIL ADDRESS *
                </label>
                <input type="email" id="reg-email" required placeholder="alex@university.edu" style="width: 100%; padding: 12px 14px; background: rgba(7, 5, 13, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; color: #fff; font-size: 0.9rem; outline: none;" />
              </div>

            </div>

            <!-- Two-Column Contact & College -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              
              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px;">
                  PHONE / WHATSAPP NUMBER *
                </label>
                <input type="tel" id="reg-phone" required placeholder="+91 98765 43210" style="width: 100%; padding: 12px 14px; background: rgba(7, 5, 13, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; color: #fff; font-size: 0.9rem; outline: none;" />
              </div>

              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px;">
                  COLLEGE / INSTITUTION NAME *
                </label>
                <input type="text" id="reg-college" required placeholder="e.g. Kongunadu College of Eng" style="width: 100%; padding: 12px 14px; background: rgba(7, 5, 13, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; color: #fff; font-size: 0.9rem; outline: none;" />
              </div>

            </div>

            <!-- Department & Year Row -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              
              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px;">
                  DEPARTMENT / BRANCH *
                </label>
                <input type="text" id="reg-dept" required placeholder="e.g. CSE / IT / ECE / MECH" style="width: 100%; padding: 12px 14px; background: rgba(7, 5, 13, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; color: #fff; font-size: 0.9rem; outline: none;" />
              </div>

              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px;">
                  YEAR OF STUDY *
                </label>
                <select id="reg-year" required style="width: 100%; padding: 12px 14px; background: rgba(7, 5, 13, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; color: #fff; font-size: 0.9rem; outline: none;">
                  <option value="1st Year">1st Year (B.E / B.Tech)</option>
                  <option value="2nd Year">2nd Year (B.E / B.Tech)</option>
                  <option value="3rd Year" selected>3rd Year (B.E / B.Tech)</option>
                  <option value="4th Year">4th Year (B.E / B.Tech)</option>
                  <option value="Postgraduate">Postgraduate (M.E / MCA / MBA)</option>
                </select>
              </div>

            </div>

            <!-- Submit Button -->
            <div style="margin-top: 12px;">
              <button type="submit" id="reg-submit-btn" class="btn-cyber-primary" style="width: 100%; justify-content: center; padding: 14px; font-size: 0.88rem;">
                CONFIRM & GENERATE SCANNABLE QR PASS
              </button>
            </div>

          </form>

        </div>

        <!-- Success Ticket View (Hidden initially) -->
        <div id="reg-success-view" style="display: none;"></div>

      </div>
    </div>
  `;
}

export function initRegistrationPortal() {
  const backdrop = document.getElementById('registration-modal-backdrop');
  const closeBtn = document.getElementById('reg-close-btn');
  const formView = document.getElementById('reg-form-view');
  const successView = document.getElementById('reg-success-view');
  const form = document.getElementById('cyber-reg-form');
  const select = document.getElementById('reg-event-select');
  const submitBtn = document.getElementById('reg-submit-btn');

  if (!backdrop) return;

  function openPortal(eventId = null) {
    if (eventId && select) {
      select.value = eventId;
    }
    if (formView && successView) {
      formView.style.display = 'block';
      successView.style.display = 'none';
    }
    backdrop.classList.add('active');
  }

  // Open triggers - Redirect to official Google Form directly (No popup modal)
  document.addEventListener('click', (e) => {
    const regTrigger = e.target.closest('#nav-register-btn, #hero-register-btn, .quick-register-btn, .modal-trigger-reg-btn, .mobile-menu-register-btn');
    if (regTrigger) {
      const detailsBackdrop = document.getElementById('event-modal-backdrop');
      if (detailsBackdrop) detailsBackdrop.classList.remove('active');
      // If triggered as normal link, the href will open the Google Form in new tab
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => backdrop.classList.remove('active'));
  }
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) backdrop.classList.remove('active');
  });

  // Handle Form Submission
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'GENERATING ENCRYPTED PASS...';
      }

      const eventId = select.value;
      const eventData = FEST_EVENTS.find(ev => ev.id === eventId) || FEST_EVENTS[0];
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const phone = document.getElementById('reg-phone').value;
      const college = document.getElementById('reg-college').value;
      const dept = document.getElementById('reg-dept').value;
      const year = document.getElementById('reg-year').value;

      const regId = 'KENZ-2026-' + Math.floor(100000 + Math.random() * 900000);
      const timestamp = new Date().toLocaleString();

      // 1. Save to Database (Cloud / Local)
      const record = {
        reg_id: regId,
        name,
        email,
        phone,
        college,
        dept,
        year,
        event_id: eventId,
        event_title: eventData.title,
        event_category: eventData.category
      };

      await dbService.createRegistration(record);

      // 2. Generate Real Dynamic QR Code
      const qrPayload = JSON.stringify({
        fest: "KEN'Z FEST",
        reg_id: regId,
        name,
        track: eventData.title,
        college
      });

      let qrDataUrl = '';
      try {
        qrDataUrl = await QRCode.toDataURL(qrPayload, {
          width: 180,
          margin: 2,
          color: {
            dark: '#ff2a85',
            light: '#07050d'
          }
        });
      } catch (err) {
        console.warn('QR Code generation fallback:', err);
      }

      // 3. (Audio feedback removed)

      // 4. Render Cyber Pass Ticket
      formView.style.display = 'none';
      successView.style.display = 'block';
      successView.innerHTML = `
        <div class="cyber-ticket">
          
          <!-- Ticket Header -->
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed rgba(255, 42, 133, 0.4); padding-bottom: 16px; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="${FEST_CONFIG.mascot.officialLogo}" alt="Logo" style="width: 44px; height: 44px; border-radius: 8px; background: #000;" />
              <div>
                <h3 style="font-family: var(--font-cyber); font-size: 1.1rem; font-weight: 900; color: #fff; margin: 0;">${FEST_CONFIG.name}</h3>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--neon-pink);">NATIONAL TECH FEST // KNCET AUTONOMOUS</span>
              </div>
            </div>
            <div class="cyber-badge-cyan" style="font-size: 0.72rem;">
              VERIFIED ENTRY
            </div>
          </div>

          <!-- Digital Pass ID -->
          <div style="text-align: center; margin-bottom: 20px; padding: 12px; background: rgba(255, 42, 133, 0.08); border-radius: 8px; border: 1px solid var(--border-subtle);">
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); display: block;">DIGITAL REGISTRATION PASS ID</span>
            <strong style="font-family: var(--font-cyber); font-size: 1.6rem; color: var(--neon-pink); letter-spacing: 2px;">${regId}</strong>
          </div>

          <!-- Participant Info & QR Code Row -->
          <div style="display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: center; margin-bottom: 24px;">
            
            <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.85rem;">
              <div>
                <span style="color: var(--text-muted); font-size: 0.72rem; display: block;">PARTICIPANT NAME</span>
                <strong style="color: #fff; font-size: 1rem;">${name}</strong>
              </div>
              <div>
                <span style="color: var(--text-muted); font-size: 0.72rem; display: block;">REGISTERED TRACK</span>
                <strong style="color: var(--neon-cyan);">${eventData.title}</strong>
              </div>
              <div>
                <span style="color: var(--text-muted); font-size: 0.72rem; display: block;">COLLEGE / INSTITUTION</span>
                <span style="color: #fff;">${college}</span>
              </div>
              <div>
                <span style="color: var(--text-muted); font-size: 0.72rem; display: block;">BRANCH & YEAR</span>
                <span style="color: #fff;">${dept} (${year})</span>
              </div>
            </div>

            <!-- Dynamic QR Code Container -->
            <div style="text-align: center; padding: 8px; background: #07050d; border-radius: 10px; border: 1px solid var(--neon-pink); box-shadow: 0 0 16px var(--neon-pink-glow);">
              ${qrDataUrl ? `
                <img src="${qrDataUrl}" alt="Registration QR Code" style="width: 140px; height: 140px; display: block; border-radius: 6px;" />
              ` : `
                <div style="width: 140px; height: 140px; display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-size: 0.7rem; color: var(--neon-pink);">
                  [QR ENCRYPTED]
                </div>
              `}
              <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); margin-top: 4px; display: block;">SCAN AT VENUE</span>
            </div>

          </div>

          <div style="text-align: center; margin-bottom: 20px; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
            REGISTERED AT: ${timestamp}
          </div>

          <!-- Action Buttons -->
          <div style="display: flex; gap: 12px;">
            <button onclick="window.print()" class="btn-cyber-primary" style="flex: 1; justify-content: center; padding: 12px; font-size: 0.8rem;">
              PRINT / SAVE PASS
            </button>
            <button id="btn-close-ticket" class="btn-cyber-outline" style="padding: 12px 20px; font-size: 0.8rem;">
              DONE
            </button>
          </div>

        </div>
      `;

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = 'CONFIRM & GENERATE SCANNABLE QR PASS';
      }

      document.getElementById('btn-close-ticket')?.addEventListener('click', () => {
        backdrop.classList.remove('active');
      });
    });
  }
}
