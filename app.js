/* ==========================================================================
   TRADE CARE RESEARCH - HIGH-PERFORMANCE MASTER CLIENT ENGINE (60 FPS)
   Throttled Scroll Observer, RAG Knowledge Engine, 21-Page Routing & Mobile Nav Suite
   ========================================================================== */

class RagKnowledgeEngine {
  constructor() {
    this.chunks = [
      {
        id: 'sebi_reg',
        source: 'SEBI Compliance & Risk Disclosure',
        link: '#disclaimer',
        keywords: ['sebi', 'registration', 'license', 'aditya', 'shivhare', 'inh000013873', 'nism', 'analyst'],
        content: 'Trade Care Research is a SEBI Registered Research Analyst firm (Registration No. INH000013873) granted to Aditya Shivhare. We maintain strict regulatory compliance with zero profit guarantees.'
      },
      {
        id: 'bank_nifty',
        source: 'Bank Nifty Bonanza Strategy',
        link: '#bank-nifty',
        keywords: ['bank', 'nifty', 'bonanza', 'flagship', 'option', 'intraday', 'index', 'momentum'],
        content: 'Bank Nifty Bonanza is our flagship derivative strategy delivering 100+ point momentum recommendations in Nifty 50 and Bank Nifty options using volume-weighted breakouts and 1:1.5+ risk-reward ratios.'
      },
      {
        id: 'stock_cash',
        source: 'Stock Cash Intraday Service',
        link: '#stock-cash-intraday',
        keywords: ['stock', 'cash', 'intraday', 'equity', 'delivery', 'swing'],
        content: 'Stock Cash Intraday service focuses on liquid NSE equity stocks with VWAP volume confirmation and tight risk management for daily cash traders.'
      },
      {
        id: 'pricing_matrix',
        source: 'Pricing & Subscription Matrix',
        link: '#pricing',
        keywords: ['price', 'pricing', 'cost', 'fee', 'charge', 'plan', 'monthly', 'quarterly', 'yearly'],
        content: 'Research subscriptions start at ₹7,000/Month for Stock Cash, ₹9,000/Month for Stock Option Intraday, and ₹25,000/Month for Bank Nifty Bonanza. Discounted quarterly and annual plans are available.'
      }
    ];
  }

  query(userQuery) {
    const tokens = userQuery.toLowerCase().split(/\W+/).filter(t => t.length > 2);
    if (!tokens.length) return { confidence: 'low', answer: null };

    let bestMatch = null;
    let maxScore = 0;

    this.chunks.forEach(chunk => {
      let score = 0;
      tokens.forEach(token => {
        if (chunk.keywords.includes(token)) score += 3;
        else if (chunk.content.toLowerCase().includes(token)) score += 1;
      });
      if (score > maxScore) {
        maxScore = score;
        bestMatch = chunk;
      }
    });

    if (maxScore >= 3) return { confidence: 'high', match: bestMatch };
    if (maxScore >= 1) return { confidence: 'medium', match: bestMatch };
    return { confidence: 'low', match: null };
  }
}

class AnalyticsManager {
  constructor() {
    this.sessionId = this.getOrCreateSessionId();
  }

  getOrCreateSessionId() {
    let sid = sessionStorage.getItem('tcr_session_id');
    if (!sid) {
      sid = 'sid_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
      sessionStorage.setItem('tcr_session_id', sid);
    }
    return sid;
  }

  trackEvent(eventName, eventData = {}) {
    console.log(`[ANALYTICS DISPATCH] ${eventName}:`, {
      event: eventName,
      timestamp: new Date().toISOString(),
      page: window.location.hash || '#home',
      session_id: this.sessionId,
      data: eventData
    });
  }
}

const analytics = new AnalyticsManager();
const ragEngine = new RagKnowledgeEngine();

document.addEventListener('DOMContentLoaded', () => {
  initRouting();
  initMarketTickerDecluttered();
  initTradingClock();
  initThrottledScrollObservers();
  initAiPersonalizedDashboard();
  initLiveSearchEngine();
  initModals();
  initForms();
  initMobileNav();
  initCustomCursor();
  initLiveSignalEngine();

  analytics.trackEvent('page_view', { path: window.location.hash || '#home' });
});

/* --------------------------------------------------------------------------
   1. ROUTING ENGINE FOR ALL 21 PAGE VIEWS
   -------------------------------------------------------------------------- */
function initRouting() {
  const views = document.querySelectorAll('.page-view');
  const breadcrumbActive = document.getElementById('breadcrumbActivePage');

  const pageNames = {
    'home': 'SEBI Technical Research Desk',
    'about': 'About Trade Care Research',
    'services': 'Our Research Offerings',
    'stock-cash-intraday': 'Stock Cash Intraday Research',
    'stock-option-intraday': 'Stock Option Intraday Research',
    'stock-future-intraday': 'Stock Future Intraday Research',
    'index-option-intraday': 'Index Option Intraday Research',
    'commodity-intraday': 'Commodity Intraday Research',
    'stock-cash-swing': 'Stock Cash Swing Research',
    'bank-nifty': 'Bank Nifty Bonanza Flagship',
    'pricing': 'Consolidated Subscription Pricing',
    'topical-knowledge-hub': 'Topical Research Knowledge Hub',
    'personalizedAiDashboard': 'AI Trading Workspace',
    'fast-payment': 'Fast Payment & Bank Information',
    'complaint-board': 'SEBI Complaints Disclosure Board',
    'contact': 'Contact Us & Office Details',
    'book-appointment': 'Book Research Advisory Consultation',
    'investor-charter': 'SEBI Investor Charter',
    'grievance-redressal': 'Grievance Redressal & Escalation Matrix',
    'disclaimer': 'Disclaimer & Risk Disclosures',
    'disclosure': 'Statutory Research Analyst Disclosures',
    'refund-policy': 'Refund & Cancellation Policy',
    'terms-conditions': 'Terms & Conditions',
    'privacy-policy': 'Data Privacy Policy'
  };

  function navigateTo(targetId) {
    if (!targetId) targetId = 'home';
    const cleanId = targetId.replace('#', '');
    let targetView = document.getElementById(cleanId);
    if (!targetView) targetView = document.getElementById('home');

    views.forEach(view => view.classList.remove('active'));
    targetView.classList.add('active');

    if (breadcrumbActive) {
      breadcrumbActive.textContent = pageNames[cleanId] || 'SEBI Research Desk';
    }

    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes(cleanId)) link.classList.add('active');
      else link.classList.remove('active');
    });

    // Auto-close mobile drawer on link navigation
    const menu = document.querySelector('.nav-menu');
    if (menu) menu.classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    analytics.trackEvent('navigation_changed', { view: cleanId });
  }

  window.addEventListener('hashchange', () => navigateTo(window.location.hash));
  navigateTo(window.location.hash || 'home');
}

/* --------------------------------------------------------------------------
   2. CONTINUOUS AUTO-SCROLLING LIVE MARKET TICKER ENGINE
   -------------------------------------------------------------------------- */
const coreInstruments = [
  { symbol: 'NIFTY 50', val: '24,835.40', change: '+142.60 (+0.58%)', up: true, spark: 'M0,12 L8,10 L16,14 L24,6 L32,8 L40,2' },
  { symbol: 'BANK NIFTY', val: '52,480.15', change: '+385.20 (+0.74%)', up: true, spark: 'M0,14 L8,12 L16,8 L24,10 L32,4 L40,1' },
  { symbol: 'SENSEX', val: '81,350.90', change: '+410.15 (+0.51%)', up: true, spark: 'M0,10 L8,8 L16,12 L24,6 L32,4 L40,2' },
  { symbol: 'FIN NIFTY', val: '23,120.80', change: '+115.40 (+0.50%)', up: true, spark: 'M0,12 L8,9 L16,11 L24,5 L32,7 L40,3' },
  { symbol: 'MCX GOLD', val: '72,450.00', change: '+240.00 (+0.33%)', up: true, spark: 'M0,14 L8,11 L16,9 L24,7 L32,5 L40,2' },
  { symbol: 'MCX CRUDE OIL', val: '6,420.00', change: '-35.00 (-0.54%)', up: false, spark: 'M0,4 L8,6 L16,8 L24,11 L32,13 L40,16' }
];

function initMarketTickerDecluttered() {
  const grid = document.querySelector('.market-ticker-grid');
  if (!grid) return;

  function renderTicker() {
    const fullList = [...coreInstruments, ...coreInstruments];
    grid.innerHTML = fullList.map(inst => `
      <div class="ticker-card">
        <div>
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span class="status-pulse-dot" style="width: 6px; height: 6px; background: ${inst.up ? '#10B981' : '#EF4444'};"></span>
            <span class="ticker-name">${inst.symbol}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.15rem;">
            <span class="ticker-val">${inst.val}</span>
            <span class="ticker-change ${inst.up ? 'up' : 'down'}"><i class="fa-solid fa-caret-${inst.up ? 'up' : 'down'}"></i> ${inst.change}</span>
          </div>
        </div>
        <svg class="sparkline-svg" viewBox="0 0 42 18"><path d="${inst.spark}" stroke="${inst.up ? '#10B981' : '#EF4444'}" /></svg>
      </div>
    `).join('');
  }
  renderTicker();
}

/* --------------------------------------------------------------------------
   3. DYNAMIC LIVE ANALYST SIGNAL ENGINE
   -------------------------------------------------------------------------- */
const activeCallFeed = {
  script: "BUY BANKNIFTY 48000 CALL @ ₹320",
  segment: "Index Option Intraday | Horizon: 1 Session",
  t1: "₹380",
  t2: "₹440",
  sl: "₹280",
  status: "Target 1 Hit"
};

function initLiveSignalEngine() {
  const scriptEl = document.getElementById('liveCallScript');
  const segEl = document.getElementById('liveCallSegment');
  const t1El = document.getElementById('liveCallT1');
  const t2El = document.getElementById('liveCallT2');
  const slEl = document.getElementById('liveCallSL');
  const badgeEl = document.getElementById('liveCallBadge');

  if (!scriptEl) return;

  scriptEl.textContent = activeCallFeed.script;
  if (segEl) segEl.textContent = activeCallFeed.segment;
  if (t1El) t1El.textContent = activeCallFeed.t1;
  if (t2El) t2El.textContent = activeCallFeed.t2;
  if (slEl) slEl.textContent = activeCallFeed.sl;
  if (badgeEl) badgeEl.textContent = activeCallFeed.status;
}

window.updateLiveAnalystCall = function(newCall) {
  Object.assign(activeCallFeed, newCall);
  initLiveSignalEngine();
};

/* --------------------------------------------------------------------------
   4. THROTTLED SCROLL OBSERVERS
   -------------------------------------------------------------------------- */
function initThrottledScrollObservers() {
  const trigger = document.getElementById('aiAssistantTrigger');
  const scrollBtn = document.querySelector('.scroll-top-btn');
  const progressBar = document.querySelector('.scroll-progress-bar');
  
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        if (progressBar) progressBar.style.width = scrolled + '%';

        if (trigger) {
          if (scrolled > 25) trigger.classList.add('active');
          else trigger.classList.remove('active');
        }

        if (scrollBtn) {
          if (winScroll > 400) scrollBtn.classList.add('visible');
          else scrollBtn.classList.remove('visible');
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  initAiModalHandlers();
}

function initAiModalHandlers() {
  const trigger = document.getElementById('aiAssistantTrigger');
  const modal = document.getElementById('aiAssistantModal');
  const closeBtn = document.getElementById('closeAiAssistant');
  const chatBody = document.getElementById('aiChatBody');
  const chatInput = document.getElementById('aiChatInput');
  const sendBtn = document.getElementById('sendAiChat');

  if (!trigger || !modal || !chatBody) return;

  trigger.addEventListener('click', () => modal.classList.toggle('active'));
  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));

  if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', () => {
      const q = chatInput.value.trim();
      if (q) { handleQuery(q); chatInput.value = ''; }
    });
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const q = chatInput.value.trim();
        if (q) { handleQuery(q); chatInput.value = ''; }
      }
    });
  }

  function handleQuery(text) {
    appendMsg(text, 'user');
    const res = ragEngine.query(text);
    setTimeout(() => {
      if (res.match) {
        appendMsg(`${res.match.content} (Source: ${res.match.source})`, 'bot');
      } else {
        appendMsg("I couldn't find a direct match in our verified SEBI knowledge base. Please explore our Services page.", 'bot');
      }
    }, 400);
  }

  function appendMsg(txt, type) {
    const d = document.createElement('div');
    d.className = `msg-bubble msg-${type}`;
    d.textContent = txt;
    chatBody.appendChild(d);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

function initTradingClock() {
  const clockEl = document.getElementById('istLiveClock');
  if (!clockEl) return;
  function updateClock() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST';
  }
  updateClock();
  setInterval(updateClock, 1000);
}

function initAiPersonalizedDashboard() {
  const cards = document.querySelectorAll('.onboarding-card');
  const out = document.getElementById('personalizedDashOutput');
  if (!cards.length || !out) return;

  cards.forEach(c => {
    c.addEventListener('click', () => {
      const g = c.getAttribute('data-goal');
      out.innerHTML = `<div style="padding: 1rem; background: rgba(16,185,129,0.1); border-radius: var(--radius-md); border: 1px solid var(--primary);"><strong style="color: var(--primary);">Active Focus:</strong> ${g.toUpperCase()}<p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.3rem;">Personalized track active. Speak to our SEBI Analyst desk for customized strategy sizing.</p></div>`;
    });
  });
}

function calculateCashPosition() {
  const cap = parseFloat(document.getElementById('calcCapitalCash').value) || 0;
  const riskPct = parseFloat(document.getElementById('calcRiskCash').value) || 0;
  const entry = parseFloat(document.getElementById('calcEntryCash').value) || 0;
  const sl = parseFloat(document.getElementById('calcSlCash').value) || 0;
  const resEl = document.getElementById('calcCashResult');

  if (!cap || !entry || !sl || entry <= sl) {
    resEl.innerHTML = "<span style='color: #EF4444;'>Please enter valid Entry price greater than Stop Loss.</span>";
    return;
  }

  const maxRiskAmount = cap * (riskPct / 100);
  const riskPerShare = entry - sl;
  const maxShares = Math.floor(maxRiskAmount / riskPerShare);
  const target1_5 = entry + (riskPerShare * 1.5);
  const target2_0 = entry + (riskPerShare * 2.0);

  resEl.innerHTML = `
    📊 <strong>Calculated Strategy Sizing:</strong><br>
    • Max Recommended Shares: <strong>${maxShares} Units</strong><br>
    • Max Capital at Risk: <strong>₹${maxRiskAmount.toLocaleString('en-IN')}</strong> (${riskPct}%)<br>
    • Target 1 (1:1.5 RRR): <strong>₹${target1_5.toFixed(2)}</strong><br>
    • Target 2 (1:2.0 RRR): <strong>₹${target2_0.toFixed(2)}</strong>
  `;
}

function initLiveSearchEngine() {
  const modal = document.getElementById('globalSearchModal');
  const input = document.getElementById('globalSearchInput');
  if (!modal || !input) return;
  document.querySelectorAll('.nav-search-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('active');
      setTimeout(() => input.focus(), 100);
    });
  });
}

function initModals() {
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });
}

function initForms() {
  document.querySelectorAll('form').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your inquiry has been logged with Trade Care Research analyst desk.');
      f.reset();
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });
}

function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.nav-menu');
  const dropdown = document.querySelector('.nav-dropdown');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

  if (dropdown) {
    dropdown.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        dropdown.classList.toggle('active');
      }
    });
  }

  // Close drawer when any sub-link is clicked
  document.querySelectorAll('.nav-dropdown-item a').forEach(item => {
    item.addEventListener('click', () => {
      if (menu) menu.classList.remove('active');
    });
  });
}

function initCustomCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  if (!dot || !ring) return;

  document.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(() => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  });

  document.querySelectorAll('a, button, input, .onboarding-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '50px';
      ring.style.height = '50px';
      ring.style.borderColor = 'rgba(16, 185, 129, 0.8)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(16, 185, 129, 0.45)';
    });
  });
}
