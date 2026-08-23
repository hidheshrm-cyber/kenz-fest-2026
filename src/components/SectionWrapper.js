export function renderSectionWrapper({ id, title, subtitle, content, bgImage }) {
  const bgStyle = bgImage 
    ? `background: linear-gradient(180deg, rgba(5, 3, 8, 0.92) 0%, rgba(9, 5, 14, 0.88) 50%, rgba(5, 3, 8, 0.95) 100%), url('${bgImage}') center/cover no-repeat;`
    : '';

  return `
    <section id="${id}" class="reveal-on-scroll" style="padding: 100px 0; position: relative; ${bgStyle}">
      <div class="container">
        ${title ? `
          <div style="text-align: center; margin-bottom: 60px;">
            <h2 style="font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 900; letter-spacing: 3px; margin-bottom: 12px;" class="gradient-text-pink">
              ${title}
            </h2>
            ${subtitle ? `<p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto;">${subtitle}</p>` : ''}
            <div style="width: 80px; height: 3px; background: linear-gradient(90deg, transparent, var(--neon-pink), transparent); margin: 20px auto 0;"></div>
          </div>
        ` : ''}
        ${content}
      </div>
    </section>
  `;
}
