import { FEST_CONFIG } from './config/festConfig.js';
import { FEST_EVENTS } from './config/eventsData.js';

import { SceneManager } from './three/SceneManager.js';
import { Mascot3DViewer } from './three/Mascot3DViewer.js';

import { renderNavbar } from './components/Navbar.js';
import { renderHeroHUD } from './components/HeroHUD.js';
import { renderPartnerBanner } from './components/PartnerBanner.js';
import { initCountdown } from './components/CountdownTimer.js';
import { renderEventsShowcase } from './components/EventsShowcase.js';
import { renderEventModal } from './components/EventModal.js';
import { renderMascotInspector360 } from './components/MascotInspector360.js';
import { renderCoordinatorsSection } from './components/CoordinatorsSection.js';
import { renderRegistrationPortal, initRegistrationPortal } from './components/RegistrationPortal.js';
import { renderAboutInstitution } from './components/AboutInstitution.js';
import { renderCampusTravelGuide } from './components/CampusTravelGuide.js';
import { renderCyberFooter } from './components/CyberFooter.js';
import { renderAdminScanner, initAdminScanner } from './components/AdminScanner.js';
import { ScrollObserver } from './animations/ScrollObserver.js';
import { initStoryAnimations } from './animations/StoryAnimations.js';

let mascot3D = null;
let scrollObserver = null;

function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  try {
    // 1. Render Full HTML Application Skeleton
    app.innerHTML = `
      ${renderNavbar()}
      <main>
        ${renderHeroHUD()}
        ${renderPartnerBanner()}
        ${renderEventsShowcase()}
        ${renderMascotInspector360()}
        ${renderCoordinatorsSection()}
        ${renderAboutInstitution()}
        ${renderCampusTravelGuide()}
      </main>
      ${renderCyberFooter()}
      ${renderEventModal()}
      ${renderRegistrationPortal()}
      ${renderAdminScanner()}
    `;
  } catch (renderErr) {
    console.error('[KENZ-FEST] HTML Template Render Error:', renderErr);
  }

  // 2. Initialize Three.js Background 3D Engine
  try {
    new SceneManager('bg-canvas');
  } catch (threeErr) {
    console.warn('[KENZ-FEST] ThreeJS Scene Background init skipped:', threeErr);
  }

  // 3. Initialize Three.js 3D Mascot Inspector
  try {
    mascot3D = new Mascot3DViewer('three-mascot-container');
  } catch (mascotErr) {
    console.warn('[KENZ-FEST] 3D Mascot Viewer init skipped:', mascotErr);
  }

  // 4. Initialize Live Countdown Clock
  try {
    initCountdown();
  } catch (e) {
    console.warn('[KENZ-FEST] Countdown init:', e);
  }

  // 5. Initialize Smooth Cyber Pop-Up Scroll Animations
  try {
    scrollObserver = new ScrollObserver();
  } catch (e) {
    console.warn('[KENZ-FEST] Scroll observer init:', e);
  }

  // 6. Initialize Registration Portal & Database Handlers
  try {
    initRegistrationPortal();
  } catch (e) {
    console.warn('[KENZ-FEST] Registration portal init:', e);
  }

  // 7. Initialize Admin Camera QR Scanner Dashboard
  try {
    initAdminScanner();
  } catch (e) {
    console.warn('[KENZ-FEST] Admin scanner init:', e);
  }

  // 8. Setup Interactive Event Listeners & Audio Triggers
  try { setupVideoPlaybackController(); } catch (e) {}
  try { setupAudioListeners(); } catch (e) {}
  try { setupNavbarInteractions(); } catch (e) {}
  try { setupEventFiltering(); } catch (e) {}
  try { setupEventModals(); } catch (e) {}
  try { setupMascot3DControls(); } catch (e) {}
  
  // 9. Initialize Story Scroll Animations
  try { initStoryAnimations(); } catch (e) { console.warn('[KENZ-FEST] Story Animations init skipped:', e); }
}

// 1. Video Playback & Performance Controller
function setupVideoPlaybackController() {
  const video = document.getElementById('front-intro-video');
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  // Smooth playback trigger
  const startPlayback = () => {
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  startPlayback();

  // Retry on any user gesture
  document.addEventListener('pointerdown', startPlayback, { once: true });
  document.addEventListener('touchstart', startPlayback, { once: true, passive: true });
  document.addEventListener('scroll', startPlayback, { once: true, passive: true });

  // Seamless loop recovery with zero freezing
  video.addEventListener('ended', () => {
    video.currentTime = 0;
    startPlayback();
  });

  video.addEventListener('stalled', () => {
    startPlayback();
  });

  // Pause video when scrolled out of view to save GPU power, resume when in view
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startPlayback();
        } else {
          if (!video.paused) video.pause();
        }
      });
    }, { threshold: 0.05 });

    videoObserver.observe(video);
  }
}

// 2. Web Audio UI Feedback Listeners
function setupAudioListeners() {
  // Audio completely removed per user request
}

// 2. Navbar Interactions
function setupNavbarInteractions() {

  // Mobile Menu Drawer
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.style.display = 'none';
    if (hamburgerIcon) hamburgerIcon.style.display = 'block';
    if (closeIcon) closeIcon.style.display = 'none';
  }

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.style.display = 'block';
    if (hamburgerIcon) hamburgerIcon.style.display = 'none';
    if (closeIcon) closeIcon.style.display = 'block';
  }

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = mobileMenu.style.display === 'block';
      if (isVisible) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking anywhere outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#main-header')) {
        closeMobileMenu();
      }
    });

    // Mobile nav links with smooth scrolling and navbar offset compensation
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        closeMobileMenu();
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const navHeight = 70;
            const topPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: topPos, behavior: 'smooth' });
          }
        }
      });
    });

    // Drawer Register Button
    const drawerRegBtn = mobileMenu.querySelector('.mobile-menu-register-btn');
    if (drawerRegBtn) {
      drawerRegBtn.addEventListener('click', () => {
        closeMobileMenu();
        const navReg = document.getElementById('nav-register-btn');
        if (navReg) navReg.click();
      });
    }
  }

  // Scroll handler: Reveal header smoothly as user scrolls
  const header = document.getElementById('main-header');
  function handleNavbarScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('nav-visible');
    } else {
      header.classList.remove('nav-visible');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check on load
}

// 3. Event Category Filtering
function setupEventFiltering() {
  const mainTabs = document.querySelectorAll('#main-filter-tabs .main-tab-btn');
  const catTabs = document.querySelectorAll('#event-filter-tabs .category-tab-btn');
  const cards = document.querySelectorAll('#events-grid-container .event-card');
  const catContainer = document.getElementById('event-filter-tabs');

  if (!mainTabs.length && !catTabs.length) return;

  // Main Tabs Logic
  mainTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      mainTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-main-filter');
      
      if (filter === 'upcoming') {
        // Hide category filters
        if (catContainer) catContainer.style.display = 'none';
        
        // Show only upcoming event (Workshop)
        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (cardCat.toLowerCase() === 'workshop') {
            card.style.display = 'flex';
            setTimeout(() => card.classList.add('is-visible'), 50);
          } else {
            card.style.display = 'none';
          }
        });
      } else {
        // Show category filters
        if (catContainer) catContainer.style.display = 'flex';
        
        // Reset category filter to ALL
        catTabs.forEach(b => b.classList.remove('active'));
        if (catTabs[0]) catTabs[0].classList.add('active'); // ALL
        
        // Show all
        cards.forEach(card => {
          card.style.display = 'flex';
          setTimeout(() => card.classList.add('is-visible'), 50);
        });
      }
    });
  });

  // Category Tabs Logic
  catTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      catTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-category');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'ALL' || cardCat.toLowerCase() === cat.toLowerCase()) {
          card.style.display = 'flex';
          setTimeout(() => card.classList.add('is-visible'), 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 4. Event Details Modal Drawer
function setupEventModals() {
  const backdrop = document.getElementById('event-modal-backdrop');
  const bodyContent = document.getElementById('modal-body-content');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!backdrop || !bodyContent) return;

  document.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('.view-event-btn');
    if (viewBtn) {
      const eventId = viewBtn.getAttribute('data-event-id');
      const eventData = FEST_EVENTS.find(ev => ev.id === eventId);
      
      if (eventData) {
        bodyContent.innerHTML = `
          <div style="display: inline-block; padding: 4px 14px; border-radius: 20px; background: var(--neon-pink-subtle); border: 1px solid var(--border-subtle); font-size: 0.75rem; font-weight: 700; color: var(--neon-pink); letter-spacing: 1px; margin-bottom: 14px;">
            ${eventData.categoryBadge} // ${eventData.day}
          </div>

          <h2 style="font-family: var(--font-cyber); font-size: 1.8rem; font-weight: 900; color: #fff; margin-bottom: 8px;">
            ${eventData.title}
          </h2>

          <p style="color: var(--pink-accent); font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; margin-bottom: 16px;">
            ${eventData.tagline}
          </p>

          <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 24px;">
            ${eventData.description}
          </p>

          <!-- Prize Pool & Metrics -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 24px;">
            <div style="padding: 12px; border-radius: 8px; background: rgba(255, 42, 133, 0.08); border: 1px solid var(--border-subtle);">
              <span style="font-size: 0.7rem; color: var(--text-muted); display: block;">TOTAL PRIZE POOL</span>
              <strong style="color: var(--neon-pink); font-size: 1.1rem; font-family: var(--font-cyber);">${eventData.prizePool}</strong>
            </div>
            <div style="padding: 12px; border-radius: 8px; background: rgba(0, 240, 255, 0.08); border: 1px solid var(--border-cyan-glow);">
              <span style="font-size: 0.7rem; color: var(--text-muted); display: block;">1ST PRIZE</span>
              <strong style="color: var(--neon-cyan); font-size: 1.1rem; font-family: var(--font-cyber);">${eventData.firstPrize}</strong>
            </div>
            <div style="padding: 12px; border-radius: 8px; background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-dark);">
              <span style="font-size: 0.7rem; color: var(--text-muted); display: block;">TEAM SIZE</span>
              <strong style="color: #fff; font-size: 0.95rem; font-family: var(--font-mono);">${eventData.teamSize}</strong>
            </div>
          </div>

          <!-- Rules & Guidelines -->
          <div style="margin-bottom: 24px;">
            <h4 style="font-family: var(--font-cyber); font-size: 0.95rem; color: #fff; margin-bottom: 10px;">
              OFFICIAL RULES & EVALUATION
            </h4>
            <ul style="list-style: disc; padding-left: 20px; color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6;">
              ${eventData.rules.map(r => `<li>${r}</li>`).join('')}
            </ul>
          </div>

          <!-- Action Button & Timer -->
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${eventId === 'workshop' ? `
              <div style="text-align: center; padding: 10px; background: rgba(0, 255, 255, 0.1); border: 1px solid var(--neon-cyan); border-radius: 8px; margin-bottom: 8px;">
                <span style="font-size: 0.75rem; color: var(--neon-cyan); letter-spacing: 1px; font-family: var(--font-cyber);">REGISTRATION CLOSES IN:</span>
                <div id="workshop-modal-timer" style="font-size: 1.2rem; font-weight: 800; font-family: var(--font-mono); color: #fff; margin-top: 4px;">Loading...</div>
              </div>
              <a href="${FEST_CONFIG.workshopGoogleForm}" target="_blank" rel="noopener noreferrer" class="btn-cyber-primary modal-trigger-reg-btn" style="flex: 1; justify-content: center; padding: 14px; text-decoration: none; display: flex; align-items: center; gap: 8px;">
                <span>REGISTER NOW (GOOGLE FORM)</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            ` : `
              <button disabled style="flex: 1; justify-content: center; padding: 14px; background: rgba(255,255,255,0.05); color: var(--text-muted); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: var(--font-cyber); font-weight: 700; cursor: not-allowed; letter-spacing: 1px;">
                REGISTRATION NOT YET OPEN
              </button>
            `}
          </div>
        `;
        backdrop.classList.add('active');

        // Start timer if workshop
        if (eventId === 'workshop') {
          const timerEl = document.getElementById('workshop-modal-timer');
          const targetDate = new Date('2026-08-28T10:00:00').getTime();
          
          const updateTimer = () => {
            if (!timerEl) return;
            const now = new Date().getTime();
            const dist = targetDate - now;
            if (dist < 0) {
              timerEl.innerText = "REGISTRATION CLOSED";
              return;
            }
            const d = Math.floor(dist / (1000 * 60 * 60 * 24));
            const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((dist % (1000 * 60)) / 1000);
            timerEl.innerText = `${d}d ${h}h ${m}m ${s}s`;
          };
          updateTimer();
          const timerInt = setInterval(updateTimer, 1000);
          
          // Clear interval on close
          const closeHandler = () => {
            clearInterval(timerInt);
            closeBtn.removeEventListener('click', closeHandler);
          };
          closeBtn.addEventListener('click', closeHandler);
        }
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => backdrop.classList.remove('active'));
  }
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) backdrop.classList.remove('active');
  });
}

// 5. 3D Mascot Inspector Controls
function setupMascot3DControls() {
  if (!mascot3D) return;

  // Preset camera angle chips
  const chips = document.querySelectorAll('.mascot-camera-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const preset = chip.getAttribute('data-preset');
      mascot3D.setCameraPreset(preset);
    });
  });

  // Wireframe toggle
  const wireframeBtn = document.getElementById('toggle-wireframe-btn');
  if (wireframeBtn) {
    wireframeBtn.addEventListener('click', () => {
      const isWire = mascot3D.toggleWireframe();
      wireframeBtn.innerText = isWire ? 'WIREFRAME: ON' : 'WIREFRAME: OFF';
      wireframeBtn.style.color = isWire ? 'var(--neon-cyan)' : '#fff';
      wireframeBtn.style.borderColor = isWire ? 'var(--neon-cyan)' : 'var(--border-subtle)';
    });
  }

  // Auto-rotate toggle
  const rotateBtn = document.getElementById('toggle-autorotate-btn');
  if (rotateBtn) {
    rotateBtn.addEventListener('click', () => {
      const isAuto = mascot3D.toggleAutoRotate();
      rotateBtn.innerText = isAuto ? 'ROTATION: AUTO' : 'ROTATION: PAUSED';
      rotateBtn.style.color = isAuto ? '#fff' : 'var(--neon-pink)';
    });
  }
}

// 6. Schedule Day 1 / Day 2 Tabs
function setupScheduleTabs() {
  const tab1 = document.getElementById('tab-day-1');
  const tab2 = document.getElementById('tab-day-2');
  const list1 = document.getElementById('schedule-list-day1');
  const list2 = document.getElementById('schedule-list-day2');

  if (tab1 && tab2 && list1 && list2) {
    tab1.addEventListener('click', () => {
      tab1.className = 'btn-cyber-primary schedule-day-tab active';
      tab2.className = 'btn-cyber-outline schedule-day-tab';
      list1.style.display = 'flex';
      list2.style.display = 'none';
    });

    tab2.addEventListener('click', () => {
      tab2.className = 'btn-cyber-primary schedule-day-tab active';
      tab1.className = 'btn-cyber-outline schedule-day-tab';
      list2.style.display = 'flex';
      list1.style.display = 'none';
    });
  }
}

// Initialize on DOM Ready or immediately if DOM is interactive
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
