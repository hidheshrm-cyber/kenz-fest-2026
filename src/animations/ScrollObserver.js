export class ScrollObserver {
  constructor(selector = '.cyber-popup, .cyber-popup-scale, .reveal-on-scroll', options = {}) {
    this.selector = selector;
    this.options = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
      ...options
    };
    this.observer = null;
    this.init();
  }

  init() {
    this.elements = document.querySelectorAll(this.selector);

    if (!('IntersectionObserver' in window)) {
      this.elements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // If scrolled out of view by a lot, reset so it can pop up again on scroll
          const rect = entry.target.getBoundingClientRect();
          if (rect.top > window.innerHeight) {
            entry.target.classList.remove('is-visible');
          }
        }
      });
    }, this.options);

    this.elements.forEach(el => this.observer.observe(el));
  }

  refresh() {
    if (this.observer) {
      this.elements = document.querySelectorAll(this.selector);
      this.elements.forEach(el => this.observer.observe(el));
    }
  }
}
