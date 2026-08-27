export function renderPartnerBanner() {
  return `
    <section id="partner-banner" style="position: relative; z-index: 2; padding: clamp(24px, 4vw, 40px) 0; background: var(--bg-dark); border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container" style="max-width: 1200px; padding: 0 16px;">
        <div class="partner-logos-grid cyber-popup stagger-1" style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: clamp(8px, 2vw, 30px); width: 100%;">
          
          <!-- Logo 1: KNCET (Left) -->
          <div class="partner-logo-item" style="flex: 1; min-width: 0; display: flex; justify-content: center; align-items: center;">
            <img src="/assets/kncet_college_logo.png" alt="KNCET Logo" class="partner-logo-img" style="max-height: clamp(48px, 12vw, 110px); max-width: 100%; width: auto; object-fit: contain; filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.4));" onerror="this.style.opacity='0'" />
          </div>
          
          <!-- Logo 2: Kenz Fest (Center) -->
          <div class="partner-logo-item partner-logo-divider" style="flex: 1; min-width: 0; display: flex; justify-content: center; align-items: center; border-left: 1px solid rgba(255,255,255,0.15); border-right: 1px solid rgba(255,255,255,0.15); padding: 0 clamp(6px, 1.5vw, 20px);">
            <img src="/assets/kenz_fest_logo.png" alt="Ken'z Fest Logo" class="partner-logo-img" style="max-height: clamp(48px, 12vw, 110px); max-width: 100%; width: auto; object-fit: contain; filter: drop-shadow(0 0 10px rgba(255, 42, 133, 0.4));" onerror="this.style.opacity='0'" />
          </div>
          
          <!-- Logo 3: AICTE Idea Lab (Right) -->
          <div class="partner-logo-item" style="flex: 1; min-width: 0; display: flex; justify-content: center; align-items: center;">
            <img src="/assets/aicte_idea_lab.png" alt="AICTE IDEA Lab Logo" class="partner-logo-img" style="max-height: clamp(48px, 12vw, 110px); max-width: 100%; width: auto; object-fit: contain; filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));" onerror="this.src='/assets/kenz_fest_logo.png'; this.style.opacity='0.2';" />
          </div>

        </div>
      </div>
    </section>
  `;
}
