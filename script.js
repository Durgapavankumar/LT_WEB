/* ============================================================
   Liquor Time — script.js
   Kansas City time · Age gate · Live open/closed status
   ============================================================ */

// Store hours per day (0=Sun … 6=Sat)
// Kansas City is America/Chicago — UTC-6 CST / UTC-5 CDT
const HOURS = {
  0: { open: 10, close: 20, label: '10:00 AM – 8:00 PM'  },  // Sunday
  1: { open:  9, close: 23, label:  '9:00 AM – 11:00 PM' },  // Monday
  2: { open:  9, close: 23, label:  '9:00 AM – 11:00 PM' },  // Tuesday
  3: { open:  9, close: 23, label:  '9:00 AM – 11:00 PM' },  // Wednesday
  4: { open:  9, close: 23, label:  '9:00 AM – 11:00 PM' },  // Thursday
  5: { open:  9, close: 23, label:  '9:00 AM – 11:00 PM' },  // Friday
  6: { open:  9, close: 23, label:  '9:00 AM – 11:00 PM' },  // Saturday
};

/* Get current time in Kansas City (America/Chicago) */
function getKCTime() {
  const now   = new Date();
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    hour:     'numeric',
    minute:   'numeric',
    weekday:  'short',
    hour12:   false,
  }).formatToParts(now);

  const get = (type) => parts.find(p => p.type === type)?.value ?? '';
  const dayMap = { Sun:0, Mon:1, Tue:2, Wed:3, Thu:4, Fri:5, Sat:6 };
  const day    = dayMap[get('weekday')] ?? new Date().getDay();
  const hour   = parseInt(get('hour'),   10) + parseInt(get('minute'), 10) / 60;
  return { day, hour };
}

/* ===== AGE GATE ===== */
function enterSite() {
  sessionStorage.setItem('lt_age_ok', '1');
  const gate = document.getElementById('age-gate');
  gate.style.transition = 'opacity 0.4s ease';
  gate.style.opacity    = '0';
  setTimeout(() => { gate.style.display = 'none'; }, 400);
  document.body.style.overflow = '';
}

function denyEntry() {
  window.location.href = 'https://www.alcohol.org/';
}

function initAgeGate() {
  const gate = document.getElementById('age-gate');
  if (sessionStorage.getItem('lt_age_ok') === '1') {
    gate.style.display = 'none';
  } else {
    document.body.style.overflow = 'hidden';
  }
}

/* ===== STORE STATUS (open / closed) ===== */
function initStoreStatus() {
  const { day, hour } = getKCTime();
  const today      = HOURS[day];
  const isOpen     = hour >= today.open && hour < today.close;

  // Hero badge
  const badge = document.getElementById('store-status');
  if (badge) {
    badge.textContent = isOpen ? '✅ Open Now' : '❌ Closed Now';
    badge.className   = 'hero__badge ' + (isOpen ? 'open' : 'closed');
  }

  // Location "Status Right Now"
  const todayEl = document.getElementById('hours-today');
  if (todayEl) {
    todayEl.textContent = (isOpen ? '✅ Open — ' : '❌ Closed — ') + today.label;
  }

  // Highlight today's row in the hours table
  const todayRow = document.querySelector(`.hours-row[data-day="${day}"]`);
  if (todayRow) {
    todayRow.classList.add('today');
    // Scroll into view gently if user lands on #hours
    if (window.location.hash === '#hours') {
      setTimeout(() => todayRow.scrollIntoView({ behavior: 'smooth', block: 'center' }), 400);
    }
  }
}

/* ===== DEAL BANNER ===== */
function initDealBanner() {
  const { day } = getKCTime();
  const badge   = document.getElementById('deal-badge');
  if (!badge) return;

  if (day === 2 || day === 3) {   // Tuesday or Wednesday
    badge.textContent = '🔥 DEAL ACTIVE TODAY!';
    badge.classList.add('active');

    // Make the deal banner extra prominent
    const banner = document.querySelector('.deal-banner');
    if (banner) banner.style.borderColor = 'rgba(192,57,43,0.55)';

    // Also visually pop the wine card
    const wineCard = document.querySelector('.product-card--deal');
    if (wineCard) {
      wineCard.style.boxShadow = '0 0 32px rgba(192,57,43,0.25)';
    }
  }
}

/* ===== NAVIGATION TOGGLE ===== */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-mobile');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-hidden', String(!isOpen));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    }
  });
}

function closeMobileMenu() {
  const menu   = document.getElementById('nav-mobile');
  const toggle = document.getElementById('nav-toggle');
  if (menu)   { menu.classList.remove('open'); menu.setAttribute('aria-hidden','true'); }
  if (toggle)   toggle.setAttribute('aria-expanded','false');
}

/* ===== NAVBAR SCROLL SHADOW ===== */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(0,0,0,0.5)'
      : 'none';
  }, { passive: true });
}

/* ===== SMOOTH ANCHOR OFFSET (account for sticky nav) ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 72; // nav height
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initAgeGate();
  initStoreStatus();
  initDealBanner();
  initNav();
  initNavScroll();
  initSmoothScroll();
});
