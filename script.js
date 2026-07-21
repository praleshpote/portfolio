document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.header nav');

  if (menu) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', open);
    });
    
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Dynamic Copyright Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Scroll Reveal Animations
  const observerOptions = { threshold: 0.12 };
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.animate([
          { opacity: 0, transform: 'translateY(30px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], {
          duration: 700,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          fill: 'forwards'
        });
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('section article, .section-title, .intro-text, .resume-copy, .resume-paper').forEach(el => {
    el.style.opacity = '0';
    revealObserver.observe(el);
  });

  // Animated Counter Metrics
  const counters = document.querySelectorAll('[data-count]');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-count'), 10);
        let current = 0;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / countTo));

        const timer = setInterval(() => {
          current += 1;
          target.textContent = current + '+';
          if (current >= countTo) {
            target.textContent = countTo + '+';
            clearInterval(timer);
          }
        }, stepTime);

        counterObserver.unobserve(target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => counterObserver.observe(counter));
});
