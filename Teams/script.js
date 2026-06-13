/* ============================================================
   Northfield University — Sports Teams Directory
   script.js
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════
   DATA — 24 teams
══════════════════════════════════════════ */
const ALL_TEAMS = [
  { id:1,  name:"Men's Football",     sport:"Football",     dept:"Kinesiology",        icon:"⚽", captain:"Daniel Hughes",   players:22, w:12, l:3, d:2 },
  { id:2,  name:"Men's Basketball",   sport:"Basketball",   dept:"Kinesiology",        icon:"🏀", captain:"James Carter",    players:16, w:10, l:4, d:1 },
  { id:3,  name:"Women's Volleyball", sport:"Volleyball",   dept:"Kinesiology",        icon:"🏐", captain:"Olivia Bennett",  players:14, w:11, l:2, d:1 },
  { id:4,  name:"Men's Cricket",      sport:"Cricket",      dept:"Physical Education", icon:"🏏", captain:"Ethan Clarke",    players:18, w:9,  l:5, d:0 },
  { id:5,  name:"Women's Hockey",     sport:"Hockey",       dept:"Kinesiology",        icon:"🏑", captain:"Sophie Anderson", players:20, w:8,  l:6, d:1 },
  { id:6,  name:"Men's Swimming",     sport:"Swimming",     dept:"Kinesiology",        icon:"🏊", captain:"Liam Anderson",   players:12, w:13, l:1, d:0 },
  { id:7,  name:"Track & Field",      sport:"Track & Field",dept:"Kinesiology",        icon:"🏃", captain:"Noah Evans",      players:28, w:15, l:0, d:0 },
  { id:8,  name:"Men's Rugby",        sport:"Rugby",        dept:"Physical Education", icon:"🏉", captain:"William Turner",  players:24, w:7,  l:6, d:1 },
  { id:9,  name:"Women's Tennis",     sport:"Tennis",       dept:"Kinesiology",        icon:"🎾", captain:"Isabella Green",  players:10, w:9,  l:3, d:0 },
  { id:10, name:"Badminton",          sport:"Badminton",    dept:"Physical Education", icon:"🏸", captain:"Mason White",     players:16, w:6,  l:4, d:1 },
  { id:11, name:"Table Tennis",       sport:"Table Tennis", dept:"Physical Education", icon:"🏓", captain:"Lucas Scott",     players:10, w:7,  l:2, d:1 },
  { id:12, name:"Golf",               sport:"Golf",         dept:"Management Studies", icon:"⛳", captain:"Benjamin Lee",    players:8,  w:5,  l:2, d:1 },
  { id:13, name:"Women's Football",   sport:"Football",     dept:"Kinesiology",        icon:"⚽", captain:"Emma Davis",      players:18, w:10, l:3, d:2 },
  { id:14, name:"Men's Volleyball",   sport:"Volleyball",   dept:"Kinesiology",        icon:"🏐", captain:"Ryan Mitchell",   players:14, w:8,  l:4, d:0 },
  { id:15, name:"Women's Cricket",    sport:"Cricket",      dept:"Physical Education", icon:"🏏", captain:"Priya Singh",     players:16, w:11, l:2, d:1 },
  { id:16, name:"Men's Tennis",       sport:"Tennis",       dept:"Kinesiology",        icon:"🎾", captain:"Alex Morgan",     players:12, w:9,  l:4, d:0 },
  { id:17, name:"Women's Basketball", sport:"Basketball",   dept:"Kinesiology",        icon:"🏀", captain:"Sarah Johnson",   players:15, w:8,  l:5, d:1 },
  { id:18, name:"Men's Hockey",       sport:"Hockey",       dept:"Physical Education", icon:"🏑", captain:"Tom Harris",      players:22, w:6,  l:7, d:1 },
  { id:19, name:"Swimming Club",      sport:"Swimming",     dept:"Kinesiology",        icon:"🏊", captain:"Zoe Wilson",      players:20, w:12, l:2, d:0 },
  { id:20, name:"Athletics Team",     sport:"Track & Field",dept:"Physical Education", icon:"🏃", captain:"Jake Brown",      players:30, w:14, l:1, d:0 },
  { id:21, name:"Women's Rugby",      sport:"Rugby",        dept:"Physical Education", icon:"🏉", captain:"Grace Taylor",    players:22, w:5,  l:8, d:1 },
  { id:22, name:"Mixed Badminton",    sport:"Badminton",    dept:"Kinesiology",        icon:"🏸", captain:"Sam Chen",        players:14, w:8,  l:3, d:1 },
  { id:23, name:"Chess Club",         sport:"Table Tennis", dept:"Computer Science",   icon:"♟",  captain:"Aiden Kumar",     players:24, w:16, l:1, d:0 },
  { id:24, name:"Golf Academy",       sport:"Golf",         dept:"Management Studies", icon:"⛳", captain:"Charlotte Reed",  players:6,  w:4,  l:3, d:0 },
];

const PER_PAGE = 12;

/* ── State ── */
const state = {
  search:    '',
  sport:     '',
  dept:      '',
  sort:      'name-asc',
  viewMode:  'grid',   // 'grid' | 'list'
  page:      1,
  filtered:  [],
};


/* ══════════════════════════════════════════
   FILTER + SORT
══════════════════════════════════════════ */
function applyFilters() {
  let data = [...ALL_TEAMS];

  // Search
  if (state.search) {
    const q = state.search.toLowerCase();
    data = data.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.captain.toLowerCase().includes(q)
    );
  }

  // Sport
  if (state.sport) {
    data = data.filter(t => t.sport === state.sport);
  }

  // Department
  if (state.dept) {
    data = data.filter(t => t.dept === state.dept);
  }

  // Sort
  data.sort((a, b) => {
    switch (state.sort) {
      case 'name-asc':     return a.name.localeCompare(b.name);
      case 'name-desc':    return b.name.localeCompare(a.name);
      case 'players-desc': return b.players - a.players;
      case 'wins-desc':    return b.w - a.w;
      default: return 0;
    }
  });

  state.filtered = data;
  state.page = 1;
  render();
}


/* ══════════════════════════════════════════
   RENDER CARDS
══════════════════════════════════════════ */
function formatRecord(t) {
  return `<span class="record-w">${t.w}W</span> / <span class="record-l">${t.l}L</span> / <span class="record-d">${t.d}D</span>`;
}

function deptLabel(dept) {
  const map = {
    'Kinesiology':        'Department of Kinesiology',
    'Physical Education': 'Department of Physical Education',
    'Management Studies': 'Department of Management Studies',
    'Computer Science':   'Department of Computer Science',
  };
  return map[dept] || dept;
}

function render() {
  const grid      = document.getElementById('teamsGrid');
  const empty     = document.getElementById('emptyState');
  const showText  = document.getElementById('showingText');
  const pagWrap   = document.getElementById('paginationWrap');

  const total  = state.filtered.length;
  const start  = (state.page - 1) * PER_PAGE;
  const end    = Math.min(start + PER_PAGE, total);
  const page   = state.filtered.slice(start, end);

  // Showing text
  showText.textContent = total === 0
    ? 'No teams found'
    : `Showing ${start + 1}–${end} of ${total} team${total !== 1 ? 's' : ''}`;

  // Empty state
  if (total === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    pagWrap.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  pagWrap.style.display = 'flex';

  // Cards
  grid.className = 'teams-grid' + (state.viewMode === 'list' ? ' list-view' : '');
  grid.innerHTML = page.map(t => `
    <div class="team-card" data-id="${t.id}">
      <div class="card-top">
        <div class="sport-icon-wrap">${t.icon}</div>
        <div class="card-info">
          <div class="card-name">${t.name}</div>
          <div class="card-dept">${deptLabel(t.dept)}</div>
        </div>
      </div>
      <div class="card-divider"></div>
      <div class="card-stats">
        <div class="stat-col">
          <div class="stat-label">Captain</div>
          <div class="stat-val">${t.captain}</div>
        </div>
        <div class="stat-col">
          <div class="stat-label">Players</div>
          <div class="stat-val">${t.players}</div>
        </div>
        <div class="stat-col">
          <div class="stat-label">Record</div>
          <div class="stat-val record">${formatRecord(t)}</div>
        </div>
      </div>
    </div>
  `).join('');

  // Card click → highlight
  grid.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => {
      grid.querySelectorAll('.team-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  renderPagination(total);
}


/* ══════════════════════════════════════════
   PAGINATION
══════════════════════════════════════════ */
function renderPagination(total) {
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const pag = document.getElementById('pagination');
  pag.innerHTML = '';

  // Prev
  const prev = makePageBtn('‹ Prev', state.page === 1, false, true);
  prev.addEventListener('click', () => { if (state.page > 1) { state.page--; render(); } });
  pag.appendChild(prev);

  // Page numbers
  getPageRange(state.page, totalPages).forEach(p => {
    if (p === '…') {
      const dots = makePageBtn('…', true, false, false);
      dots.classList.add('dots');
      pag.appendChild(dots);
    } else {
      const btn = makePageBtn(p, false, p === state.page, false);
      btn.addEventListener('click', () => { state.page = p; render(); });
      pag.appendChild(btn);
    }
  });

  // Next
  const next = makePageBtn('Next ›', state.page === totalPages, false, true);
  next.addEventListener('click', () => {
    if (state.page < totalPages) { state.page++; render(); }
  });
  pag.appendChild(next);
}

function makePageBtn(label, disabled, active, isNav) {
  const btn = document.createElement('button');
  btn.className = 'page-btn' + (active ? ' active' : '') + (isNav ? ' nav-page-btn' : '');
  btn.textContent = label;
  btn.disabled = disabled;
  return btn;
}

function getPageRange(cur, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (cur <= 4)  return [1, 2, 3, 4, 5, '…', total];
  if (cur >= total - 3) return [1, '…', total-4, total-3, total-2, total-1, total];
  return [1, '…', cur-1, cur, cur+1, '…', total];
}


/* ══════════════════════════════════════════
   EVENT LISTENERS
══════════════════════════════════════════ */
function initControls() {
  // Search (debounced)
  let searchTimer;
  document.getElementById('searchInput').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.search = e.target.value.trim();
      applyFilters();
    }, 260);
  });

  // Sport filter
  document.getElementById('sportFilter').addEventListener('change', e => {
    state.sport = e.target.value;
    applyFilters();
  });

  // Dept filter
  document.getElementById('deptFilter').addEventListener('change', e => {
    state.dept = e.target.value;
    applyFilters();
  });

  // Sort
  document.getElementById('sortSelect').addEventListener('change', e => {
    state.sort = e.target.value;
    applyFilters();
  });

  // Clear
  document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('sportFilter').value = '';
    document.getElementById('deptFilter').value  = '';
    document.getElementById('sortSelect').value  = 'name-asc';
    state.search = ''; state.sport = ''; state.dept = ''; state.sort = 'name-asc';
    applyFilters();
  });

  // View toggle
  document.getElementById('gridViewBtn').addEventListener('click', () => {
    state.viewMode = 'grid';
    document.getElementById('gridViewBtn').classList.add('active');
    document.getElementById('listViewBtn').classList.remove('active');
    render();
  });
  document.getElementById('listViewBtn').addEventListener('click', () => {
    state.viewMode = 'list';
    document.getElementById('listViewBtn').classList.add('active');
    document.getElementById('gridViewBtn').classList.remove('active');
    render();
  });
}


/* ══════════════════════════════════════════
   HAMBURGER
══════════════════════════════════════════ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
  });

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
}


/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initControls();
  initHamburger();
  applyFilters(); // initial render
});