import { FEST_CONFIG } from '../config/festConfig.js';

export function renderCountdownTimer() {
  return `
    <div id="countdown-wrapper" style="display: inline-flex; align-items: center; gap: 14px; flex-wrap: wrap; justify-content: center;">
      
      <div class="countdown-box cyber-hud-bracket">
        <div id="cd-days" class="countdown-digits">00</div>
        <div class="countdown-label">DAYS</div>
      </div>

      <div class="countdown-colon" style="color: var(--neon-pink);">:</div>

      <div class="countdown-box cyber-hud-bracket">
        <div id="cd-hours" class="countdown-digits">00</div>
        <div class="countdown-label">HOURS</div>
      </div>

      <div class="countdown-colon" style="color: var(--neon-cyan);">:</div>

      <div class="countdown-box cyber-hud-bracket">
        <div id="cd-minutes" class="countdown-digits">00</div>
        <div class="countdown-label">MINUTES</div>
      </div>

      <div class="countdown-colon" style="color: var(--neon-pink);">:</div>

      <div class="countdown-box cyber-hud-bracket">
        <div id="cd-seconds" class="countdown-digits">00</div>
        <div class="countdown-label">SECONDS</div>
      </div>

    </div>
  `;
}

export function initCountdown() {
  const targetDate = new Date(FEST_CONFIG.targetDate).getTime();

  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.innerText = '00';
      hoursEl.innerText = '00';
      minutesEl.innerText = '00';
      secondsEl.innerText = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
    minutesEl.innerText = String(minutes).padStart(2, '0');
    secondsEl.innerText = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}
