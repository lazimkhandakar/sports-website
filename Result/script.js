/* ══════════════════════════════════════════════
   Northfield University – Results Page · script.js
   ══════════════════════════════════════════════ */

'use strict';

/* ── MATCH DATA ─────────────────────────────── */
const MATCHES = [
  {
    id: 'NF-001', sport: 'Football', emoji: '⚽',
    home: 'CS Falcons',    away: 'Business Bulls',
    homeScore: 3, awayScore: 1,
    date: '2025-05-10', venue: 'Main Stadium', result: 'Win',
    dept: 'Computer Science',
    summary: [
      { min: "12'", icon: '⚽', player: 'James Okafor',   desc: 'Goal – CS Falcons' },
      { min: "34'", icon: '⚽', player: 'Hamid Reza',      desc: 'Goal – CS Falcons' },
      { min: "51'", icon: '⚽', player: 'Luca Bernardi',   desc: 'Goal – Business Bulls' },
      { min: "78'", icon: '⚽', player: 'David Mensah',    desc: 'Goal – CS Falcons' },
      { min: "90'", icon: '🟥', player: 'Tom Willis',      desc: 'Red Card – Business Bulls' },
    ],
    lineups: {
      home:  ['1 · K. Patel (GK)','2 · A. Chen','5 · R. Singh ©','7 · James Okafor','9 · David Mensah','10 · Hamid Reza','3 · L. Park','4 · M. Torres','6 · S. Kim','8 · F. Adeola','11 · N. Johansson'],
      away:  ['1 · B. Kwame (GK)','2 · J. Cruz','5 · P. Russo ©','7 · Luca Bernardi','9 · Tom Willis','10 · C. Dubois','3 · A. Nkosi','4 · D. Yılmaz','6 · H. Takahashi','8 · M. Petrov','11 · S. Osei'],
    },
    stats: [
      { label: 'Possession', home: 62, away: 38 },
      { label: 'Shots',      home: 14, away: 6  },
      { label: 'On Target',  home: 7,  away: 3  },
      { label: 'Corners',    home: 6,  away: 2  },
      { label: 'Fouls',      home: 9,  away: 13 },
    ],
  },
  {
    id: 'NF-002', sport: 'Cricket', emoji: '🏏',
    home: 'Civil Warriors', away: 'Elec Thunders',
    homeScore: 187, awayScore: 154,
    date: '2025-04-22', venue: 'University Ground', result: 'Win',
    dept: 'Civil Engineering',
    summary: [
      { min: 'Over 8',  icon: '🏏', player: 'R. Sharma',    desc: 'Fifty – Civil Warriors (54 off 42)' },
      { min: 'Over 14', icon: '🏏', player: 'A. Mehta',     desc: 'Wicket – Elec Thunders' },
      { min: 'Over 18', icon: '🏏', player: 'K. Patel',     desc: 'Boundary – Civil Warriors' },
      { min: 'Over 19', icon: '🏏', player: 'S. Verma',     desc: 'Hat-trick – Civil Warriors' },
    ],
    lineups: {
      home:  ['R. Sharma ©','A. Mehta','K. Patel','S. Verma','T. Das','P. Rao','M. Nair','J. Pillai','V. Kumar','H. Reddy','D. Iyer'],
      away:  ['F. Ahmed ©','B. Hassan','C. Malik','Z. Iqbal','N. Siddiqui','A. Khan','M. Raza','S. Ali','T. Butt','H. Mirza','K. Baig'],
    },
    stats: [
      { label: 'Run Rate',    home: 9.35, away: 7.70 },
      { label: 'Boundaries',  home: 22,   away: 14   },
      { label: 'Sixes',       home: 6,    away: 3    },
      { label: 'Wickets',     home: 4,    away: 10   },
      { label: 'Extras',      home: 8,    away: 12   },
    ],
  },
  {
    id: 'NF-003', sport: 'Basketball', emoji: '🏀',
    home: 'Law Sharks',   away: 'Mech Rockets',
    homeScore: 72, awayScore: 68,
    date: '2025-03-14', venue: 'Sports Hall A', result: 'Win',
    dept: 'Law Department',
    summary: [
      { min: 'Q1', icon: '🏀', player: 'A. Brown',    desc: 'Buzzer Three – Law Sharks' },
      { min: 'Q2', icon: '🏀', player: 'D. Carter',   desc: 'Slam Dunk – Mech Rockets' },
      { min: 'Q3', icon: '🏀', player: 'M. James',    desc: 'Fast Break Lay-up – Law Sharks' },
      { min: 'Q4', icon: '🏀', player: 'A. Brown',    desc: 'Decisive Three-Pointer – Law Sharks' },
    ],
    lineups: {
      home:  ['A. Brown ©','M. James','K. Davis','P. Lee','T. Wilson','S. Moore','R. Taylor','J. Anderson','C. Thomas','B. Jackson','G. Harris'],
      away:  ['D. Carter ©','L. Walker','F. Hall','N. Allen','V. Young','H. King','A. Wright','O. Scott','E. Green','W. Baker','C. Nelson'],
    },
    stats: [
      { label: 'FG%',         home: 48, away: 43 },
      { label: '3PT%',        home: 38, away: 29 },
      { label: 'Rebounds',    home: 34, away: 30 },
      { label: 'Assists',     home: 18, away: 14 },
      { label: 'Turnovers',   home: 11, away: 15 },
    ],
  },
  {
    id: 'NF-004', sport: 'Badminton', emoji: '🏸',
    home: 'Electronics',  away: 'Business Studies',
    homeScore: 2, awayScore: 1,
    date: '2025-02-28', venue: 'Indoor Arena', result: 'Win',
    dept: 'Electronics',
    summary: [
      { min: 'G1', icon: '🏸', player: 'Y. Tanaka',    desc: 'Game 1 Won – Electronics (21-17)' },
      { min: 'G2', icon: '🏸', player: 'B. Okonkwo',   desc: 'Game 2 Won – Business Studies (21-19)' },
      { min: 'G3', icon: '🏸', player: 'Y. Tanaka',    desc: 'Game 3 Won – Electronics (21-18)' },
    ],
    lineups: {
      home:  ['Y. Tanaka (Singles)','K. Lin (Singles)','M. Zhao / P. Wu (Doubles)'],
      away:  ['B. Okonkwo (Singles)','C. Eze (Singles)','T. Mensah / R. Boateng (Doubles)'],
    },
    stats: [
      { label: 'Aces',        home: 12, away: 8  },
      { label: 'Smashes',     home: 28, away: 21 },
      { label: 'Net Shots',   home: 35, away: 30 },
      { label: 'Errors',      home: 14, away: 19 },
    ],
  },
  {
    id: 'NF-005', sport: 'Football', emoji: '⚽',
    home: 'Mech United',  away: 'CS Falcons',
    homeScore: 1, awayScore: 1,
    date: '2025-01-18', venue: 'Main Stadium', result: 'Draw',
    dept: 'Mechanical Engg.',
    summary: [
      { min: "29'", icon: '⚽', player: 'P. Greco',    desc: 'Goal – Mech United' },
      { min: "67'", icon: '⚽', player: 'Hamid Reza',  desc: 'Equaliser – CS Falcons' },
      { min: "85'", icon: '🟨', player: 'R. Foster',   desc: 'Yellow Card – Mech United' },
    ],
    lineups: {
      home:  ['1 · G. Moretti (GK)','2 · P. Greco','5 · R. Foster ©','7 · T. Bianchi','9 · L. Conti','10 · M. Ferrari','3 · A. Russo','4 · F. Ricci','6 · S. Marino','8 · C. Esposito','11 · D. Bruno'],
      away:  ['1 · K. Patel (GK)','2 · A. Chen','5 · R. Singh ©','7 · James Okafor','9 · David Mensah','10 · Hamid Reza','3 · L. Park','4 · M. Torres','6 · S. Kim','8 · F. Adeola','11 · N. Johansson'],
    },
    stats: [
      { label: 'Possession', home: 44, away: 56 },
      { label: 'Shots',      home: 8,  away: 11 },
      { label: 'On Target',  home: 3,  away: 4  },
      { label: 'Corners',    home: 4,  away: 5  },
      { label: 'Fouls',      home: 11, away: 8  },
    ],
  },
  {
    id: 'NF-006', sport: 'Tennis', emoji: '🎾',
    home: 'CS Falcons',   away: 'Law Sharks',
    homeScore: 2, awayScore: 0,
    date: '2025-04-05', venue: 'Tennis Courts', result: 'Win',
    dept: 'Computer Science',
    summary: [
      { min: 'Set 1', icon: '🎾', player: 'A. Fedorov',  desc: 'Set 1 Won – CS Falcons (6-3)' },
      { min: 'Set 2', icon: '🎾', player: 'A. Fedorov',  desc: 'Set 2 Won – CS Falcons (6-4)' },
    ],
    lineups: {
      home:  ['A. Fedorov (Singles)','M. Nakamura (Singles)','K. Dubois / S. Park (Doubles)'],
      away:  ['O. Adeyemi (Singles)','C. Barbosa (Singles)','T. Nwosu / G. Lima (Doubles)'],
    },
    stats: [
      { label: 'Aces',         home: 8,  away: 3  },
      { label: 'Double Faults',home: 2,  away: 6  },
      { label: '1st Serve %',  home: 71, away: 58 },
      { label: 'Winners',      home: 24, away: 15 },
      { label: 'Unforced Err', home: 9,  away: 18 },
    ],
  },
  {
    id: 'NF-007', sport: 'Football', emoji: '⚽',
    home: 'Business Bulls', away: 'Law Sharks',
    homeScore: 0, awayScore: 2,
    date: '2025-03-30', venue: 'Main Stadium', result: 'Loss',
    dept: 'Business Studies',
    summary: [
      { min: "15'", icon: '⚽', player: 'A. Brown',    desc: 'Goal – Law Sharks' },
      { min: "60'", icon: '⚽', player: 'M. James',    desc: 'Goal – Law Sharks' },
      { min: "72'", icon: '🟥', player: 'C. Dubois',   desc: 'Red Card – Business Bulls' },
    ],
    lineups: {
      home:  ['1 · B. Kwame (GK)','2 · J. Cruz','5 · P. Russo ©','7 · Luca Bernardi','9 · Tom Willis','10 · C. Dubois','3 · A. Nkosi','4 · D. Yılmaz','6 · H. Takahashi','8 · M. Petrov','11 · S. Osei'],
      away:  ['1 · G. Santos (GK)','2 · A. Brown','5 · K. Davis ©','7 · M. James','9 · T. Wilson','10 · S. Moore','3 · R. Taylor','4 · J. Anderson','6 · C. Thomas','8 · B. Jackson','11 · G. Harris'],
    },
    stats: [
      { label: 'Possession', home: 48, away: 52 },
      { label: 'Shots',      home: 7,  away: 12 },
      { label: 'On Target',  home: 1,  away: 5  },
      { label: 'Corners',    home: 3,  away: 7  },
      { label: 'Fouls',      home: 14, away: 9  },
    ],
  },
  {
    id: 'NF-008', sport: 'Cricket', emoji: '🏏',
    home: 'Business Studies', away: 'Mechanical Engg.',
    homeScore: 142, awayScore: 143,
    date: '2025-02-12', venue: 'University Ground', result: 'Loss',
    dept: 'Business Studies',
    summary: [
      { min: 'Over 12', icon: '🏏', player: 'S. Khan',     desc: 'Fifty – Mechanical Engg. (53 off 38)' },
      { min: 'Over 17', icon: '🏏', player: 'A. Hossain',  desc: 'Wicket – Business Studies' },
      { min: 'Over 20', icon: '🏏', player: 'S. Khan',     desc: 'Match-winning Six – Mechanical Engg.' },
    ],
    lineups: {
      home:  ['T. Reid ©','B. Osei','C. Eze','D. Nwosu','E. Asante','F. Boateng','G. Mensah','H. Adjei','I. Owusu','J. Amankwah','K. Gyamfi'],
      away:  ['S. Khan ©','A. Hossain','M. Islam','R. Chowdhury','T. Ahmed','N. Hasan','F. Uddin','B. Alam','C. Rahman','D. Karim','E. Mollah'],
    },
    stats: [
      { label: 'Run Rate',    home: 7.1,  away: 7.15 },
      { label: 'Boundaries',  home: 16,   away: 18   },
      { label: 'Sixes',       home: 2,    away: 4    },
      { label: 'Wickets',     home: 10,   away: 7    },
      { label: 'Extras',      home: 10,   away: 6    },
    ],
  },
  {
    id: 'NF-009', sport: 'Volleyball', emoji: '🏐',
    home: 'Electronics',   away: 'Civil Engineering',
    homeScore: 3, awayScore: 2,
    date: '2025-05-01', venue: 'Sports Hall B', result: 'Win',
    dept: 'Electronics',
    summary: [
      { min: 'Set 1', icon: '🏐', player: 'K. Ito',       desc: 'Set 1 Won – Electronics (25-22)' },
      { min: 'Set 2', icon: '🏐', player: 'P. Singh',      desc: 'Set 2 Won – Civil Engineering (25-21)' },
      { min: 'Set 3', icon: '🏐', player: 'K. Ito',       desc: 'Set 3 Won – Electronics (25-19)' },
      { min: 'Set 4', icon: '🏐', player: 'L. Nkosi',     desc: 'Set 4 Won – Civil Engineering (26-24)' },
      { min: 'Set 5', icon: '🏐', player: 'K. Ito',       desc: 'Set 5 Won – Electronics (15-12)' },
    ],
    lineups: {
      home:  ['K. Ito ©','M. Zhao','Y. Lin','P. Wu','T. Suzuki','R. Nakamura','S. Yamamoto'],
      away:  ['P. Singh ©','L. Nkosi','A. Kumar','D. Reddy','V. Rao','M. Pillai','K. Iyer'],
    },
    stats: [
      { label: 'Aces',        home: 9,  away: 6  },
      { label: 'Blocks',      home: 14, away: 11 },
      { label: 'Kills',       home: 72, away: 68 },
      { label: 'Errors',      home: 22, away: 28 },
      { label: 'Digs',        home: 85, away: 79 },
    ],
  },
  {
    id: 'NF-010', sport: 'Basketball', emoji: '🏀',
    home: 'CS Falcons',    away: 'Electronics',
    homeScore: 55, awayScore: 55,
    date: '2025-01-25', venue: 'Sports Hall A', result: 'Draw',
    dept: 'Computer Science',
    summary: [
      { min: 'Q1', icon: '🏀', player: 'A. Chen',     desc: 'Opening Burst – CS Falcons (18-12)' },
      { min: 'Q3', icon: '🏀', player: 'Y. Tanaka',   desc: 'Electronics Level – Electronics (42-42)' },
      { min: 'Q4', icon: '🏀', player: 'Both',        desc: 'No change after overtime – Draw declared' },
    ],
    lineups: {
      home:  ['A. Chen ©','R. Singh','L. Park','M. Torres','S. Kim','F. Adeola','N. Johansson'],
      away:  ['Y. Tanaka ©','K. Lin','M. Zhao','P. Wu','T. Suzuki','R. Nakamura','S. Yamamoto'],
    },
    stats: [
      { label: 'FG%',         home: 42, away: 42 },
      { label: '3PT%',        home: 33, away: 31 },
      { label: 'Rebounds',    home: 29, away: 31 },
      { label: 'Assists',     home: 15, away: 14 },
      { label: 'Turnovers',   home: 13, away: 12 },
    ],
  },
  {
    id: 'NF-011', sport: 'Football', emoji: '⚽',
    home: 'Civil Warriors', away: 'Mech United',
    homeScore: 4, awayScore: 0,
    date: '2025-04-14', venue: 'Main Stadium', result: 'Win',
    dept: 'Civil Engineering',
    summary: [
      { min: "8'",  icon: '⚽', player: 'T. Das',      desc: 'Goal – Civil Warriors' },
      { min: "33'", icon: '⚽', player: 'R. Sharma',   desc: 'Goal – Civil Warriors' },
      { min: "55'", icon: '⚽', player: 'A. Mehta',    desc: 'Goal – Civil Warriors' },
      { min: "80'", icon: '⚽', player: 'K. Patel',    desc: 'Goal – Civil Warriors' },
    ],
    lineups: {
      home:  ['1 · H. Reddy (GK)','2 · R. Sharma','5 · A. Mehta ©','7 · K. Patel','9 · T. Das','10 · S. Verma','3 · M. Nair','4 · J. Pillai','6 · V. Kumar','8 · D. Iyer','11 · P. Rao'],
      away:  ['1 · G. Moretti (GK)','2 · P. Greco','5 · R. Foster ©','7 · T. Bianchi','9 · L. Conti','10 · M. Ferrari','3 · A. Russo','4 · F. Ricci','6 · S. Marino','8 · C. Esposito','11 · D. Bruno'],
    },
    stats: [
      { label: 'Possession', home: 67, away: 33 },
      { label: 'Shots',      home: 18, away: 4  },
      { label: 'On Target',  home: 9,  away: 1  },
      { label: 'Corners',    home: 8,  away: 1  },
      { label: 'Fouls',      home: 7,  away: 16 },
    ],
  },
  {
    id: 'NF-012', sport: 'Badminton', emoji: '🏸',
    home: 'Law Sharks',    away: 'CS Falcons',
    homeScore: 1, awayScore: 2,
    date: '2025-03-03', venue: 'Indoor Arena', result: 'Loss',
    dept: 'Law Department',
    summary: [
      { min: 'G1', icon: '🏸', player: 'A. Fedorov',  desc: 'Game 1 Won – CS Falcons (21-16)' },
      { min: 'G2', icon: '🏸', player: 'O. Adeyemi',  desc: 'Game 2 Won – Law Sharks (21-18)' },
      { min: 'G3', icon: '🏸', player: 'A. Fedorov',  desc: 'Game 3 Won – CS Falcons (21-14)' },
    ],
    lineups: {
      home:  ['O. Adeyemi (Singles)','C. Barbosa (Singles)','T. Nwosu / G. Lima (Doubles)'],
      away:  ['A. Fedorov (Singles)','M. Nakamura (Singles)','K. Dubois / S. Park (Doubles)'],
    },
    stats: [
      { label: 'Aces',      home: 7,  away: 14 },
      { label: 'Smashes',   home: 18, away: 26 },
      { label: 'Net Shots', home: 27, away: 33 },
      { label: 'Errors',    home: 21, away: 12 },
    ],
  },
];

/* ── STATE ──────────────────────────────────── */
const state = {
  activeSport: 'all',
  page: 1,
  perPage: 8,
  filters: { sports: ['Football'], results: ['Win'], dateFrom: '2025-01-01', dateTo: '2025-06-01', dept: '' },
  searchQuery: '',
  modalMatch: null,
  modalTab: 'summary',
};

/* ── ELEMENT REFS ───────────────────────────── */
const $ = id => document.getElementById(id);

const els = {
  hamburger:    $('hamburger'),
  mobileMenu:   $('mobileMenu'),
  searchIcon:   $('searchIcon'),
  searchBar:    $('searchBar'),
  searchInput:  $('searchInput'),
  searchClose:  $('searchClose'),
  backToTop:    $('backToTop'),
  tableBody:    $('tableBody'),
  noResults:    $('noResults'),
  paginationInfo: $('paginationInfo'),
  pagination:   $('pagination'),
  sportTabs:    $('sportTabs'),
  resetFilters: $('resetFilters'),
  applyFilters: $('applyFilters'),
  dateFrom:     $('dateFrom'),
  dateTo:       $('dateTo'),
  deptFilter:   $('deptFilter'),
  exportBtn:    $('exportBtn'),
  modalOverlay: $('modalOverlay'),
  matchModal:   $('matchModal'),
  modalClose:   $('modalClose'),
  modalSportBadge: $('modalSportBadge'),
  modalMeta:    $('modalMeta'),
  modalScoreBlock: $('modalScoreBlock'),
  modalTabContent: $('modalTabContent'),
};

/* ── HELPERS ────────────────────────────────── */
function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getCheckedValues(name) {
  return [...document.querySelectorAll(`.filter-group input[type="checkbox"][value="${name}"]`)]
    .filter(c => c.checked).map(c => c.value);
}

function getAllChecked(selector) {
  return [...document.querySelectorAll(selector)]
    .filter(c => c.checked).map(c => c.value);
}

/* ── FILTER ENGINE ──────────────────────────── */
function applyFilters() {
  state.filters.sports  = getAllChecked('.filter-group input[type="checkbox"]').filter(v =>
    ['Football','Cricket','Basketball','Badminton','Tennis','Volleyball'].includes(v));
  state.filters.results = getAllChecked('.filter-group input[type="checkbox"]').filter(v =>
    ['Win','Draw','Loss'].includes(v));
  state.filters.dateFrom = els.dateFrom.value;
  state.filters.dateTo   = els.dateTo.value;
  state.filters.dept     = els.deptFilter.value;
  state.page = 1;
  renderTable();
}

function filteredMatches() {
  const q = state.searchQuery.toLowerCase();
  return MATCHES.filter(m => {
    // sport tab
    if (state.activeSport !== 'all' && m.sport !== state.activeSport) return false;
    // sport filter
    if (state.filters.sports.length && !state.filters.sports.includes(m.sport)) return false;
    // result filter
    if (state.filters.results.length && !state.filters.results.includes(m.result)) return false;
    // date
    if (state.filters.dateFrom && m.date < state.filters.dateFrom) return false;
    if (state.filters.dateTo   && m.date > state.filters.dateTo)   return false;
    // dept
    if (state.filters.dept && m.dept !== state.filters.dept) return false;
    // search
    if (q && !`${m.id} ${m.sport} ${m.home} ${m.away} ${m.venue} ${m.dept}`.toLowerCase().includes(q)) return false;
    return true;
  });
}

/* ── TABLE RENDER ───────────────────────────── */
function renderTable() {
  const data  = filteredMatches();
  const total = data.length;
  const pages = Math.ceil(total / state.perPage) || 1;
  if (state.page > pages) state.page = pages;

  const start = (state.page - 1) * state.perPage;
  const slice = data.slice(start, start + state.perPage);

  els.noResults.style.display = total === 0 ? 'block' : 'none';

  els.tableBody.innerHTML = slice.map(m => {
    const badgeClass = m.result.toLowerCase();
    return `
      <tr>
        <td><span class="match-id">${m.id}</span></td>
        <td><span class="sport-cell">${m.emoji} ${m.sport}</span></td>
        <td><span class="team-name">${m.home}</span></td>
        <td><span class="vs-label">vs</span></td>
        <td><span class="team-name">${m.away}</span></td>
        <td><span class="score-cell">${m.homeScore} – ${m.awayScore}</span></td>
        <td>${formatDate(m.date)}</td>
        <td>${m.venue}</td>
        <td><span class="result-badge ${badgeClass}">${m.result.toUpperCase()}</span></td>
        <td><button class="view-btn" data-id="${m.id}">View</button></td>
      </tr>`;
  }).join('');

  // pagination info
  const from = total === 0 ? 0 : start + 1;
  const to   = Math.min(start + state.perPage, total);
  els.paginationInfo.textContent = `Showing ${from}–${to} of ${total} result${total !== 1 ? 's' : ''}`;

  renderPagination(pages);
}

/* ── PAGINATION ─────────────────────────────── */
function renderPagination(pages) {
  const btns = [];

  // Prev
  btns.push(`<button class="page-btn" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''}>‹</button>`);

  // Page numbers
  for (let i = 1; i <= pages; i++) {
    if (pages > 7) {
      if (i !== 1 && i !== pages && Math.abs(i - state.page) > 1) {
        if (i === 2 || i === pages - 1) btns.push(`<button class="page-btn" disabled>…</button>`);
        continue;
      }
    }
    btns.push(`<button class="page-btn ${i === state.page ? 'active' : ''}" data-page="${i}">${i}</button>`);
  }

  // Next
  btns.push(`<button class="page-btn" data-page="${state.page + 1}" ${state.page === pages ? 'disabled' : ''}>›</button>`);

  els.pagination.innerHTML = btns.join('');
}

/* ── MODAL ──────────────────────────────────── */
function openModal(id) {
  const m = MATCHES.find(x => x.id === id);
  if (!m) return;
  state.modalMatch = m;
  state.modalTab   = 'summary';

  // Badge
  els.modalSportBadge.innerHTML = `${m.emoji} ${m.sport.toUpperCase()} · MATCH ${m.id}`;

  // Meta
  els.modalMeta.innerHTML = `
    <div class="modal-meta-item">📅 ${formatDate(m.date)}</div>
    <div class="modal-meta-item">📍 ${m.venue}</div>
    <div class="modal-meta-item">🏛 ${m.dept}</div>
    <div class="modal-meta-item"><span class="result-badge ${m.result.toLowerCase()}">${m.result.toUpperCase()}</span></div>`;

  // Score block
  const initial = m.home.split(' ').map(w => w[0]).join('').slice(0, 2);
  const initial2 = m.away.split(' ').map(w => w[0]).join('').slice(0, 2);
  els.modalScoreBlock.innerHTML = `
    <div class="score-team">
      <div class="score-team-badge">${initial}</div>
      <div class="score-team-name">${m.home}</div>
    </div>
    <div class="score-center">
      <div class="score-number">${m.homeScore} – ${m.awayScore}</div>
      <span class="score-final-badge">FULL TIME</span>
    </div>
    <div class="score-team">
      <div class="score-team-badge">${initial2}</div>
      <div class="score-team-name">${m.away}</div>
    </div>`;

  // Reset tabs
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'summary'));

  renderModalTab('summary', m);

  els.modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  els.modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderModalTab(tab, m) {
  if (tab === 'summary') {
    els.modalTabContent.innerHTML = `
      <ul class="summary-list">
        ${m.summary.map(e => `
          <li class="summary-event">
            <span class="event-minute">${e.min}</span>
            <span class="event-icon">${e.icon}</span>
            <div class="event-detail">
              <strong>${e.player}</strong>
              <span>${e.desc}</span>
            </div>
          </li>`).join('')}
      </ul>`;
  } else if (tab === 'lineups') {
    els.modalTabContent.innerHTML = `
      <div class="lineups-grid">
        <div>
          <div class="lineup-team-title">${m.home}</div>
          ${m.lineups.home.map(p => `
            <div class="lineup-player">
              <span class="player-num">${p.split('·')[0].trim()}</span>
              <span class="player-name">${p.includes('·') ? p.split('·')[1].trim() : p}</span>
              ${p.includes('©') ? '<span class="player-cap">©</span>' : ''}
            </div>`).join('')}
        </div>
        <div>
          <div class="lineup-team-title">${m.away}</div>
          ${m.lineups.away.map(p => `
            <div class="lineup-player">
              <span class="player-num">${p.split('·')[0].trim()}</span>
              <span class="player-name">${p.includes('·') ? p.split('·')[1].trim() : p}</span>
              ${p.includes('©') ? '<span class="player-cap">©</span>' : ''}
            </div>`).join('')}
        </div>
      </div>`;
  } else if (tab === 'stats') {
    els.modalTabContent.innerHTML = m.stats.map(s => {
      const total = s.home + s.away;
      const homePct = total ? Math.round((s.home / total) * 100) : 50;
      const awayPct = 100 - homePct;
      return `
        <div class="stat-bar-row">
          <div class="stat-bar-label">
            <span>${m.home} · ${s.home}</span>
            <span>${s.label}</span>
            <span>${s.away} · ${m.away}</span>
          </div>
          <div class="stat-bar-track">
            <div class="stat-bar-home" style="width:${homePct}%"></div>
            <div class="stat-bar-away" style="width:${awayPct}%"></div>
          </div>
        </div>`;
    }).join('');
  }
}

/* ── COUNTER ANIMATION ──────────────────────── */
function animateCounters() {
  document.querySelectorAll('.hstat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1200;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(progress * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

/* ── INTERSECTION OBSERVER ──────────────────── */
function setupObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('hstat')) {
          animateCounters();
          observer.disconnect();
        }
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in, .hstat').forEach(el => observer.observe(el));
}

/* ── SPORT TABS ─────────────────────────────── */
function setupSportTabs() {
  els.sportTabs.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeSport = btn.dataset.sport;
    state.page = 1;
    renderTable();
  });
}

/* ── SEARCH ─────────────────────────────────── */
function setupSearch() {
  els.searchIcon.addEventListener('click', () => {
    els.searchBar.classList.toggle('open');
    if (els.searchBar.classList.contains('open')) els.searchInput.focus();
  });

  els.searchClose.addEventListener('click', () => {
    els.searchBar.classList.remove('open');
    els.searchInput.value = '';
    state.searchQuery = '';
    renderTable();
  });

  let debounce;
  els.searchInput.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      state.searchQuery = els.searchInput.value.trim();
      state.page = 1;
      renderTable();
    }, 280);
  });
}

/* ── HAMBURGER ──────────────────────────────── */
function setupHamburger() {
  els.hamburger.addEventListener('click', () => {
    els.hamburger.classList.toggle('open');
    els.mobileMenu.classList.toggle('open');
  });
}

/* ── BACK TO TOP ────────────────────────────── */
function setupBackToTop() {
  window.addEventListener('scroll', () => {
    els.backToTop.classList.toggle('show', window.scrollY > 400);
  });
  els.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── RESET FILTERS ──────────────────────────── */
function setupResetFilters() {
  els.resetFilters.addEventListener('click', () => {
    // Uncheck all
    document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(c => {
      c.checked = false;
    });
    // Reset date
    els.dateFrom.value = '2025-01-01';
    els.dateTo.value   = '2025-06-01';
    // Reset dept
    els.deptFilter.value = '';
    // Reset sport tab
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.tab-btn[data-sport="all"]').classList.add('active');
    state.activeSport = 'all';
    state.filters = { sports: [], results: [], dateFrom: '2025-01-01', dateTo: '2025-06-01', dept: '' };
    state.searchQuery = '';
    els.searchInput.value = '';
    state.page = 1;
    renderTable();
  });
}

/* ── APPLY FILTERS BTN ──────────────────────── */
function setupApplyFilters() {
  els.applyFilters.addEventListener('click', applyFilters);
}

/* ── EXPORT CSV ─────────────────────────────── */
function setupExport() {
  els.exportBtn.addEventListener('click', () => {
    const data = filteredMatches();
    const header = ['Match ID','Sport','Home Team','Away Team','Score','Date','Venue','Result','Department'];
    const rows = data.map(m =>
      [m.id, m.sport, m.home, m.away, `${m.homeScore}-${m.awayScore}`, m.date, m.venue, m.result, m.dept]
        .map(v => `"${v}"`).join(',')
    );
    const csv = [header.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'northfield-results.csv';
    a.click();
    URL.revokeObjectURL(url);
  });
}

/* ── PAGINATION CLICKS ──────────────────────── */
function setupPagination() {
  els.pagination.addEventListener('click', e => {
    const btn = e.target.closest('.page-btn');
    if (!btn || btn.disabled) return;
    const p = parseInt(btn.dataset.page, 10);
    if (!isNaN(p)) {
      state.page = p;
      renderTable();
      window.scrollTo({ top: els.tableBody.closest('.results-panel').offsetTop - 100, behavior: 'smooth' });
    }
  });
}

/* ── VIEW BUTTON (table row) ────────────────── */
function setupViewButtons() {
  els.tableBody.addEventListener('click', e => {
    const btn = e.target.closest('.view-btn');
    if (!btn) return;
    openModal(btn.dataset.id);
  });
}

/* ── MODAL CONTROLS ─────────────────────────── */
function setupModal() {
  els.modalClose.addEventListener('click', closeModal);
  els.modalOverlay.addEventListener('click', e => {
    if (e.target === els.modalOverlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.modalTab = tab.dataset.tab;
      renderModalTab(state.modalTab, state.modalMatch);
    });
  });
}

/* ── INITIAL FILTER STATE (sync HTML defaults) ── */
function syncInitialFilters() {
  state.filters.sports  = getAllChecked('.filter-group input[type="checkbox"]').filter(v =>
    ['Football','Cricket','Basketball','Badminton','Tennis','Volleyball'].includes(v));
  state.filters.results = getAllChecked('.filter-group input[type="checkbox"]').filter(v =>
    ['Win','Draw','Loss'].includes(v));
  state.filters.dateFrom = els.dateFrom.value;
  state.filters.dateTo   = els.dateTo.value;
  state.filters.dept     = els.deptFilter.value;
}

/* ── INIT ───────────────────────────────────── */
function init() {
  syncInitialFilters();
  renderTable();
  setupObserver();
  setupSportTabs();
  setupSearch();
  setupHamburger();
  setupBackToTop();
  setupResetFilters();
  setupApplyFilters();
  setupExport();
  setupPagination();
  setupViewButtons();
  setupModal();
}

document.addEventListener('DOMContentLoaded', init);