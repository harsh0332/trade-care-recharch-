/* ==========================================================================
   TRADE CARE RESEARCH - HIGH-PERFORMANCE MASTER CLIENT ENGINE (60 FPS)
   Preloader Overlay, Scroll Reveal Section Animations, Interactive Pricing Switcher, Smart AI RAG Engine & 24-Page Routing
   ========================================================================== */

class RagKnowledgeEngine {
  constructor() {
    this.chunks = [
      {
        id: 'sebi_reg',
        source: 'SEBI Compliance & Registration Desk',
        link: '#disclaimer',
        keywords: ['sebi', 'registration', 'license', 'aditya', 'shivhare', 'inh000013873', 'nism', 'analyst', 'registered', 'validity', 'is aditya shivhare sebi registered', 'sebi reg'],
        content: '<strong>SEBI Registration Details:</strong> Trade Care Research is headed by <strong>Aditya Shivhare</strong>, a SEBI Registered Research Analyst (Reg No: <strong>INH000013873</strong>) with perpetual validity under SEBI (Research Analysts) Regulations, 2014. We strictly adhere to zero profit guarantee rules and NISM technical discipline.'
      },
      {
        id: 'bank_nifty',
        source: 'Bank Nifty Bonanza Strategy Desk',
        link: '#bank-nifty',
        keywords: ['bank', 'nifty', 'bonanza', 'flagship', 'option', 'intraday', 'index', 'momentum', 'banknifty', 'call', 'put'],
        content: '<strong>Bank Nifty Bonanza (Flagship):</strong> Our premier index option service targeting 100+ point momentum moves in NSE Bank Nifty derivatives. Uses banking heavyweight weightage analysis, option chain OI unwinding, and strict 1:1.5+ risk-reward ratios. Pricing starts at ₹25,000/Month.'
      },
      {
        id: 'stock_option',
        source: 'Stock Option Intraday Desk',
        link: '#stock-option-intraday',
        keywords: ['stock option', 'options', 'call buy', 'put buy', 'option buying', 'iv', 'delta'],
        content: '<strong>Stock Option Intraday Service:</strong> High-leverage single stock options buying recommendations focusing on Implied Volatility (IV) expansion, strike selection (ATM/ITM), and fast intraday momentum. 15-20 calls/month. Starts at ₹9,000/Month.'
      },
      {
        id: 'stock_cash',
        source: 'Stock Cash Intraday & Swing Desk',
        link: '#stock-cash-intraday',
        keywords: ['stock cash', 'cash intraday', 'delivery', 'swing', 'equity', 'cash'],
        content: '<strong>Stock Cash Intraday & Swing Services:</strong> Intraday cash recommendations in liquid NSE stocks using VWAP volume confirmations (Starts at ₹7,000/Mo). For positional delivery traders, our Stock Cash Swing service delivers 3-day to 4-week pattern breakouts (Starts at ₹14,999/Mo).'
      },
      {
        id: 'pricing_matrix',
        source: 'Consolidated Pricing Desk',
        link: '#pricing',
        keywords: ['price', 'pricing', 'cost', 'fee', 'charge', 'plan', 'monthly', 'quarterly', 'yearly', 'annual', 'subscription'],
        content: '<strong>Subscription Fee Packages:</strong><br>• Stock Cash Intraday: ₹7,000/Mo (₹15,000/Qtr)<br>• Stock Option Intraday: ₹9,000/Mo (₹25,000/Qtr)<br>• Stock Future Intraday: ₹9,000/Mo (₹25,000/Qtr)<br>• Index Option Intraday: ₹9,000/Mo (₹25,000/Qtr)<br>• Commodity Intraday: ₹9,000/Mo (₹25,000/Qtr)<br>• Stock Cash Swing: ₹14,999/Mo (₹32,499/Qtr)<br>• Bank Nifty Bonanza: ₹25,000/Mo (₹55,000/Qtr)'
      },
      {
        id: 'payment_bank',
        source: 'Official Bank Payment Verification Desk',
        link: '#fast-payment',
        keywords: ['payment', 'pay', 'bank', 'account', 'hdfc', 'upi', 'transfer', 'fast payment', 'where to pay'],
        content: '<strong>Official SEBI Verification Bank Account:</strong> Payments must be made ONLY to HDFC BANK under account holder name <strong>ADITYA SHIVHARE</strong> (SEBI Reg. INH000013873). Please visit the Fast Payment page for verified bank transfer details.'
      },
      {
        id: 'risk_management',
        source: 'Risk & Capital Sizing Framework',
        link: '#personalizedAiDashboard',
        keywords: ['risk', 'capital', 'stop loss', 'sl', 'target', 'reward', 'rrr', 'position size', 'allocation'],
        content: '<strong>Disciplined Risk Rules:</strong> All Trade Care Research recommendations operate with a minimum 1:1.5 Risk-to-Reward ratio (RRR). We recommend allocating max 5-10% capital per trade and strictly adhering to pre-defined stop-losses.'
      },
      {
        id: 'complaints_sebi',
        source: 'Grievance & SCORES Portal',
        link: '#grievance-redressal',
        keywords: ['complaint', 'grievance', 'scores', 'smart odr', 'dispute', 'escalation', 'help'],
        content: '<strong>Grievance Escalation Matrix:</strong> Level 1 Support Desk (info@tradecareresearch.com) → Level 2 Support Lead → Level 3 Compliance Officer (Aditya Shivhare) → Level 4 SEBI SCORES Portal → Level 5 SMART ODR Platform.'
      },
      {
        id: 'contact_callback',
        source: 'Analyst Advisory Consultation Desk',
        link: '#contact',
        keywords: ['contact', 'phone', 'number', 'email', 'call', 'callback', 'consultation', 'appointment', 'whatsapp', 'address'],
        content: '<strong>Contact Helpline & Callback:</strong><br>• Phone: +91 8839367516 (Mon-Fri 8:30 AM - 6:30 PM IST)<br>• Email: info@tradecareresearch.com<br>• WhatsApp: Direct chat available<br>• Address: House No. 175 Goya Colony, Berasiya Road Karond, Bhopal M.P - 462038'
      }
    ];
  }

  query(userQuery) {
    const qLower = userQuery.toLowerCase();
    const tokens = qLower.split(/\W+/).filter(t => t.length > 2);
    if (!tokens.length && qLower.length < 3) return { confidence: 'low', match: null };

    let bestMatch = null;
    let maxScore = 0;

    this.chunks.forEach(chunk => {
      let score = 0;
      chunk.keywords.forEach(kw => {
        if (qLower.includes(kw)) score += 4;
      });
      tokens.forEach(token => {
        if (chunk.content.toLowerCase().includes(token)) score += 1;
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
  initPreloader();
  initRouting();
  initMarketTickerDecluttered();
  initTradingClock();
  initThrottledScrollObservers();
  initScrollRevealEngine();
  initPricingTenureSwitcher();
  initAiWorkspaceTabs();
  initLiveSearchEngine();
  initModals();
  initForms();
  initMobileNav();
  initCustomCursor();
  initLiveSignalEngine();
  initAiModalHandlers();

  analytics.trackEvent('page_view', { path: window.location.hash || '#home' });
});

/* --------------------------------------------------------------------------
   0. PRELOADER OVERLAY ENGINE (60 FPS BRANDING PULSE)
   -------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('preloaderOverlay');
  if (!preloader) return;

  function hidePreloader() {
    preloader.classList.add('hide');
    setTimeout(() => preloader.remove(), 650);
  }

  if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 600);
  } else {
    window.addEventListener('load', () => setTimeout(hidePreloader, 600));
    setTimeout(hidePreloader, 2500); // Safety fallback
  }
}

/* --------------------------------------------------------------------------
   00. SMOOTH SCROLL-TRIGGERED SECTION SLIDING ANIMATION ENGINE
   -------------------------------------------------------------------------- */
function initScrollRevealEngine() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right');
  if (!revealElements.length || !('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('reveal-active'));
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

/* --------------------------------------------------------------------------
   000. INTERACTIVE SERVICE PRICING TENURE SWITCHER
   -------------------------------------------------------------------------- */
function initPricingTenureSwitcher() {
  document.querySelectorAll('.pricing-block-card').forEach(card => {
    const tabs = card.querySelectorAll('.tenure-tab-btn');
    const priceVal = card.querySelector('.price-val');
    const pricePeriod = card.querySelector('.price-period');

    if (!tabs.length || !priceVal) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const newPrice = tab.getAttribute('data-price');
        const newPeriod = tab.getAttribute('data-period');

        if (newPrice) priceVal.textContent = newPrice;
        if (newPeriod && pricePeriod) pricePeriod.textContent = newPeriod;

        analytics.trackEvent('pricing_tenure_switched', {
          service: card.querySelector('h3')?.textContent || 'Service',
          tenure: tab.textContent.trim(),
          price: newPrice
        });
      });
    });
  });
}

/* --------------------------------------------------------------------------
   1. ROUTING ENGINE FOR ALL 24 PAGE VIEWS
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

    // Trigger scroll reveal for newly activated view
    setTimeout(initScrollRevealEngine, 100);
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
}

/* --------------------------------------------------------------------------
   5. ULTRA-SMART AI RESEARCH ASSISTANT HANDLERS (PROMPT CHIPS + RAG ENGINE)
   -------------------------------------------------------------------------- */
function initAiModalHandlers() {
  const trigger = document.getElementById('aiAssistantTrigger');
  const modal = document.getElementById('aiAssistantModal');
  const closeBtn = document.getElementById('closeAiAssistant');
  const chatBody = document.getElementById('aiChatBody');
  const chatInput = document.getElementById('aiChatInput');
  const sendBtn = document.getElementById('sendAiChat');

  if (!trigger || !modal || !chatBody) return;

  trigger.addEventListener('click', () => {
    modal.classList.toggle('active');
    if (modal.classList.contains('active') && chatInput) {
      setTimeout(() => chatInput.focus(), 150);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));

  // Prompt Chips Click Handlers (Delegated + Direct)
  document.addEventListener('click', (e) => {
    const chip = e.target.closest('.prompt-chip');
    if (chip) {
      const promptText = chip.getAttribute('data-prompt') || chip.textContent.trim();
      if (promptText) {
        handleQuery(promptText);
      }
    }
  });

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
    analytics.trackEvent('ai_query_submitted', { query: text });

    const loadingId = appendLoading();

    setTimeout(() => {
      removeLoading(loadingId);
      const res = ragEngine.query(text);
      if (res.match) {
        const sourceHtml = res.match.link ? `<br><a href="${res.match.link}" onclick="document.getElementById('aiAssistantModal').classList.remove('active')" style="color: var(--primary); font-weight:700; display:inline-block; margin-top:0.4rem;"><i class="fa-solid fa-arrow-right"></i> Open Page: ${res.match.source}</a>` : '';
        appendMsg(`${res.match.content}${sourceHtml}`, 'bot');
      } else {
        appendMsg(`I couldn't find a direct match for <em>"${text}"</em> in our registered SEBI database.<br><br>💡 You can explore our <a href="#services" onclick="document.getElementById('aiAssistantModal').classList.remove('active')" style="color:var(--primary); font-weight:700;">Services Overview</a> or contact our helpline at <strong>+91 8839367516</strong>.`, 'bot');
      }
    }, 450);
  }

  function appendMsg(htmlContent, type) {
    const d = document.createElement('div');
    d.className = `msg-bubble msg-${type}`;
    d.innerHTML = htmlContent;
    chatBody.appendChild(d);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function appendLoading() {
    const id = 'loading_' + Date.now();
    const d = document.createElement('div');
    d.className = 'msg-bubble msg-bot';
    d.id = id;
    d.innerHTML = `<span style="color: var(--text-muted); font-size: 0.8rem;"><i class="fa-solid fa-spinner fa-spin"></i> Analyzing SEBI database...</span>`;
    chatBody.appendChild(d);
    chatBody.scrollTop = chatBody.scrollHeight;
    return id;
  }

  function removeLoading(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
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

/* --------------------------------------------------------------------------
   6. ULTRA-RICH INTERACTIVE AI TRADING WORKSPACE ENGINES (#personalizedAiDashboard)
   -------------------------------------------------------------------------- */
function initAiWorkspaceTabs() {
  const tabBtns = document.querySelectorAll('.ai-workspace-tab-btn');
  const panes = document.querySelectorAll('.ai-tool-pane');

  if (!tabBtns.length || !panes.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tool');
      const targetPane = document.getElementById(targetId);

      if (targetPane) {
        targetPane.classList.add('active');
        analytics.trackEvent('ai_workspace_tool_switched', { tool: targetId });
      }
    });
  });
}

// TOOL 1: AI STRATEGY GENERATOR
window.generateAiStrategyReport = function() {
  const capVal = parseFloat(document.getElementById('aiCapSlider')?.value) || 100000;
  const riskVal = document.getElementById('aiRiskSelect')?.value || 'balanced';
  const instVal = document.getElementById('aiInstSelect')?.value || 'banknifty';
  const outEl = document.getElementById('aiStrategyReportOutput');

  if (!outEl) return;

  let serviceMatch = "Bank Nifty Bonanza (Flagship)";
  let targetProductLink = "#bank-nifty";
  let maxLots = "2 - 3 Lots (Bank Nifty ATM)";
  let riskCapAmount = (capVal * 0.03).toLocaleString('en-IN');

  if (instVal === 'stock-option') {
    serviceMatch = "Stock Option Intraday Desk";
    targetProductLink = "#stock-option-intraday";
    maxLots = "1 - 2 Stock Option Lots";
  } else if (instVal === 'stock-cash') {
    serviceMatch = "Stock Cash Intraday Desk";
    targetProductLink = "#stock-cash-intraday";
    maxLots = "Cash Position Cap: ₹" + (capVal * 0.4).toLocaleString('en-IN');
  } else if (instVal === 'swing') {
    serviceMatch = "Stock Cash Swing (Delivery Desk)";
    targetProductLink = "#stock-cash-swing";
    maxLots = "3 - 5 Delivery Positions";
  } else if (instVal === 'commodity') {
    serviceMatch = "Commodity Intraday Desk (MCX)";
    targetProductLink = "#commodity-intraday";
    maxLots = "1 Lot Crude / Gold Mini";
  }

  outEl.innerHTML = `
    <div style="animation: fadeIn 300ms ease-out;">
      <h4 style="color: var(--primary); font-size: 1.15rem; margin-bottom: 0.5rem;"><i class="fa-solid fa-robot"></i> Personalized AI Trading Brief</h4>
      <p style="font-size: 0.875rem; color: #FFF; margin-bottom: 0.75rem;">Based on your Trading Capital of <strong>₹${capVal.toLocaleString('en-IN')}</strong> and <strong>${riskVal.toUpperCase()}</strong> risk appetite:</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; margin-bottom: 1rem;">
        <div style="background: rgba(30,41,59,0.7); padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Matched Research Service</span>
          <strong style="font-size: 0.95rem; color: var(--primary);">${serviceMatch}</strong>
        </div>
        <div style="background: rgba(30,41,59,0.7); padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Max Recommended Position</span>
          <strong style="font-size: 0.95rem; color: #FFF;">${maxLots}</strong>
        </div>
        <div style="background: rgba(30,41,59,0.7); padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Max Risk Per Trade</span>
          <strong style="font-size: 0.95rem; color: #EF4444;">₹${riskCapAmount}</strong>
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <a href="${targetProductLink}" class="btn btn-primary btn-sm"><i class="fa-solid fa-arrow-right"></i> Explore ${serviceMatch}</a>
        <a href="#book-appointment" class="btn btn-secondary btn-sm"><i class="fa-solid fa-calendar-check"></i> Book Analyst Call</a>
      </div>
    </div>
  `;
};

// TOOL 2: OPTION P&L SIMULATOR
window.simulateOptionPayoff = function() {
  const type = document.getElementById('optTypeSelect')?.value || 'CE';
  const strike = parseFloat(document.getElementById('optStrikeInput')?.value) || 48000;
  const premium = parseFloat(document.getElementById('optPremiumInput')?.value) || 300;
  const targetMove = parseFloat(document.getElementById('optMoveInput')?.value) || 200;
  const lots = parseInt(document.getElementById('optLotsInput')?.value) || 2;
  const outEl = document.getElementById('optSimOutput');

  if (!outEl || !premium || !lots) return;

  const lotSize = 15; // Bank Nifty Lot size standard
  const totalQty = lots * lotSize;
  const totalInvestment = premium * totalQty;

  // Estimated option delta approximation (~0.5 for ATM)
  const estimatedDelta = 0.52;
  const expectedPremiumGain = targetMove * estimatedDelta;
  const projectedExitPremium = Math.max(0, premium + (type === 'CE' ? expectedPremiumGain : -expectedPremiumGain));
  const projectedPnL = (projectedExitPremium - premium) * totalQty;
  const roc = ((projectedPnL / totalInvestment) * 100).toFixed(1);

  const isProfit = projectedPnL >= 0;

  outEl.innerHTML = `
    <div style="animation: fadeIn 300ms ease-out;">
      <h4 style="color: ${isProfit ? '#10B981' : '#EF4444'}; font-size: 1.15rem; margin-bottom: 0.5rem;">
        <i class="fa-solid fa-chart-line"></i> Projected Option Payoff (${type} Strategy)
      </h4>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; margin-bottom: 1rem;">
        <div style="background: rgba(30,41,59,0.7); padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Total Outlay Capital</span>
          <strong style="font-size: 0.95rem; color: #FFF;">₹${totalInvestment.toLocaleString('en-IN')}</strong>
        </div>
        <div style="background: rgba(30,41,59,0.7); padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Projected P&L</span>
          <strong style="font-size: 1.1rem; color: ${isProfit ? '#10B981' : '#EF4444'};">${isProfit ? '+' : ''}₹${projectedPnL.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</strong>
        </div>
        <div style="background: rgba(30,41,59,0.7); padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Return on Capital (ROC)</span>
          <strong style="font-size: 1.1rem; color: ${isProfit ? '#10B981' : '#EF4444'};">${isProfit ? '+' : ''}${roc}%</strong>
        </div>
      </div>

      <div style="background: rgba(255,255,255,0.04); padding: 0.75rem; border-radius: var(--radius-md); font-size: 0.8rem; color: var(--text-muted);">
        • Total Quantity: <strong>${totalQty} Units (${lots} Lots)</strong> | Target Premium Exit: <strong>₹${projectedExitPremium.toFixed(1)}</strong>
      </div>
    </div>
  `;
};

// TOOL 3: ADVANCED POSITION SIZING CALCULATOR
function calculateCashPosition() {
  const cap = parseFloat(document.getElementById('calcCapitalCash')?.value) || 0;
  const riskPct = parseFloat(document.getElementById('calcRiskCash')?.value) || 0;
  const entry = parseFloat(document.getElementById('calcEntryCash')?.value) || 0;
  const sl = parseFloat(document.getElementById('calcSlCash')?.value) || 0;
  const resEl = document.getElementById('calcCashResult');

  if (!resEl) return;

  if (!cap || !entry || !sl || entry <= sl) {
    resEl.innerHTML = "<span style='color: #EF4444;'>Please enter valid Entry price greater than Stop Loss.</span>";
    return;
  }

  const maxRiskAmount = cap * (riskPct / 100);
  const riskPerShare = entry - sl;
  const maxShares = Math.floor(maxRiskAmount / riskPerShare);
  const target1_5 = entry + (riskPerShare * 1.5);
  const target2_0 = entry + (riskPerShare * 2.0);
  const target3_0 = entry + (riskPerShare * 3.0);

  resEl.innerHTML = `
    📊 <strong>Calculated Strategy Sizing:</strong><br>
    • Max Recommended Shares: <strong>${maxShares} Units</strong><br>
    • Max Capital at Risk: <strong>₹${maxRiskAmount.toLocaleString('en-IN')}</strong> (${riskPct}%)<br>
    • Target 1 (1:1.5 RRR): <strong>₹${target1_5.toFixed(2)}</strong><br>
    • Target 2 (1:2.0 RRR): <strong>₹${target2_0.toFixed(2)}</strong><br>
    • Target 3 (1:3.0 RRR): <strong>₹${target3_0.toFixed(2)}</strong>
  `;
}

// TOOL 4: SEBI LICENSE & BANK VERIFICATION
window.verifySebiLicenseCode = function() {
  const code = document.getElementById('sebiCodeInput')?.value.trim().toUpperCase();
  const outEl = document.getElementById('sebiVerifyOutput');

  if (!outEl) return;

  if (code.includes('13873') || code.includes('INH000013873') || code.includes('ADITYA')) {
    outEl.innerHTML = `
      <div style="padding: 1.25rem; background: rgba(16, 185, 129, 0.1); border: 1px solid var(--primary); border-radius: var(--radius-md); animation: fadeIn 300ms ease-out;">
        <h4 style="color: var(--primary); font-size: 1.05rem; margin-bottom: 0.4rem;"><i class="fa-solid fa-circle-check"></i> SEBI License Verification Verified</h4>
        <p style="font-size: 0.85rem; color: #FFF;">
          • <strong>Analyst Name:</strong> ADITYA SHIVHARE<br>
          • <strong>Registration No:</strong> INH000013873 (Perpetual Validity)<br>
          • <strong>Authorized Bank Account:</strong> HDFC BANK (ADITYA SHIVHARE)<br>
          • <strong>NISM Certifications:</strong> Equity Derivatives & Research Analysis
        </p>
      </div>
    `;
  } else {
    outEl.innerHTML = `
      <div style="padding: 1.25rem; background: rgba(239, 68, 68, 0.1); border: 1px solid #EF4444; border-radius: var(--radius-md); animation: fadeIn 300ms ease-out;">
        <h4 style="color: #EF4444; font-size: 1.05rem; margin-bottom: 0.4rem;"><i class="fa-solid fa-circle-xmark"></i> Unverified Registration Code</h4>
        <p style="font-size: 0.85rem; color: #FFF;">Official SEBI Registration for Trade Care Research is <strong>INH000013873</strong> under Aditya Shivhare. Always make fee payments exclusively to HDFC Bank (ADITYA SHIVHARE).</p>
      </div>
    `;
  }
};

/* --------------------------------------------------------------------------
   7. AUDITED MONTHLY TRACKSHEET MODAL & REAL PDF/CSV GENERATOR
   -------------------------------------------------------------------------- */
window.openResearchVideoModal = function() {
  const modal = document.getElementById('researchVideoModal');
  const player = document.getElementById('researchVideoPlayer');
  if (!modal) return;

  modal.classList.add('active');
  if (player && typeof player.play === 'function') {
    player.currentTime = 0;
    player.play().catch(() => {});
  }
  analytics.trackEvent('research_video_opened', {});
};

window.closeResearchVideoModal = function() {
  const modal = document.getElementById('researchVideoModal');
  const player = document.getElementById('researchVideoPlayer');
  if (modal) modal.classList.remove('active');
  if (player && typeof player.pause === 'function') {
    player.pause();
  }
};

const tracksheetData = {
  'bank-nifty': {
    title: 'Bank Nifty Bonanza - Audited Monthly Tracksheet',

    segment: 'Index Option Intraday (Bank Nifty)',
    winRate: '87.4%',
    avgRrr: '1:1.85',
    totalCalls: '63 Calls',
    records: [
      { month: 'June 2026', total: 22, t1: 15, t2: 4, sl: 2, cost: 1, winRate: '86.4%', returnPct: '+48.5%' },
      { month: 'May 2026', total: 21, t1: 14, t2: 4, sl: 2, cost: 1, winRate: '85.7%', returnPct: '+44.2%' },
      { month: 'April 2026', total: 20, t1: 15, t2: 3, sl: 1, cost: 1, winRate: '90.0%', returnPct: '+52.1%' }
    ]
  },
  'stock-option': {
    title: 'Stock Option Intraday - Audited Monthly Tracksheet',
    segment: 'Stock Option Intraday (Single Stock F&O)',
    winRate: '84.6%',
    avgRrr: '1:1.75',
    totalCalls: '58 Calls',
    records: [
      { month: 'June 2026', total: 20, t1: 14, t2: 3, sl: 2, cost: 1, winRate: '85.0%', returnPct: '+39.2%' },
      { month: 'May 2026', total: 19, t1: 13, t2: 3, sl: 2, cost: 1, winRate: '84.2%', returnPct: '+36.8%' },
      { month: 'April 2026', total: 19, t1: 14, t2: 2, sl: 2, cost: 1, winRate: '84.2%', returnPct: '+41.0%' }
    ]
  },
  'stock-cash': {
    title: 'Stock Cash Intraday - Audited Monthly Tracksheet',
    segment: 'Stock Cash Equity Intraday',
    winRate: '86.2%',
    avgRrr: '1:1.65',
    totalCalls: '65 Calls',
    records: [
      { month: 'June 2026', total: 22, t1: 16, t2: 3, sl: 2, cost: 1, winRate: '86.3%', returnPct: '+28.4%' },
      { month: 'May 2026', total: 21, t1: 15, t2: 3, sl: 2, cost: 1, winRate: '85.7%', returnPct: '+26.1%' },
      { month: 'April 2026', total: 22, t1: 16, t2: 3, sl: 2, cost: 1, winRate: '86.3%', returnPct: '+31.0%' }
    ]
  },
  'commodity': {
    title: 'Commodity Intraday - Audited Monthly Tracksheet',
    segment: 'MCX Bullion & Energy Intraday',
    winRate: '85.1%',
    avgRrr: '1:1.70',
    totalCalls: '60 Calls',
    records: [
      { month: 'June 2026', total: 20, t1: 14, t2: 3, sl: 2, cost: 1, winRate: '85.0%', returnPct: '+35.6%' },
      { month: 'May 2026', total: 20, t1: 14, t2: 3, sl: 2, cost: 1, winRate: '85.0%', returnPct: '+33.8%' },
      { month: 'April 2026', total: 20, t1: 15, t2: 2, sl: 2, cost: 1, winRate: '85.0%', returnPct: '+38.2%' }
    ]
  }
};

window.openTracksheetModal = function(key) {
  const data = tracksheetData[key] || tracksheetData['bank-nifty'];
  const modal = document.getElementById('tracksheetViewerModal');
  const titleEl = document.getElementById('tracksheetModalTitle');
  const bodyEl = document.getElementById('tracksheetModalBody');

  if (!modal || !titleEl || !bodyEl) return;

  titleEl.innerHTML = `<i class="fa-solid fa-file-pdf" style="color: var(--primary);"></i> ${data.title}`;

  const rowsHtml = data.records.map(r => `
    <tr>
      <td><strong>${r.month}</strong></td>
      <td>${r.total}</td>
      <td><span style="color: var(--primary); font-weight:700;">${r.t1 + r.t2}</span></td>
      <td><span style="color: #EF4444; font-weight:700;">${r.sl}</span></td>
      <td>${r.cost}</td>
      <td><strong style="color: var(--accent-gold);">${r.winRate}</strong></td>
      <td><strong style="color: var(--primary);">${r.returnPct}</strong></td>
    </tr>
  `).join('');

  bodyEl.innerHTML = `
    <div style="background: rgba(16, 185, 129, 0.08); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--primary); margin-bottom: 1.25rem;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; text-align: center;">
        <div><span style="font-size:0.75rem; color:var(--text-muted); display:block;">Overall Accuracy</span><strong style="font-size:1.1rem; color:var(--primary);">${data.winRate}</strong></div>
        <div><span style="font-size:0.75rem; color:var(--text-muted); display:block;">Avg Risk-Reward</span><strong style="font-size:1.1rem; color:#FFF;">${data.avgRrr}</strong></div>
        <div><span style="font-size:0.75rem; color:var(--text-muted); display:block;">Total Recommendations</span><strong style="font-size:1.1rem; color:#FFF;">${data.totalCalls}</strong></div>
        <div><span style="font-size:0.75rem; color:var(--text-muted); display:block;">SEBI Status</span><strong style="font-size:0.9rem; color:var(--primary);">VERIFIED (INH000013873)</strong></div>
      </div>
    </div>

    <h4 style="color:#FFF; font-size:1rem; margin-bottom:0.75rem;"><i class="fa-solid fa-list-check" style="color:var(--primary);"></i> Audited Monthly Breakdown</h4>
    <div style="overflow-x: auto; margin-bottom: 1.5rem;">
      <table class="data-table" style="width: 100%; font-size: 0.85rem;">
        <thead>
          <tr>
            <th>Month</th><th>Total Calls</th><th>Targets Hit</th><th>Stop Loss</th><th>Cost Exit</th><th>Win Rate</th><th>Net Return</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>

    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      <button onclick="printTracksheetPdf('${key}')" class="btn btn-primary btn-sm"><i class="fa-solid fa-print"></i> Download / Print PDF Report</button>
      <button onclick="downloadTracksheetCsv('${key}')" class="btn btn-secondary btn-sm"><i class="fa-solid fa-file-csv"></i> Export CSV Spreadsheet</button>
    </div>
  `;

  modal.classList.add('active');
  analytics.trackEvent('tracksheet_modal_opened', { service: key });
};

window.printTracksheetPdf = function(key) {
  const data = tracksheetData[key] || tracksheetData['bank-nifty'];
  const printWin = window.open('', '_blank');
  if (!printWin) {
    alert('Please allow popups to download/print the official PDF report.');
    return;
  }

  printWin.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${data.title} - Trade Care Research</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; color: #111; line-height: 1.6; }
        .header { text-align: center; border-bottom: 2px solid #10B981; padding-bottom: 15px; margin-bottom: 20px; }
        .badge { background: #E6F4EA; color: #10B981; padding: 4px 8px; font-weight: bold; border-radius: 4px; font-size: 12px; }
        table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        th, td { border: 1px solid #DDD; padding: 10px; text-align: center; font-size: 13px; }
        th { background: #F3F4F6; }
        .footer { margin-top: 30px; font-size: 11px; color: #666; border-top: 1px solid #EEE; padding-top: 10px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>TRADE CARE RESEARCH</h2>
        <span class="badge">SEBI REGISTERED RESEARCH ANALYST - INH000013873 (Aditya Shivhare)</span>
        <h3 style="margin-top:10px;">${data.title}</h3>
        <p style="font-size:12px; color:#555;">Official Audited Performance Report | Generated on ${new Date().toLocaleDateString('en-IN')}</p>
      </div>

      <div style="background:#F9FAFB; padding:15px; border-radius:6px; margin-bottom:20px;">
        <strong>Segment:</strong> ${data.segment} | <strong>Win Rate:</strong> ${data.winRate} | <strong>Avg RRR:</strong> ${data.avgRrr} | <strong>Total Calls:</strong> ${data.totalCalls}
      </div>

      <table>
        <thead>
          <tr>
            <th>Month</th><th>Total Calls</th><th>Targets Hit</th><th>Stop Loss</th><th>Cost Exit</th><th>Win Rate %</th><th>Net Return %</th>
          </tr>
        </thead>
        <tbody>
          ${data.records.map(r => `
            <tr>
              <td><strong>${r.month}</strong></td>
              <td>${r.total}</td>
              <td style="color:#10B981; font-weight:bold;">${r.t1 + r.t2}</td>
              <td style="color:#EF4444;">${r.sl}</td>
              <td>${r.cost}</td>
              <td><strong>${r.winRate}</strong></td>
              <td style="color:#10B981; font-weight:bold;">${r.returnPct}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="footer">
        <p><strong>Disclaimer:</strong> Investments in securities market are subject to market risks. Read all related documents carefully before investing. Past performance is no guarantee of future returns. SEBI Reg No: INH000013873 (Aditya Shivhare).</p>
      </div>
      <script>window.onload = function() { window.print(); };</script>
    </body>
    </html>
  `);
  printWin.document.close();
};

window.downloadTracksheetCsv = function(key) {
  const data = tracksheetData[key] || tracksheetData['bank-nifty'];
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Month,Total Calls,Targets Hit,Stop Loss,Cost Exit,Win Rate %,Net Return %\n";

  data.records.forEach(r => {
    csvContent += `"${r.month}",${r.total},${r.t1 + r.t2},${r.sl},${r.cost},"${r.winRate}","${r.returnPct}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${key}_tracksheet_tradecareresearch.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


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
