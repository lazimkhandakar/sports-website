/* ============================================================
   Northfield University — Fixtures Page
   script.js
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════
   DATA — 45 fixture rows
══════════════════════════════════════════ */
const ALL_FIXTURES = [
  { id:'NU2025M1001', sport:'Football',   teamA:'Computer Science',   teamB:'Mechanical Engg.',  date:'2025-05-20', time:'04:00 PM', venue:'Northfield Stadium',  status:'Upcoming'  },
  { id:'NU2025M1002', sport:'Cricket',    teamA:'Business Studies',   teamB:'Law Department',    date:'2025-05-21', time:'10:00 AM', venue:'Cricket Ground',      status:'Upcoming'  },
  { id:'NU2025M1003', sport:'Basketball', teamA:'Electronics',        teamB:'Civil Engineering', date:'2025-05-22', time:'02:30 PM', venue:'Indoor Sports Hall',  status:'Live'      },
  { id:'NU2025M1004', sport:'Badminton',  teamA:'Arts Faculty',       teamB:'Science Faculty',   date:'2025-05-23', time:'11:00 AM', venue:'Badminton Court',     status:'Upcoming'  },
  { id:'NU2025M1005', sport:'Tennis',     teamA:'MBA Department',     teamB:'Commerce',          date:'2025-05-24', time:'09:00 AM', venue:'Tennis Court',        status:'Upcoming'  },
  { id:'NU2025M1006', sport:'Football',   teamA:'Electrical Engg.',   teamB:'Information Tech',  date:'2025-05-25', time:'04:30 PM', venue:'Northfield Stadium',  status:'Completed' },
  { id:'NU2025M1007', sport:'Cricket',    teamA:'Hostel Team A',      teamB:'Hostel Team B',     date:'2025-05-26', time:'10:00 AM', venue:'Cricket Ground',      status:'Completed' },
  { id:'NU2025M1008', sport:'Basketball', teamA:'Team Alpha',         teamB:'Team Beta',         date:'2025-05-27', time:'03:00 PM', venue:'Indoor Sports Hall',  status:'Completed' },
  { id:'NU2025M1009', sport:'Badminton',  teamA:'Research Scholars',  teamB:'Faculty Team',      date:'2025-05-28', time:'11:30 AM', venue:'Badminton Court',     status:'Completed' },
  { id:'NU2025M1010', sport:'Tennis',     teamA:'Alumni Team',        teamB:'Students Team',     date:'2025-05-29', time:'09:30 AM', venue:'Tennis Court',        status:'Completed' },
  { id:'NU2025M1011', sport:'Football',   teamA:'Computer Science',   teamB:'Arts Faculty',      date:'2025-05-30', time:'03:00 PM', venue:'Northfield Stadium',  status:'Upcoming'  },
  { id:'NU2025M1012', sport:'Cricket',    teamA:'Mechanical Engg.',   teamB:'MBA Department',    date:'2025-05-31', time:'10:00 AM', venue:'Cricket Ground',      status:'Upcoming'  },
  { id:'NU2025M1013', sport:'Basketball', teamA:'Law Department',     teamB:'Commerce',          date:'2025-06-01', time:'02:00 PM', venue:'Indoor Sports Hall',  status:'Upcoming'  },
  { id:'NU2025M1014', sport:'Badminton',  teamA:'Computer Science',   teamB:'Electronics',       date:'2025-06-02', time:'11:00 AM', venue:'Badminton Court',     status:'Upcoming'  },
  { id:'NU2025M1015', sport:'Tennis',     teamA:'Business Studies',   teamB:'Civil Engineering', date:'2025-06-03', time:'09:00 AM', venue:'Tennis Court',        status:'Upcoming'  },
  { id:'NU2025M1016', sport:'Football',   teamA:'Information Tech',   teamB:'Science Faculty',   date:'2025-06-04', time:'04:00 PM', venue:'Northfield Stadium',  status:'Upcoming'  },
  { id:'NU2025M1017', sport:'Cricket',    teamA:'Arts Faculty',       teamB:'Hostel Team A',     date:'2025-06-05', time:'10:30 AM', venue:'Cricket Ground',      status:'Upcoming'  },
  { id:'NU2025M1018', sport:'Basketball', teamA:'MBA Department',     teamB:'Research Scholars', date:'2025-06-06', time:'03:30 PM', venue:'Indoor Sports Hall',  status:'Upcoming'  },
  { id:'NU2025M1019', sport:'Badminton',  teamA:'Faculty Team',       teamB:'Alumni Team',       date:'2025-06-07', time:'11:00 AM', venue:'Badminton Court',     status:'Upcoming'  },
  { id:'NU2025M1020', sport:'Tennis',     teamA:'Hostel Team B',      teamB:'Students Team',     date:'2025-06-08', time:'09:00 AM', venue:'Tennis Court',        status:'Upcoming'  },
  { id:'NU2025M1021', sport:'Football',   teamA:'Civil Engineering',  teamB:'Commerce',          date:'2025-06-09', time:'04:00 PM', venue:'Northfield Stadium',  status:'Upcoming'  },
  { id:'NU2025M1022', sport:'Cricket',    teamA:'Electronics',        teamB:'Information Tech',  date:'2025-06-10', time:'10:00 AM', venue:'Cricket Ground',      status:'Upcoming'  },
  { id:'NU2025M1023', sport:'Basketball', teamA:'Computer Science',   teamB:'Law Department',    date:'2025-06-11', time:'02:00 PM', venue:'Indoor Sports Hall',  status:'Upcoming'  },
  { id:'NU2025M1024', sport:'Badminton',  teamA:'Science Faculty',    teamB:'MBA Department',    date:'2025-06-12', time:'11:00 AM', venue:'Badminton Court',     status:'Upcoming'  },
  { id:'NU2025M1025', sport:'Tennis',     teamA:'Mechanical Engg.',   teamB:'Arts Faculty',      date:'2025-06-13', time:'09:30 AM', venue:'Tennis Court',        status:'Upcoming'  },
  { id:'NU2025M1026', sport:'Football',   teamA:'Business Studies',   teamB:'Hostel Team A',     date:'2025-06-14', time:'04:30 PM', venue:'Northfield Stadium',  status:'Upcoming'  },
  { id:'NU2025M1027', sport:'Cricket',    teamA:'Research Scholars',  teamB:'Faculty Team',      date:'2025-06-15', time:'10:00 AM', venue:'Cricket Ground',      status:'Upcoming'  },
  { id:'NU2025M1028', sport:'Basketball', teamA:'Alumni Team',        teamB:'Team Alpha',        date:'2025-06-16', time:'03:00 PM', venue:'Indoor Sports Hall',  status:'Upcoming'  },
  { id:'NU2025M1029', sport:'Badminton',  teamA:'Students Team',      teamB:'Commerce',          date:'2025-06-17', time:'11:00 AM', venue:'Badminton Court',     status:'Upcoming'  },
  { id:'NU2025M1030', sport:'Tennis',     teamA:'Information Tech',   teamB:'Civil Engineering', date:'2025-06-18', time:'09:00 AM', venue:'Tennis Court',        status:'Upcoming'  },
  { id:'NU2025M1031', sport:'Football',   teamA:'Electronics',        teamB:'Science Faculty',   date:'2025-06-19', time:'04:00 PM', venue:'Northfield Stadium',  status:'Upcoming'  },
  { id:'NU2025M1032', sport:'Cricket',    teamA:'MBA Department',     teamB:'Law Department',    date:'2025-06-20', time:'10:00 AM', venue:'Cricket Ground',      status:'Upcoming'  },
  { id:'NU2025M1033', sport:'Basketball', teamA:'Arts Faculty',       teamB:'Hostel Team B',     date:'2025-06-21', time:'02:30 PM', venue:'Indoor Sports Hall',  status:'Upcoming'  },
  { id:'NU2025M1034', sport:'Badminton',  teamA:'Computer Science',   teamB:'Research Scholars', date:'2025-06-22', time:'11:00 AM', venue:'Badminton Court',     status:'Upcoming'  },
  { id:'NU2025M1035', sport:'Tennis',     teamA:'Mechanical Engg.',   teamB:'Faculty Team',      date:'2025-06-23', time:'09:00 AM', venue:'Tennis Court',        status:'Upcoming'  },
  { id:'NU2025M1036', sport:'Football',   teamA:'Business Studies',   teamB:'Electronics',       date:'2025-06-24', time:'04:00 PM', venue:'Northfield Stadium',  status:'Upcoming'  },
  { id:'NU2025M1037', sport:'Cricket',    teamA:'Civil Engineering',  teamB:'Arts Faculty',      date:'2025-06-25', time:'10:00 AM', venue:'Cricket Ground',      status:'Upcoming'  },
  { id:'NU2025M1038', sport:'Basketball', teamA:'Commerce',           teamB:'Alumni Team',       date:'2025-06-26', time:'03:00 PM', venue:'Indoor Sports Hall',  status:'Upcoming'  },
  { id:'NU2025M1039', sport:'Badminton',  teamA:'Science Faculty',    teamB:'Students Team',     date:'2025-06-27', time:'11:00 AM', venue:'Badminton Court',     status:'Upcoming'  },
  { id:'NU2025M1040', sport:'Tennis',     teamA:'Information Tech',   teamB:'MBA Department',    date:'2025-06-28', time:'09:00 AM', venue:'Tennis Court',        status:'Upcoming'  },
  { id:'NU2025M1041', sport:'Football',   teamA:'Law Department',     teamB:'Hostel Team A',     date:'2025-06-29', time:'04:00 PM', venue:'Northfield Stadium',  status:'Upcoming'  },
  { id:'NU2025M1042', sport:'Cricket',    teamA:'Research Scholars',  teamB:'Team Alpha',        date:'2025-06-30', time:'10:00 AM', venue:'Cricket Ground',      status:'Upcoming'  },
  { id:'NU2025M1043', sport:'Basketball', teamA:'Faculty Team',       teamB:'Mechanical Engg.',  date:'2025-07-01', time:'02:00 PM', venue:'Indoor Sports Hall',  status:'Upcoming'  },
  { id:'NU2025M1044', sport:'Badminton',  teamA:'Business Studies',   teamB:'Electronics',       date:'2025-07-02', time:'11:00 AM', venue:'Badminton Court',     status:'Upcoming'  },
  { id:'NU2025M1045', sport:'Tennis',     teamA:'Arts Faculty',       teamB:'Civil Engineering', date:'2025-07-03', time:'09:00 AM', venue:'Tennis Court',        status:'Upcoming'  },
];

const SPORT_ICONS = {
  Football: '⚽', Cricket: '🏏', Basketball: '🏀',
  Badminton: '🏸', Tennis: '🎾'
};

const PER_PAGE = 10;

/* ── State ── */
let state = {
  activeSport:  'All Sports',
  checkedSports: ['Football', 'Cricket', 'Basketball', 'Badminton', 'Tennis'],
  fromDate:     '2025-05-20',
  toDate:       '2025-06-20',
  department:   '',
  page:         1,
  filtered:     [...ALL_FIXTURES],
};


/* ══════════════════════════════════════════
   FILTERING
══════════════════════════════════════════ */
function applyFilters() {
  let data = [...ALL_FIXTURES];

  // Sport tab
  if (state.activeSport !== 'All Sports') {
    data = data.filter(f => f.sport === state.activeSport);
  }

  // Sidebar checkboxes
  if (state.checkedSports.length < 5) {
    data = data.filter(f => state.checkedSports.includes(f.sport));
  }

  // Date range
  if (state.fromDate) data = data.filter(f => f.date >= state.fromDate);
  if (state.toDate)   data = data.filter(f => f.date <= state.toDate);

  // Department
  if (state.department) {
    data = data.filter(f =>
      f.teamA.toLowerCase().includes(state.department.toLowerCase()) ||
      f.teamB.toLowerCase().includes(state.department.toLowerCase())
    );
  }

  state.filtered = data;
  state.page = 1;
  renderTable();
  renderPagination();
}


/* ══════════════════════════════════════════
   RENDER TABLE
══════════════════════════════════════════ */
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' });
}

function statusClass(s) {
  if (s === 'Live')      return 'status-live';
  if (s === 'Completed') return 'status-completed';
  return 'status-upcoming';
}

function renderTable() {
  const tbody = document.getElementById('tableBody');
  const showingText = document.getElementById('showingText');
  const total = state.filtered.length;
  const start = (state.page - 1) * PER_PAGE;
  const end   = Math.min(start + PER_PAGE, total);
  const rows  = state.filtered.slice(start, end);

  showingText.textContent = total === 0
    ? 'No fixtures found'
    : `Showing ${start + 1} to ${end} of ${total} fixture${total !== 1 ? 's' : ''}`;

  if (rows.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9">
          <div class="empty-state">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
            <p>No fixtures match your filters. Try adjusting the criteria.</p>
          </div>
        </td>
      </tr>`;
    return;
  }

  tbody.innerHTML = rows.map(f => `
    <tr>
      <td class="match-id">${f.id}</td>
      <td>
        <div class="sport-cell">
          <span class="sport-emoji">${SPORT_ICONS[f.sport] || '🏅'}</span>
          ${f.sport}
        </div>
      </td>
      <td class="team-a">${f.teamA}</td>
      <td style="text-align:center"><span class="vs-badge">vs</span></td>
      <td class="team-b">${f.teamB}</td>
      <td>${formatDate(f.date)}</td>
      <td>${f.time}</td>
      <td>${f.venue}</td>
      <td><span class="status-badge ${statusClass(f.status)}">${f.status}</span></td>
    </tr>
  `).join('');
}


/* ══════════════════════════════════════════
   PAGINATION
══════════════════════════════════════════ */
function renderPagination() {
  const total = state.filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const pagination = document.getElementById('pagination');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.disabled = state.page === 1;
  nextBtn.disabled = state.page === totalPages;

  // Remove old page number buttons
  pagination.querySelectorAll('.page-num-btn').forEach(b => b.remove());

  // Build page numbers (show up to 5 around current)
  const pages = getPageRange(state.page, totalPages);

  // Insert before nextBtn
  pages.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'page-btn page-num-btn' + (p === state.page ? ' active' : '');
    btn.textContent = p === '…' ? '…' : p;
    btn.disabled = p === '…';
    if (p !== '…') {
      btn.addEventListener('click', () => {
        state.page = p;
        renderTable();
        renderPagination();
      });
    }
    pagination.insertBefore(btn, nextBtn);
  });
}

function getPageRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '…', total];
  if (current >= total - 3) return [1, '…', total-4, total-3, total-2, total-1, total];
  return [1, '…', current-1, current, current+1, '…', total];
}


/* ══════════════════════════════════════════
   SPORT TABS
══════════════════════════════════════════ */
function initSportTabs() {
  document.getElementById('sportTabs').addEventListener('click', (e) => {
    const btn = e.target.closest('.sport-tab');
    if (!btn) return;
    document.querySelectorAll('.sport-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeSport = btn.dataset.sport;
    applyFilters();
  });
}


/* ══════════════════════════════════════════
   SIDEBAR FILTERS
══════════════════════════════════════════ */
function initSidebarFilters() {
  // Apply button
  document.getElementById('applyBtn').addEventListener('click', () => {
    // Read checkboxes
    state.checkedSports = [...document.querySelectorAll('input[name="sport"]:checked')]
      .map(cb => cb.value);

    // Dates
    state.fromDate = document.getElementById('fromDate').value;
    state.toDate   = document.getElementById('toDate').value;

    // Department
    state.department = document.getElementById('deptSelect').value;

    applyFilters();
  });

  // Reset
  document.getElementById('resetBtn').addEventListener('click', () => {
    document.querySelectorAll('input[name="sport"]').forEach(cb => cb.checked = true);
    document.getElementById('fromDate').value = '2025-05-20';
    document.getElementById('toDate').value   = '2025-06-20';
    document.getElementById('deptSelect').value = '';

    state.checkedSports = ['Football','Cricket','Basketball','Badminton','Tennis'];
    state.fromDate = '2025-05-20';
    state.toDate   = '2025-06-20';
    state.department = '';
    state.activeSport = 'All Sports';

    document.querySelectorAll('.sport-tab').forEach(b =>
      b.classList.toggle('active', b.dataset.sport === 'All Sports')
    );

    applyFilters();
  });
}


/* ══════════════════════════════════════════
   ACCORDION (filter sections)
══════════════════════════════════════════ */
function initAccordion() {
  document.querySelectorAll('.filter-section-header').forEach(header => {
    const bodyId = header.dataset.toggle;
    const body = document.getElementById(bodyId);
    if (!body) return;

    body.style.maxHeight = body.scrollHeight + 'px';

    header.addEventListener('click', () => {
      const isCollapsed = header.classList.toggle('collapsed');
      body.classList.toggle('hidden', isCollapsed);
      if (!isCollapsed) {
        body.style.maxHeight = body.scrollHeight + 'px';
        body.style.opacity = '1';
      }
    });
  });
}


/* ══════════════════════════════════════════
   PAGINATION PREV / NEXT
══════════════════════════════════════════ */
function initPaginationNav() {
  document.getElementById('prevBtn').addEventListener('click', () => {
    if (state.page > 1) { state.page--; renderTable(); renderPagination(); }
  });
  document.getElementById('nextBtn').addEventListener('click', () => {
    const total = Math.ceil(state.filtered.length / PER_PAGE);
    if (state.page < total) { state.page++; renderTable(); renderPagination(); }
  });
}


/* ══════════════════════════════════════════
   EXPORT CSV
══════════════════════════════════════════ */
function initExport() {
  document.getElementById('exportBtn').addEventListener('click', () => {
    const headers = ['Match ID','Sport','Team A','Team B','Date','Time','Venue','Status'];
    const rows = state.filtered.map(f =>
      [f.id, f.sport, f.teamA, f.teamB, f.date, f.time, f.venue, f.status]
        .map(v => `"${v}"`).join(',')
    );
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'northfield-fixtures.csv';
    a.click(); URL.revokeObjectURL(url);
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

  document.addEventListener('click', (e) => {
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
  initAccordion();
  initSportTabs();
  initSidebarFilters();
  initPaginationNav();
  initExport();
  initHamburger();

  // Initial render
  applyFilters();
});