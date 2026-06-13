/* ============================================================
   Northfield University — Player Profile Page
   script.js
   ============================================================ */

'use strict';

/* ── TAB SWITCHING ── */
function initTabs() {
  const tabBtns  = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function activateTab(tabId) {
    // Update buttons
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Update panels
    tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === 'tab-' + tabId);
    });
  }

  // Tab button clicks
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });

  // "View Full Match History" button inside stats tab
  const viewHistoryBtn = document.querySelector('.view-history-btn');
  if (viewHistoryBtn) {
    viewHistoryBtn.addEventListener('click', () => {
      activateTab(viewHistoryBtn.dataset.tab);
      // Scroll to top of content
      document.querySelector('.tabs-bar').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}


/* ── ACTIVE NAV LINK ── */
function initNavActiveLink() {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}


/* ── SEARCH BUTTON (placeholder for future search modal) ── */
function initSearch() {
  const searchBtn = document.getElementById('searchBtn');
  if (!searchBtn) return;

  searchBtn.addEventListener('click', () => {
    // Placeholder — wire up a search modal here later
    alert('Search functionality coming soon!');
  });
}


/* ── STAT TABLE: Highlight hovered row ── */
function initTableHighlight() {
  const tables = document.querySelectorAll('.stats-table, .match-table');
  tables.forEach(table => {
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      row.addEventListener('mouseenter', () => row.classList.add('hovered'));
      row.addEventListener('mouseleave', () => row.classList.remove('hovered'));
    });
  });
}


/* ── BREAKDOWN COUNTER ANIMATION ── */
function animateCounters() {
  const nums = document.querySelectorAll('.bd-num');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const final = parseFloat(el.textContent);
      const isFloat = el.textContent.includes('.');
      const duration = 800;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current  = final * eased;
        el.textContent = isFloat ? current.toFixed(2) : Math.round(current);
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });

  nums.forEach(el => observer.observe(el));
}


/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initNavActiveLink();
  initSearch();
  initTableHighlight();
  animateCounters();
});