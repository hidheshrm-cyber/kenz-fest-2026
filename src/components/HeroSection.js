import { FEST_CONFIG } from '../config/festConfig.js';

export function renderHeroSection() {
  return `
    <section id="hero" class="hero-section">
      <!-- Background Video with Pink Panther Mascot -->
      <video class="hero-video-bg" autoplay muted loop playsinline preload="metadata">
        <source src="${FEST_CONFIG.mascot.videoBg}" type="video/mp4">
        <!-- Fallback poster image if video unsupported -->
        <img src="${FEST_CONFIG.mascot.heroImage}" alt="Pink Panther Mascot Cyber City" style="width: 100%; height: 100%; object-fit: cover;">
      </video>

      <!-- Cinematic Gradient Overlay: Dark on left for readability, subtle on right for character reveal -->
      <div class="hero-gradient-overlay"></div>

      <!-- 360° Indicator Ring Badge -->
      <div class="rotate-badge-container">
        <div class="rotate-circle-ring">360°</div>
        <div>
          <span style="display: block; color: var(--neon-pink); font-size: 0.65rem; font-weight: 700;">CINEMATIC SHOWCASE</span>
          <span style="letter-spacing: 1px;">ROTATE & EXPLORE</span>
        </div>
      </div>

      <!-- Main Content Container -->
      <div class="hero-content-wrapper">
        <div class="container">
          <div style="max-width: 650px;">
            
            <!-- Date & Venue Badge -->
            <div class="reveal-on-scroll" style="display: inline-flex; align-items: center; gap: 10px; padding: 6px 18px; border-radius: 20px; background: var(--neon-pink-subtle); border: 1px solid var(--border-subtle); color: var(--neon-pink); font-family: var(--font-heading); font-size: 0.75rem; font-weight: 700; letter-spacing: 2px; margin-bottom: 24px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              <span>${FEST_CONFIG.dates}</span>
            </div>

            <!-- Title -->
            <h1 class="reveal-on-scroll gradient-text-pink" style="font-family: var(--font-heading); font-size: clamp(2.6rem, 6.5vw, 5.2rem); font-weight: 900; line-height: 1.02; letter-spacing: -2px; margin-bottom: 20px;">
              ${FEST_CONFIG.name}
            </h1>

            <!-- Subtitle / Tagline -->
            <p class="reveal-on-scroll" style="font-size: clamp(1rem, 2vw, 1.25rem); color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px; font-weight: 500;">
              INNOVATE • CREATE • COMPETE
            </p>
            <p class="reveal-on-scroll" style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 36px;">
              A futuristic technology festival experience hosted by <strong style="color: #fff;">${FEST_CONFIG.venue}</strong>.
            </p>

            <!-- Action Buttons -->
            <div class="reveal-on-scroll" style="display: flex; gap: 16px; flex-wrap: wrap;">
              <a href="mailto:${FEST_CONFIG.contactEmail}" class="btn-neon">
                <span>REGISTER NOW</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#events" class="btn-outline">
                <span>EXPLORE EVENTS</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  `;
}
