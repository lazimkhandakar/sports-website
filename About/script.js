/* ── script.js ── */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────
     1. HAMBURGER / MOBILE MENU
  ───────────────────────────── */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });


  /* ─────────────────────────────
     2. SEARCH BAR TOGGLE
  ───────────────────────────── */
  const searchIcon  = document.getElementById('searchIcon');
  const searchBar   = document.getElementById('searchBar');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');

  searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open')) {
      searchInput.focus();
    }
  });

  searchClose.addEventListener('click', () => {
    searchBar.classList.remove('open');
    searchInput.value = '';
  });

  // Close search on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchBar.classList.contains('open')) {
      searchBar.classList.remove('open');
      searchInput.value = '';
    }
  });


  /* ─────────────────────────────
     3. BACK TO TOP BUTTON
  ───────────────────────────── */
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ─────────────────────────────
     4. INTERSECTION OBSERVER
        — fade-in elements
        — timeline items
  ───────────────────────────── */
  const fadeEls = document.querySelectorAll('.fade-in');
  const timelineItems = document.querySelectorAll('.timeline-item');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings in the same parent
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.fade-in'));
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => fadeObserver.observe(el));

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const items = Array.from(document.querySelectorAll('.timeline-item'));
        const idx = items.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 120);
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  timelineItems.forEach(item => timelineObserver.observe(item));


  /* ─────────────────────────────
     5. ANIMATED STAT COUNTERS
  ───────────────────────────── */
  const statItems = document.querySelectorAll('.stat-item');

  function animateCount(el, target, duration = 1400) {
    let start = null;
    const countEl = el.querySelector('.count');
    if (!countEl) return;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      countEl.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        countEl.textContent = target;
      }
    }
    requestAnimationFrame(step);
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target, 10);
        if (!isNaN(target)) {
          animateCount(entry.target, target);
        }
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statItems.forEach(item => statObserver.observe(item));


  /* ─────────────────────────────
     6. CONTACT FORM SUBMISSION
  ───────────────────────────── */
  const submitBtn   = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');
  const formName    = document.getElementById('formName');
  const formEmail   = document.getElementById('formEmail');
  const formSubject = document.getElementById('formSubject');
  const formMessage = document.getElementById('formMessage');

  submitBtn.addEventListener('click', () => {
    // Basic validation
    const name    = formName.value.trim();
    const email   = formEmail.value.trim();
    const subject = formSubject.value;
    const message = formMessage.value.trim();

    clearErrors();

    let valid = true;

    if (!name) {
      showError(formName, 'Please enter your full name.');
      valid = false;
    }
    if (!email || !isValidEmail(email)) {
      showError(formEmail, 'Please enter a valid email address.');
      valid = false;
    }
    if (!subject) {
      showError(formSubject, 'Please select a subject.');
      valid = false;
    }
    if (!message || message.length < 10) {
      showError(formMessage, 'Please enter a message (min 10 characters).');
      valid = false;
    }

    if (!valid) return;

    // Simulate submit
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(() => {
      formSuccess.classList.add('show');
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      formName.value    = '';
      formEmail.value   = '';
      formSubject.value = '';
      formMessage.value = '';
    }, 1200);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(field, msg) {
    field.style.borderColor = '#EF4444';
    field.style.boxShadow   = '0 0 0 3px rgba(239,68,68,0.12)';
    const err = document.createElement('span');
    err.className = 'field-error';
    err.style.cssText = 'font-size:12px;color:#EF4444;margin-top:4px;';
    err.textContent = msg;
    field.parentElement.appendChild(err);
  }

  function clearErrors() {
    document.querySelectorAll('.field-error').forEach(e => e.remove());
    [formName, formEmail, formSubject, formMessage].forEach(f => {
      f.style.borderColor = '';
      f.style.boxShadow   = '';
    });
    formSuccess.classList.remove('show');
  }

  // Live clear error on input
  [formName, formEmail, formSubject, formMessage].forEach(f => {
    f.addEventListener('input', () => {
      f.style.borderColor = '';
      f.style.boxShadow   = '';
      const err = f.parentElement.querySelector('.field-error');
      if (err) err.remove();
    });
  });


  /* ─────────────────────────────
     7. SMOOTH NAV HIGHLIGHT
        on scroll (section spy)
  ───────────────────────────── */
  // (Lightweight — just keeps the nav active state visual)
  // No sections have IDs mapped to nav in this demo, so this is a no-op
  // placeholder ready for future wiring.

});
