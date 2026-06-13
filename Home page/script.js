/* ============================================================
   Northfield University — Homepage
   script.js
   ============================================================ */

'use strict';


/* ── HAMBURGER MENU ── */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });

  // Close on nav link click (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}


/* ── ACTIVE NAV ON SCROLL ── */
function initNavHighlight() {
  const links = document.querySelectorAll('.nav-links a');

  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}


/* ── SEARCH (placeholder) ── */
function initSearch() {
  const btn = document.getElementById('searchBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    // TODO: Replace with a real search modal
    const query = prompt('Search Northfield University Sports:');
    if (query && query.trim()) {
      alert(`Searching for: "${query.trim()}"\n(Search module coming soon)`);
    }
  });
}


/* ── FEATURE CARD: Scroll-in animation ── */
function initCardAnimation() {
  const cards = document.querySelectorAll('.feature-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity    = '1';
          entry.target.style.transform  = 'translateY(0)';
        }, i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.45s ease, transform 0.45s ease, box-shadow 0.2s ease';
    observer.observe(card);
  });
}


/* ── LIVE SCORE TICKER (card 3) ── */
function initScoreTicker() {
  const scores = [
    { home: 2, away: 1 },
    { home: 0, away: 0 },
    { home: 3, away: 2 },
    { home: 1, away: 1 },
  ];

  const sbScore = document.querySelector('.sb-score');
  if (!sbScore) return;

  let idx = 0;

  setInterval(() => {
    idx = (idx + 1) % scores.length;
    sbScore.style.opacity = '0';
    sbScore.style.transform = 'scale(0.85)';

    setTimeout(() => {
      const s = scores[idx];
      sbScore.textContent = `${s.home} : ${s.away}`;
      sbScore.style.opacity = '1';
      sbScore.style.transform = 'scale(1)';
    }, 300);
  }, 3000);

  sbScore.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}


/* ── NAVBAR SCROLL SHADOW ── */
function initNavShadow() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.35)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }, { passive: true });
}


/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
  initNavHighlight();
  initSearch();
  initCardAnimation();
  initScoreTicker();
  initNavShadow();
});