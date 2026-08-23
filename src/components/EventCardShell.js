export function renderEventCard(event) {
  return `
    <div class="glass-panel event-card" style="padding: 32px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; min-height: 260px; transition: transform 0.4s var(--ease-out-expo), border-color 0.4s ease, box-shadow 0.4s ease;">
      
      <!-- Top Neon Accent Line -->
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--neon-pink) 0%, var(--neon-purple) 100%);"></div>

      <div>
        <!-- Category Badge -->
        <div style="display: inline-block; padding: 4px 14px; border-radius: 20px; background: var(--neon-pink-subtle); border: 1px solid var(--border-subtle); font-size: 0.72rem; font-weight: 700; color: var(--neon-pink); letter-spacing: 1px; margin-bottom: 16px;">
          ${event.category || 'TECHNICAL'}
        </div>

        <!-- Title -->
        <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: #fff; letter-spacing: 1px; margin-bottom: 12px;">
          ${event.title}
        </h3>

        <!-- Description snippet -->
        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5; margin-bottom: 20px;">
          ${event.description}
        </p>
      </div>

      <!-- Card Footer info -->
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(255, 42, 133, 0.15); padding-top: 16px; font-size: 0.8rem; color: var(--text-muted);">
          <span style="font-family: var(--font-mono); color: var(--pink-light);">${event.timing || '28 & 29 AUG'}</span>
          <button class="btn-outline view-event-btn" data-event-id="${event.id}" style="padding: 8px 18px; font-size: 0.7rem; border-radius: 999px;">
            VIEW DETAILS
          </button>
        </div>
      </div>

    </div>
  `;
}
