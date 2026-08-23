export function renderEventModal() {
  return `
    <div id="event-modal-backdrop" class="cyber-modal-overlay">
      <div class="cyber-modal-container cyber-hud-bracket">
        
        <!-- Close Button -->
        <button id="modal-close-btn" style="position: absolute; top: 20px; right: 20px; width: 36px; height: 36px; border-radius: 50%; background: rgba(255, 42, 133, 0.15); border: 1px solid var(--neon-pink); color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <!-- Dynamic Body Content -->
        <div id="modal-body-content"></div>

      </div>
    </div>
  `;
}
