/* ============================================================
   Liquor Time — script.js
   Kansas City time · Age gate · Live open/closed · Brand ticker
   ============================================================ */

const HOURS = {
  0: { open:10, close:20, label:'10:00 AM – 8:00 PM'  },
  1: { open: 9, close:23, label: '9:00 AM – 11:00 PM' },
  2: { open: 9, close:23, label: '9:00 AM – 11:00 PM' },
  3: { open: 9, close:23, label: '9:00 AM – 11:00 PM' },
  4: { open: 9, close:23, label: '9:00 AM – 11:00 PM' },
  5: { open: 9, close:23, label: '9:00 AM – 11:00 PM' },
  6: { open: 9, close:23, label: '9:00 AM – 11:00 PM' },
};

/* Brands for the scrolling ticker */
const TICKER_BRANDS = [
  { name:'Jack Daniel\'s',  domain:'jackdaniels.com'       },
  { name:'Patrón',          domain:'patrontequila.com'      },
  { name:'Heineken',        domain:'heineken.com'           },
  { name:'Grey Goose',      domain:'greygoose.com'          },
  { name:'Don Julio',       domain:'donjulio.com'           },
  { name:'Bacardi',         domain:'bacardi.com'            },
  { name:'White Claw',      domain:'whiteclaw.com'          },
  { name:'Jameson',         domain:'jamesonwhiskey.com'     },
  { name:'Corona',          domain:'corona.com'             },
  { name:'Tito\'s Vodka',   domain:'titosvodka.com'         },
  { name:'Crown Royal',     domain:'crownroyal.com'         },
  { name:'Modelo',          domain:'modelo.com'             },
  { name:'Casamigos',       domain:'casamigos.com'          },
  { name:'Captain Morgan',  domain:'captainmorgan.com'      },
  { name:'Truly',           domain:'trulyseltzer.com'       },
  { name:'Maker\'s Mark',   domain:'makersmark.com'         },
  { name:'Absolut',         domain:'absolut.com'            },
  { name:'Fireball',        domain:'fireballwhisky.com'     },
  { name:'Budweiser',       domain:'budweiser.com'          },
  { name:'Jägermeister',    domain:'jagermeister.com'       },
  { name:'Stella Artois',   domain:'stellaartois.com'       },
  { name:'Bulleit',         domain:'bulleit.com'            },
  { name:'High Noon',       domain:'highnoonspirits.com'    },
  { name:'Kraken',          domain:'krakenrum.com'          },
];

/* ===== KC TIME ===== */
function getKCTime() {
  const now   = new Date();
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone:'America/Chicago',
    hour:'numeric', minute:'numeric', weekday:'short', hour12:false,
  }).formatToParts(now);
  const get   = (type) => parts.find(p => p.type === type)?.value ?? '';
  const dayMap = { Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6 };
  const day    = dayMap[get('weekday')] ?? new Date().getDay();
  const hour   = parseInt(get('hour'),10) + parseInt(get('minute'),10) / 60;
  return { day, hour };
}

/* ===== AGE GATE ===== */
function enterSite() {
  sessionStorage.setItem('lt_age_ok','1');
  const gate = document.getElementById('age-gate');
  gate.style.transition = 'opacity 0.4s ease';
  gate.style.opacity    = '0';
  setTimeout(() => { gate.style.display = 'none'; }, 420);
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

/* ===== STORE STATUS ===== */
function initStoreStatus() {
  const { day, hour } = getKCTime();
  const today  = HOURS[day];
  const isOpen = hour >= today.open && hour < today.close;

  const badge = document.getElementById('store-status');
  if (badge) {
    badge.textContent = isOpen ? '✅ Open Now' : '❌ Closed Now';
    badge.className   = 'hero__badge ' + (isOpen ? 'open' : 'closed');
  }

  const todayEl = document.getElementById('hours-today');
  if (todayEl) {
    todayEl.textContent = (isOpen ? '✅ Open — ' : '❌ Closed — ') + today.label;
  }

  const todayRow = document.querySelector(`.hours-row[data-day="${day}"]`);
  if (todayRow) todayRow.classList.add('today');
}

/* ===== DEAL BANNER ===== */
function initDealBanner() {
  const { day } = getKCTime();
  const badge   = document.getElementById('deal-badge');
  if (!badge) return;

  if (day === 2 || day === 3) {
    badge.textContent = '🔥 DEAL ACTIVE TODAY!';
    badge.classList.add('active');
    const banner = document.querySelector('.deal-banner');
    if (banner) banner.style.borderColor = 'rgba(192,57,43,0.6)';
    const wineCard = document.querySelector('.product-card--deal');
    if (wineCard) wineCard.style.boxShadow = '0 0 36px rgba(192,57,43,0.3)';
  }
}

/* ===== BRAND TICKER ===== */
function buildTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;

  const allBrands = [...TICKER_BRANDS, ...TICKER_BRANDS]; // double for infinite loop

  const html = allBrands.map((b, i) => `
    <div class="ticker-item">
      <div class="brand-logo" style="width:32px;height:32px;border-radius:6px;background:#fff;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;">
        <img src="https://logo.clearbit.com/${b.domain}"
             alt="${b.name}"
             loading="lazy"
             style="width:100%;height:100%;object-fit:contain;padding:3px;"
             onerror="this.style.display='none'">
      </div>
      <span>${b.name}</span>
    </div>
    ${i < allBrands.length - 1 ? '<div class="ticker-dot"></div>' : ''}
  `).join('');

  track.innerHTML = html;
}

/* ===== NAV ===== */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-mobile');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      menu.setAttribute('aria-hidden','true');
    }
  });
}

function closeMobileMenu() {
  const menu   = document.getElementById('nav-mobile');
  const toggle = document.getElementById('nav-toggle');
  if (menu)   { menu.classList.remove('open'); menu.setAttribute('aria-hidden','true'); }
  if (toggle)   toggle.setAttribute('aria-expanded','false');
}

/* ===== NAV SCROLL SHADOW ===== */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10 ? '0 4px 24px rgba(0,0,0,0.5)' : 'none';
  }, { passive:true });
}

/* ===== SMOOTH SCROLL (offset for sticky nav) ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior:'smooth' });
    });
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initAgeGate();
  initStoreStatus();
  initDealBanner();
  buildTicker();
  initNav();
  initNavScroll();
  initSmoothScroll();
});
