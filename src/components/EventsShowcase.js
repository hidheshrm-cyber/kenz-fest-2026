import { FEST_EVENTS } from '../config/eventsData.js';
import { FEST_CONFIG } from '../config/festConfig.js';

export function renderEventsShowcase() {
  return `
    <section id="events" style="position: relative; padding: 120px 0; background: var(--bg-dark);">
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

