import { FEST_EVENTS } from '../config/eventsData.js';
import { FEST_CONFIG } from '../config/festConfig.js';

export function renderEventsShowcase() {
  return `
    <section id="events" class="cyber-section-ambient" style="position: relative; padding: 120px 0; min-height: 100vh; overflow: hidden;">
      
      <!-- Background Cyber Objects & Ambience -->
      <div class="cyber-bg-grid-mesh"></div>
      <div class="cyber-bg-orb cyber-bg-orb-pink" style="width: 550px; height: 550px; top: 5%; right: -120px;"></div>
      <div class="cyber-bg-orb cyber-bg-orb-cyan" style="width: 500px; height: 500px; bottom: 10%; left: -100px;"></div>
      <div class="cyber-floating-ring" style="width: 450px; height: 450px; top: 20%; left: 5%;"></div>
      <div class="cyber-floating-diamond" style="bottom: 20%; right: 6%;"></div>
      <div class="cyber-watermark" style="top: 15%; left: 50%; transform: translateX(-50%); opacity: 0.035;">COMPETE</div>

      <!-- Scrolling Story Mascot (story_char2) moving Right Top to Left Down -->
      <div id="arena-char-track" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden; z-index: 1;">
        <img 
          id="arena-story-char2" 
          src="/assets/story_char2.png" 
          alt="Pink Panther" 
          style="position: absolute; width: clamp(150px, 20vw, 250px); top: 0; left: 0; filter: drop-shadow(0 0 25px rgba(255, 42, 133, 0.7)); will-change: transform; pointer-events: none; user-select: none; opacity: 0; transition: opacity 0.3s ease;"
        />
      </div>

      <div class="container" style="position: relative; z-index: 2; max-width: 1400px;">
        
        <div class="cyber-popup stagger-1" style="text-align: center; margin-bottom: 60px;">
          <h2 style="font-family: var(--font-cyber); font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 900; letter-spacing: 2px; margin-bottom: 14px; color: #fff; text-shadow: 0 0 15px rgba(255,42,133,0.5); text-transform: uppercase;">
            EVENT ARENA
          </h2>
          <p style="color: var(--text-secondary); font-size: 1.1rem; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            Compete for grand cash prize pools, international recognition, and mentorship from top industry leaders.
          </p>
        </div>

        <!-- Main Filter Tabs -->
        <div id="main-filter-tabs" style="display: flex; gap: 20px; justify-content: center; margin-bottom: 20px;" class="cyber-popup stagger-1">
          <button class="cyber-tab-btn main-tab-btn active" data-main-filter="all">ALL EVENTS</button>
          <button class="cyber-tab-btn main-tab-btn" data-main-filter="upcoming">UPCOMING EVENTS</button>
        </div>

        <!-- Category Filter Tabs -->
        <div id="event-filter-tabs" style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 40px;" class="cyber-popup stagger-1">
          <button class="cyber-tab-btn category-tab-btn active" data-category="ALL">ALL</button>
          <button class="cyber-tab-btn category-tab-btn" data-category="Hackathon">HACKATHON</button>
          <button class="cyber-tab-btn category-tab-btn" data-category="Ideathon">IDEATHON</button>
          <button class="cyber-tab-btn category-tab-btn" data-category="Workshop">WORKSHOP</button>
          <button class="cyber-tab-btn category-tab-btn" data-category="Tech Talk">TECH TALK</button>
          <button class="cyber-tab-btn category-tab-btn" data-category="Presentation">PRESENTATION</button>
          <button class="cyber-tab-btn category-tab-btn" data-category="FDP">FDP</button>
          <button class="cyber-tab-btn category-tab-btn" data-category="Startup Pitch">STARTUP PITCH</button>
        </div>

        <div id="events-grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
          ${FEST_EVENTS.map((event, idx) => renderSingleEventCard(event, idx)).join('')}
        </div>

      </div>
    </section>
  `;
}

let arenaCharRafId = null;

export function initEventArenaCharacter() {
  if (arenaCharRafId) {
    cancelAnimationFrame(arenaCharRafId);
    arenaCharRafId = null;
  }

  const char = document.getElementById('arena-story-char2');
  const section = document.getElementById('events');
  if (!char || !section) return;

  let targetX = 0;
  let targetY = 0;
  let targetRot = 0;
  let currentX = null;
  let currentY = null;
  let currentRot = 0;
  let isVisible = false;

  function calculateTarget() {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionWidth = section.clientWidth;
    const sectionHeight = section.offsetHeight;

    // Check visibility with generous threshold
    if (rect.bottom < 0 || rect.top > windowHeight) {
      isVisible = false;
      char.style.opacity = '0';
      return;
    }

    isVisible = true;
    char.style.opacity = '0.95';

    // Calculate progress as user scrolls through the full height of the section
    // 0 = section top enters viewport from bottom
    // 1 = section bottom leaves viewport past the top
    const totalTravel = sectionHeight + windowHeight;
    const currentScrolled = windowHeight - rect.top;
    let progress = currentScrolled / totalTravel;
    progress = Math.max(0, Math.min(1, progress));

    const charWidth = char.offsetWidth || 180;
    const charHeight = char.offsetHeight || 260;

    // Path: Out of Right-Top frame -> Out of Left-Down frame
    // Start (Top-Right, outside frame):
    const startX = sectionWidth + 30;
    const startY = -charHeight * 0.6;

    // End (Bottom-Left, outside frame):
    const endX = -charWidth - 40;
    const endY = sectionHeight + 40;

    targetX = startX + progress * (endX - startX);
    targetY = startY + progress * (endY - startY);

    // Subtle dynamic rotation as it travels down
    targetRot = -14 + progress * 28;

    // Initialize current on first run
    if (currentX === null || currentY === null) {
      currentX = targetX;
      currentY = targetY;
      currentRot = targetRot;
    }
  }

  function tick() {
    if (isVisible && currentX !== null && currentY !== null) {
      // Smooth LERP interpolation (0.08 = ultra silky glide)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      currentRot += (targetRot - currentRot) * 0.08;

      char.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) rotate(${currentRot.toFixed(2)}deg)`;
    }

    arenaCharRafId = requestAnimationFrame(tick);
  }

  window.addEventListener('scroll', calculateTarget, { passive: true });
  window.addEventListener('resize', calculateTarget, { passive: true });
  
  calculateTarget();
  tick();
}

function renderSingleEventCard(event, idx = 0) {
  const staggerClass = `stagger-${(idx % 4) + 1}`;

  // We extract a short summary to show on the card if the description is HTML heavy
  let displayDesc = event.shortTitle;
  if (event.id === 'workshop') {
    displayDesc = "An intensive two-day hands-on engineering masterclass. Day 1 focuses on 3D PRINTING WORKSHOP '26 covering CAD slicing, FDM machines, and rapid additive manufacturing. Day 2 covers PCB PROTOTYPING MACHINE with automated circuit milling, etching, and hardware fabrication.";
  } else {
    displayDesc = event.description;
  }

  return `
    <div class="cyber-panel cyber-hud-bracket event-card cyber-popup ${staggerClass}" data-category="${event.category}" style="padding: 32px; display: flex; flex-direction: column; justify-content: space-between; min-height: 320px;">
      
      <div>
        <!-- Top Badges Row -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <span class="cyber-badge" style="font-size: 0.7rem;">${event.categoryBadge}</span>
          <span class="cyber-badge-cyan" style="font-size: 0.7rem; font-weight: 900;">PRIZE: ${event.prizePool}</span>
        </div>

        <!-- Title & Tagline -->
        <h3 style="font-family: var(--font-cyber); font-size: 1.4rem; font-weight: 900; color: #fff; margin-bottom: 8px; line-height: 1.25;">
          ${event.title}
        </h3>
        <p style="color: var(--pink-accent); font-family: var(--font-mono); font-size: 0.8rem; font-weight: 600; margin-bottom: 14px;">
          ${event.tagline}
        </p>

        <!-- Brief Description -->
        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.55; margin-bottom: 20px;">
          ${displayDesc}
        </p>
      </div>

      <!-- Card Metadata & Action Buttons -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid rgba(255, 42, 133, 0.15); margin-bottom: 16px; font-size: 0.78rem;">
          <span style="font-family: var(--font-mono); color: var(--text-muted);">${event.day} // ${event.timing.split('-')[1]?.trim() || event.timing}</span>
          <span style="font-family: var(--font-mono); color: var(--neon-cyan); font-weight: 700;">${event.teamSize}</span>
        </div>

        <div style="display: flex; gap: 10px;">
          <button class="btn-cyber-primary view-event-btn" data-event-id="${event.id}" style="flex: 1; justify-content: center; padding: 10px 14px; font-size: 0.72rem;">
            DETAILS & RULES
          </button>
        </div>
      </div>

    </div>
  `;
}

