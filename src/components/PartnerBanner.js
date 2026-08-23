export function renderPartnerBanner() {
  return `
    <section id="partner-banner" style="position: relative; z-index: 2; padding: 40px 0; background: var(--bg-dark); border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: center; gap: 30px;" class="cyber-popup stagger-1">
          
          <!-- Logo 1: Kenz Fest -->
          <div style="flex: 1; min-width: 200px; display: flex; justify-content: center; position: relative;">
            <img src="/assets/kenz_fest_logo.png" alt="Ken'z Fest Logo" style="max-height: 120px; object-fit: contain; filter: drop-shadow(0 0 10px rgba(255, 42, 133, 0.4));" onerror="this.style.opacity='0'" />
            <div style="position: absolute; right: -15px; top: 10%; height: 80%; width: 1px; background: rgba(255,255,255,0.1); display: none;" class="desktop-divider"></div>
          </div>
          
          <!-- Logo 2: KNCET -->
          <div style="flex: 1; min-width: 200px; display: flex; justify-content: center; position: relative; border-left: 1px solid rgba(255,255,255,0.2); border-right: 1px solid rgba(255,255,255,0.2);">
            <img src="/assets/kncet_college_logo.png" alt="KNCET Logo" style="max-height: 120px; object-fit: contain; filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.4));" onerror="this.style.opacity='0'" />
          </div>
          
          <!-- Logo 3: AICTE Idea Lab -->
          <div style="flex: 1; min-width: 200px; display: flex; justify-content: center; position: relative;">
            <div style="position: absolute; left: -15px; top: 10%; height: 80%; width: 1px; background: rgba(255,255,255,0.1); display: none;" class="desktop-divider"></div>
            <!-- NOTE: Using a placeholder path. User must upload aicte_idea_lab.png -->
            <img src="/assets/aicte_idea_lab.png" alt="AICTE IDEA Lab Logo" style="max-height: 120px; object-fit: contain; filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));" onerror="this.src='/assets/kenz_fest_logo.png'; this.style.opacity='0.2';" />
          </div>

        </div>
      </div>
    </section>
  `;
}
