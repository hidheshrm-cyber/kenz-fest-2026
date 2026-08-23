export class ParallaxController {
  constructor() {
    this.elements = document.querySelectorAll('[data-parallax]');
    this.init();
  }

  init() {
    if (!this.elements.length) return;
    this.addMouseParallax();
    this.addScrollParallax();
  }

  addMouseParallax() {
    window.addEventListener('mousemove', (e) => {
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

      this.elements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed') || '20');
        const moveX = mouseX * speed;
        const moveY = mouseY * speed;

        el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    });
  }

  addScrollParallax() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      this.elements.forEach(el => {
        if (el.hasAttribute('data-scroll-speed')) {
          const speed = parseFloat(el.getAttribute('data-scroll-speed') || '0.2');
          el.style.transform = `translateY(${scrolled * speed}px)`;
        }
      });
    });
  }
}
