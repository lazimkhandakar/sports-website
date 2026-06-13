/* ============================================================
   Northfield University — Admin Dashboard
   script.js
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const FIXTURES = [
  { date:'18 May 2024', time:'3:00 PM',  sport:'Football',   sportIcon:'⚽', matchA:'Northfield University', matchB:'Westbridge College',   venue:'Northfield Stadium'  },
  { date:'19 May 2024', time:'11:00 AM', sport:'Basketball', sportIcon:'🏀', matchA:'Northfield University', matchB:'Riverdale University', venue:'Indoor Sports Hall'  },
  { date:'20 May 2024', time:'2:00 PM',  sport:'Volleyball', sportIcon:'🏐', matchA:'Northfield University', matchB:'Easton College',       venue:'Northfield Arena'    },
  { date:'21 May 2024', time:'10:00 AM', sport:'Cricket',    sportIcon:'🏏', matchA:'Northfield University', matchB:'Hillcrest College',    venue:'Cricket Ground'      },
  { date:'22 May 2024', time:'4:00 PM',  sport:'Hockey',     sportIcon:'🏑', matchA:'Northfield University', matchB:'Brookfield College',  venue:'Hockey Field'        },
];

const PLAYERS = [
  { initials:'AR', name:'Alex Reed',      email:'alex.reed@northfield.edu',      sport:'Football',   sportIcon:'⚽', dept:'Department of Kinesiology',        date:'16 May 2024' },
  { initials:'JS', name:'Julia Smith',    email:'julia.smith@northfield.edu',    sport:'Basketball', sportIcon:'🏀', dept:'Department of Kinesiology',        date:'16 May 2024' },
  { initials:'MT', name:'Michael Turner', email:'michael.turner@northfield.edu', sport:'Cricket',    sportIcon:'🏏', dept:'Department of Physical Education', date:'15 May 2024' },
  { initials:'LP', name:'Liam Patel',     email:'liam.patel@northfield.edu',     sport:'Volleyball', sportIcon:'🏐', dept:'Department of Kinesiology',        date:'15 May 2024' },
  { initials:'SC', name:'Sophie Carter',  email:'sophie.carter@northfield.edu',  sport:'Hockey',     sportIcon:'🏑', dept:'Department of Physical Education', date:'14 May 2024' },
];

const STAT_CARDS = [
  { target: 512 },
  { target: 18  },
  { target: 12  },
  { target: 8   },
];


/* ══════════════════════════════════════════
   RENDER FIXTURES TABLE
══════════════════════════════════════════ */
function renderFixtures() {
  const tbody = document.querySelector('#fixturesTable tbody');
  if (!tbody) return;

  tbody.innerHTML = FIXTURES.map(f => `
    <tr>
      <td>
        <div class="td-date-main">${f.date}</div>
        <div class="td-date-sub">${f.time}</div>
      </td>
      <td>
        <div class="td-sport">
          <span class="sport-emoji">${f.sportIcon}</span>
          ${f.sport}
        </div>
      </td>
      <td>
        <div class="td-fixture-main">${f.matchA}</div>
        <div class="td-fixture-sub">vs ${f.matchB}</div>
      </td>
      <td>${f.venue}</td>
      <td>
        <button class="view-btn" onclick="alert('Viewing: ${f.matchA} vs ${f.matchB}')">View</button>
      </td>
    </tr>
  `).join('');
}


/* ══════════════════════════════════════════
   RENDER PLAYERS TABLE
══════════════════════════════════════════ */
function renderPlayers() {
  const tbody = document.querySelector('#playersTable tbody');
  if (!tbody) return;

  tbody.innerHTML = PLAYERS.map(p => `
    <tr>
      <td>
        <div class="td-player">
          <div class="player-avatar">${p.initials}</div>
          <div>
            <div class="player-name">${p.name}</div>
            <div class="player-email">${p.email}</div>
          </div>
        </div>
      </td>
      <td>
        <div class="td-sport">
          <span class="sport-emoji">${p.sportIcon}</span>
          ${p.sport}
        </div>
      </td>
      <td>
        <div style="font-size:12.5px;color:var(--text-2);line-height:1.4">${p.dept}</div>
      </td>
      <td style="font-size:12.5px;color:var(--text-3);white-space:nowrap">${p.date}</td>
    </tr>
  `).join('');
}


/* ══════════════════════════════════════════
   STAT COUNTER ANIMATION
══════════════════════════════════════════ */
function animateCounters() {
  const els = document.querySelectorAll('.sc-num[data-target]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const dur    = 900;
      const start  = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / dur, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });

  els.forEach(el => observer.observe(el));
}


/* ══════════════════════════════════════════
   SIDEBAR TOGGLE (mobile)
══════════════════════════════════════════ */
function initSidebarToggle() {
  const sidebar  = document.getElementById('sidebar');
  const toggle   = document.getElementById('sidebarToggle');
  if (!sidebar || !toggle) return;

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  overlay.addEventListener('click', closeSidebar);

  // Close on nav link click (mobile)
  sidebar.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) closeSidebar();
    });
  });
}


/* ══════════════════════════════════════════
   ACTIVE NAV ITEM
══════════════════════════════════════════ */
function initNavItems() {
  const items = document.querySelectorAll('.nav-item');
  items.forEach(item => {
    item.addEventListener('click', function () {
      items.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
}


/* ══════════════════════════════════════════
   USER CHEVRON
══════════════════════════════════════════ */
function initUserMenu() {
  const chevron = document.getElementById('userChevron');
  if (!chevron) return;
  chevron.addEventListener('click', () => {
    chevron.classList.toggle('open');
  });
}


/* ══════════════════════════════════════════
   NOTIFICATION BUTTON
══════════════════════════════════════════ */
function initNotifications() {
  const btn = document.getElementById('notifBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    alert('Notifications:\n• New player registered: Alex Reed\n• Fixture updated: 20 May 2024\n• System update available');
  });
}


/* ══════════════════════════════════════════
   SEASON SELECT
══════════════════════════════════════════ */
function initSeasonSelect() {
  const sel = document.getElementById('seasonSelect');
  if (!sel) return;

  sel.addEventListener('change', () => {
    const season = sel.options[sel.selectedIndex].text;
    const title = document.querySelector('.topbar-sub');
    if (title) title.textContent = `Showing data for ${season}.`;
  });
}


/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderFixtures();
  renderPlayers();
  animateCounters();
  initSidebarToggle();
  initNavItems();
  initUserMenu();
  initNotifications();
  initSeasonSelect();
});