/* =============================================
   NUVED AHMAD — Portfolio JS
   Features:
   - Navbar scroll + active link tracking
   - Mobile toggle
   - Typing animation
   - Scroll reveal
   - Smooth scroll (offset for fixed nav)
   - Contact form feedback
============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTyping();
  initScrollReveal();
  initSmoothScroll();
  initActiveNav();
});


/* =============================================
   1. NAVBAR
============================================= */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // Mobile toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}


/* =============================================
   2. ACTIVE NAV LINK — highlight on scroll
============================================= */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navH = 64;

  function setActive() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - navH - 80;
      if (window.scrollY >= top) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
}


/* =============================================
   3. TYPING ANIMATION
============================================= */
function initTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;

  const phrases = [
    'AI & Backend Developer',
    'Spring Boot Engineer',
    'ML Systems Builder',
    'Fresher · Open to Work',
    'DSA Enthusiast',
  ];

  let pi = 0, ci = 0, deleting = false;

  function tick() {
    const phrase = phrases[pi];
    el.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);

    if (!deleting && ci > phrase.length) {
      setTimeout(() => { deleting = true; tick(); }, 1800);
      return;
    }
    if (deleting && ci < 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      setTimeout(tick, 400);
      return;
    }
    setTimeout(tick, deleting ? 32 : 62);
  }

  tick();
}


/* =============================================
   4. SCROLL REVEAL
============================================= */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Stagger siblings in grids
  const grids = document.querySelectorAll(
    '.about-grid, .skills-grid, .projects-grid, .exp-grid, .contact-grid, .about-right'
  );
  grids.forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${i * 80}ms`;
    });
  });

  els.forEach(el => observer.observe(el));
}


/* =============================================
   5. SMOOTH SCROLL (offset for fixed navbar)
============================================= */
function initSmoothScroll() {
  const navH = 64;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}


/* =============================================
   6. CONTACT FORM SEND (UI feedback)
============================================= */
function handleSend() {
  const btn = document.getElementById('sendBtn');
  if (!btn) return;

  // Simple visual feedback (no backend)
  btn.textContent = '✓ Message Sent!';
  btn.style.background = 'var(--accent-3)';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    btn.style.background = '';
    btn.disabled = false;
  }, 3000);
}
