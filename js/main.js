"use strict";

/**
 * إعدادات عامة
 */
const STORAGE_KEYS = {
  theme: "site_theme",
  accent: "site_accent",
  lang: "site_lang",
};

const DEFAULTS = {
  accentHex: "#22c55e",
  mailTo: "fayezalshami.dev@gmail.com", // غيّره لإيميلك
};

/**
 * ترجمة الموقع (عربي / إنجليزي)
 * - data-i18n => textContent
 * - data-i18n-html => innerHTML
 * - data-i18n-placeholder => placeholder
 * - data-i18n-aria => aria-label
 */
const TRANSLATIONS = {
  ar: {
    skip_to_content: "تخطي إلى المحتوى",
    brand_name: "فايز الشامي",

    nav_about: "من أنا",
    nav_services: "خدماتي",
    nav_projects: "المشاريع",
    nav_payments: "طرق الدفع",
    nav_contact: "تواصل",

    hero_title: "أهلاً، أنا فايز!",
    hero_title_before: "أهلاً، أنا ",
    hero_title_name: "فايز",
    hero_title_after: "!",
    hero_subtitle:
      'مطور ويب بخبرة، <span class="accent">أستمتع</span> ببناء منتجات رقمية <span class="accent">سريعة</span> و<span class="accent">متاحة للجميع</span>.',
    hero_cta: "من أنا",
    hero_cta_secondary: "مشاريعي",
    scroll_hint: "اسحب للأسفل",

    about_title: "من أنا",
    about_subtitle:
      "هندسة أتمتة وبنية خلفية لأنظمة الدفع والتكاملات التقنية المعقدة.",
    about_expertise_title: "مجالات خبرتي التقنية",
    about_brief:
      "أنا فايز الشامي، أعمل على تصميم وتنفيذ أنظمة أتمتة وبنية خلفية متخصصة في المدفوعات الرقمية، تشغيل البوتات، والتكاملات الحساسة التي تحتاج استقراراً وأماناً في بيئات الإنتاج.",
    about_expertise_html:
      '<div class="skill-group"><h4 class="skill-group__title">🧠 Core Backend & Automation</h4><div class="skill-tags"><span class="skill-pill">Python</span><span class="skill-pill">FastAPI</span><span class="skill-pill">FastAPI Backend</span><span class="skill-pill">Laravel</span><span class="skill-pill">Laravel Backend</span><span class="skill-pill">PHP</span><span class="skill-pill">REST APIs</span><span class="skill-pill">بناء APIs مخصصة</span><span class="skill-pill">Webhooks</span><span class="skill-pill">Telegram Bot API</span><span class="skill-pill">تطوير بوتات تيليجرام</span><span class="skill-pill">Async Processing</span></div></div><div class="skill-group"><h4 class="skill-group__title">💳 Payment & Transaction Systems</h4><div class="skill-tags"><span class="skill-pill">أتمتة المعاملات المالية</span><span class="skill-pill">Payment Gateway Integration</span><span class="skill-pill">تكامل بوابات الدفع (حتى بدون API رسمي)</span><span class="skill-pill">Custom Payment Automation</span><span class="skill-pill">Crypto Payment Handling</span><span class="skill-pill">Binance API</span><span class="skill-pill">Payeer API</span><span class="skill-pill">CoinEx Integration</span><span class="skill-pill">Web Scraping for Financial Flows</span><span class="skill-pill">Transaction Logging Systems</span><span class="skill-pill">Transaction Handling</span></div></div><div class="skill-group"><h4 class="skill-group__title">🖥 System Architecture & Infrastructure</h4><div class="skill-tags"><span class="skill-pill">Linux Server Environment</span><span class="skill-pill">VPS Deployment</span><span class="skill-pill">نشر الأنظمة على VPS و Linux</span><span class="skill-pill">Nginx</span><span class="skill-pill">Background Workers</span><span class="skill-pill">Automation Pipelines</span><span class="skill-pill">Process Monitoring</span><span class="skill-pill">System Logging & Monitoring</span><span class="skill-pill">أنظمة المراقبة والتسجيل</span></div></div><div class="skill-group"><h4 class="skill-group__title">🌐 Networking & Security Awareness</h4><div class="skill-tags"><span class="skill-pill">CCNA (Networking knowledge)</span><span class="skill-pill">Networking Fundamentals (CCNA Track)</span><span class="skill-pill">TCP/IP</span><span class="skill-pill">DNS</span><span class="skill-pill">Firewalls Concepts</span><span class="skill-pill">Secure API Design</span><span class="skill-pill">مفاهيم الأمن السيبراني</span><span class="skill-pill">Basic Penetration Testing Awareness</span><span class="skill-pill">فحص التطبيقات</span><span class="skill-pill">Reverse Engineering Fundamentals</span><span class="skill-pill">مفاهيم الهندسة العكسية</span></div></div><div class="skill-group"><h4 class="skill-group__title">🗄 Databases & ⚙️ Dev Tools</h4><div class="skill-tags"><span class="skill-pill">إدارة قواعد بيانات</span><span class="skill-pill">MySQL</span><span class="skill-pill">PostgreSQL</span><span class="skill-pill">Database Optimization</span><span class="skill-pill">Git</span><span class="skill-pill">GitHub</span><span class="skill-pill">Postman</span><span class="skill-pill">cPanel</span><span class="skill-pill">SSH</span></div></div>',
    about_btn_projects: "اذهب إلى المشاريع",
    about_method_title: "منهجيتي في بناء الأنظمة",
    about_method_intro:
      "أبني الأنظمة كمنظومة متكاملة، لا كوظائف منفصلة: منطق عمل واضح، تكاملات موثوقة، ومراقبة دقيقة للحالة التشغيلية.",
    about_method_1:
      "تحليل تدفق المعاملة من نقطة الإدخال حتى التسوية النهائية قبل بدء التنفيذ.",
    about_method_2:
      "تقسيم النظام إلى طبقات واضحة (خدمات، تكاملات، منطق أعمال) لتسهيل الصيانة والتوسع.",
    about_method_3:
      "استخدام APIs وWebhooks وأنماط المعالجة غير المتزامنة لمعالجة الحالات الحرجة بأمان.",
    about_method_4:
      "اعتماد Logging وMonitoring فعليين لتتبع الأخطاء، صحة التكاملات، وسلوك المعاملات.",
    about_method_5:
      "نشر الأنظمة على VPS/Linux بإعدادات تشغيل مستقرة، مع إدارة صلاحيات واتصال آمن.",
    about_method_6:
      "اختبار السلوك الفعلي للتطبيق وتحسين الأداء والموثوقية قبل توسيع الميزات.",
    about_note:
      "أتعامل بعقلية بنيوية (Infrastructure Mindset): الاستقرار، القابلية للتوسع، والأمان أولاً.",

    services_title: "خدماتي الرئيسية",
    services_subtitle:
      "حلول تقنية تجمع بين الأتمتة والأمان وقابلية التوسع لتخدم مشروعك من البداية للنهاية.",
    service_1_title: "تطوير بوتات تيليجرام",
    service_1_desc:
      "بوتات احترافية لمتاجر الشحن، أنظمة الوكلاء، الخدمات الطلابية، وساطة العملات، وإدارة المنتجات.",
    service_2_title: "أنظمة دفع مؤتمتة",
    service_2_desc:
      "بناء أنظمة دفع ذكية والتكامل مع بوابات محلية ودولية حتى في غياب API رسمي.",
    service_3_title: "تطوير APIs مخصصة",
    service_3_desc:
      "تصميم وتطوير واجهات برمجية للتكامل مع أي منصة خارجية بأعلى معايير الأمان.",
    service_4_title: "أتمتة العمليات",
    service_4_desc:
      "حلول أتمتة ذكية لتبسيط سير العمل وزيادة الكفاءة مع صيانة ودعم تقني مستمر.",
    service_5_title: "تطوير مواقع وتطبيقات",
    service_5_desc:
      "تطوير Full-Stack لمواقع وتطبيقات متكاملة باستخدام Django و FastAPI.",
    service_6_title: "أمان وموثوقية",
    service_6_desc:
      "تطبيق أفضل ممارسات الأمان السيبراني وبناء أنظمة قابلة للتوسع والاستمرارية.",

    projects_title: "المشاريع",
    projects_subtitle:
      "اضغط على أي مشروع لعرض القصة التقنية والتفاصيل التنفيذية.",
    p1_title: "مشروع: Snake",
    p1_desc:
      "إعادة تصميم للعبة Snake الكلاسيكية بواجهة بسيطة مع تأثيرات جميلة.",
    p2_title: "مشروع: Paddle Pong",
    p2_desc: "نسخة متعددة اللاعبين مستوحاة من Pong مع لمسة حديثة وتجربة ممتعة.",
    p3_title: "مشروع: Parapantest",
    p3_desc:
      "نظام اختبارات ومحاكاة امتحانات — مثال لواجهة منتج حقيقي مع تصميم نظيف.",
    check_it: "شاهد المشروع",
    project_open_hint: "اضغط للقراءة التفصيلية",
    project_private: "رابط خاص",
    project_modal_label: "تفاصيل المشروع",
    project_modal_visit: "فتح الرابط",
    project_modal_close: "إغلاق",

    payments_title: "طرق الدفع المتوفرة",
    payments_subtitle: "",
    payments_note:
      "",
    bank_label: "بنك محلي",

    contact_title: "تواصل معي",
    contact_label_title: "العنوان",
    contact_label_message: "الرسالة",
    contact_title_ph: "ما موضوع رسالتك؟",
    contact_message_ph: "اكتب رسالتك هنا...",
    contact_submit: "إرسال",
    contact_hint:
      "",

    footer_brand_title: "فايز الشامي",
    footer_brand_desc:
      'مطور ويب بخبرة يبني منتجات <span class="accent">سريعة</span> و<span class="accent">متاحة</span> بتجربة مميزة.',
    footer_design_title: "Design",
    footer_design_text:
      '<a class="link" href="https://fayezalshami.com/" target="_blank" rel="noopener">Fayez Alshami</a>',
    footer_social_title: "Social",
    footer_copy: "© جميع الحقوق محفوظة",

    color_picker_title: "لون الموقع",
    custom_color_label: "لون مخصص",
    color_picker_hint: "سيتم حفظ اللون تلقائياً.",
    color_picker_aria: "اختر لون الموقع",

    toast_sent: "تم تجهيز الرسالة ✨ سيتم فتح البريد الآن",
    toast_missing: "رجاءً اكتب العنوان والرسالة",
  },

  en: {
    skip_to_content: "Skip to content",
    brand_name: "Fayez Alshami",

    nav_about: "About",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_payments: "Payments",
    nav_contact: "Contact",

    hero_title: "Hey, I'm Fayez!",
    hero_title_before: "Hey, I'm ",
    hero_title_name: "Fayez",
    hero_title_after: "!",
    hero_subtitle:
      'Experienced web developer who <span class="accent">enjoys</span> building <span class="accent">fast</span> and <span class="accent">accessible</span> digital products.',
    hero_cta: "About me",
    hero_cta_secondary: "My projects",
    scroll_hint: "Scroll down",

    about_title: "About Me",
    about_subtitle:
      "Automation infrastructure and backend engineering for payment systems and complex integrations.",
    about_expertise_title: "Technical Expertise Domains",
    about_brief:
      "I am Fayez Alshami. I design and implement automation-focused backend systems for digital payments, bot operations, and integration-heavy environments where reliability and security are mandatory.",
    about_expertise_html:
      '<div class="skill-group"><h4 class="skill-group__title">🧠 Core Backend & Automation</h4><div class="skill-tags"><span class="skill-pill">Python</span><span class="skill-pill">FastAPI</span><span class="skill-pill">FastAPI Backend</span><span class="skill-pill">Laravel</span><span class="skill-pill">Laravel Backend</span><span class="skill-pill">PHP</span><span class="skill-pill">REST APIs</span><span class="skill-pill">Custom API Engineering</span><span class="skill-pill">Webhooks</span><span class="skill-pill">Telegram Bot API</span><span class="skill-pill">Telegram Bot Systems</span><span class="skill-pill">Async Processing</span></div></div><div class="skill-group"><h4 class="skill-group__title">💳 Payment & Transaction Systems</h4><div class="skill-tags"><span class="skill-pill">Financial Transaction Automation</span><span class="skill-pill">Payment Gateway Integration</span><span class="skill-pill">Integrations without official APIs</span><span class="skill-pill">Custom Payment Automation</span><span class="skill-pill">Crypto Payment Handling</span><span class="skill-pill">Binance API</span><span class="skill-pill">Payeer API</span><span class="skill-pill">CoinEx Integration</span><span class="skill-pill">Web Scraping for Financial Flows</span><span class="skill-pill">Transaction Logging Systems</span><span class="skill-pill">Transaction Handling</span></div></div><div class="skill-group"><h4 class="skill-group__title">🖥 System Architecture & Infrastructure</h4><div class="skill-tags"><span class="skill-pill">Linux Server Environment</span><span class="skill-pill">VPS Deployment</span><span class="skill-pill">Production deployment on VPS/Linux</span><span class="skill-pill">Nginx</span><span class="skill-pill">Background Workers</span><span class="skill-pill">Automation Pipelines</span><span class="skill-pill">Process Monitoring</span><span class="skill-pill">System Logging & Monitoring</span></div></div><div class="skill-group"><h4 class="skill-group__title">🌐 Networking & Security Awareness</h4><div class="skill-tags"><span class="skill-pill">CCNA (Networking knowledge)</span><span class="skill-pill">Networking Fundamentals (CCNA Track)</span><span class="skill-pill">TCP/IP</span><span class="skill-pill">DNS</span><span class="skill-pill">Firewalls Concepts</span><span class="skill-pill">Secure API Design</span><span class="skill-pill">Cybersecurity Concepts</span><span class="skill-pill">Basic Penetration Testing Awareness</span><span class="skill-pill">Application Testing</span><span class="skill-pill">Reverse Engineering Fundamentals</span></div></div><div class="skill-group"><h4 class="skill-group__title">🗄 Databases & ⚙️ Dev Tools</h4><div class="skill-tags"><span class="skill-pill">Database Management</span><span class="skill-pill">MySQL</span><span class="skill-pill">PostgreSQL</span><span class="skill-pill">Database Optimization</span><span class="skill-pill">Git</span><span class="skill-pill">GitHub</span><span class="skill-pill">Postman</span><span class="skill-pill">cPanel</span><span class="skill-pill">SSH</span></div></div>',
    about_btn_projects: "Go to projects",
    about_method_title: "System-Building Methodology",
    about_method_intro:
      "I engineer systems as structured infrastructures, not isolated features: clear flow design, resilient integrations, and operational observability.",
    about_method_1:
      "Map the full transaction lifecycle before implementation starts.",
    about_method_2:
      "Separate architecture into clear layers (services, integrations, business logic).",
    about_method_3:
      "Use APIs, webhooks, and async workflows to handle critical operations safely.",
    about_method_4:
      "Implement practical logging and monitoring for errors, integrations, and transaction states.",
    about_method_5:
      "Deploy on VPS/Linux with stable runtime setup and secure access practices.",
    about_method_6:
      "Validate real behavior, then optimize reliability and performance before expanding features.",
    about_note:
      "Infrastructure mindset first: stability, scalability, and security over hype.",

    services_title: "Core Services",
    services_subtitle:
      "Practical technical solutions that combine automation, security, and scalability for end-to-end delivery.",
    service_1_title: "Telegram Bot Development",
    service_1_desc:
      "Professional bots for shipping stores, agent systems, student services, currency brokerage, and product management.",
    service_2_title: "Automated Payment Systems",
    service_2_desc:
      "Building smart payment systems and integrating local/global gateways even when no official API is available.",
    service_3_title: "Custom API Development",
    service_3_desc:
      "Designing and developing secure APIs for seamless integration with any external platform.",
    service_4_title: "Process Automation",
    service_4_desc:
      "Intelligent automation solutions to streamline workflows, improve efficiency, and provide ongoing technical support.",
    service_5_title: "Web & App Development",
    service_5_desc:
      "Full-stack development for integrated websites and applications using Django and FastAPI.",
    service_6_title: "Security & Reliability",
    service_6_desc:
      "Applying cybersecurity best practices and building systems designed for scalability and long-term reliability.",

    projects_title: "Projects",
    projects_subtitle:
      "Click any project card to open its technical story and implementation details.",
    p1_title: "Project: Snake",
    p1_desc:
      "A reinterpretation of the classic Snake game with a clean UI and smooth effects.",
    p2_title: "Project: Paddle Pong",
    p2_desc:
      "A multiplayer reinterpretation of Pong with a modern twist and fun gameplay.",
    p3_title: "Project: Parapantest",
    p3_desc:
      "Quiz & exam simulation UI example, designed as a real product layout.",
    check_it: "Check it",
    project_open_hint: "Click to read the full story",
    project_private: "Private link",
    project_modal_label: "Project details",
    project_modal_visit: "Open link",
    project_modal_close: "Close",

    payments_title: "Payment Methods",
    payments_subtitle: "",
    payments_note:
      "",
    bank_label: "Local Bank",

    contact_title: "Contact me",
    contact_label_title: "Title",
    contact_label_message: "Message",
    contact_title_ph: "What are you writing about?",
    contact_message_ph: "Full message comes here...",
    contact_submit: "Submit",
    contact_hint:
      "",

    footer_brand_title: "Fayez Alshami",
    footer_brand_desc:
      'Experienced web developer building <span class="accent">fast</span> and <span class="accent">accessible</span> digital products.',
    footer_design_title: "Design",
    footer_design_text:
      '<a class="link" href="https://fayezalshami.com/" target="_blank" rel="noopener">Fayez Alshami</a>',
    footer_social_title: "Social",
    footer_copy: "© All rights reserved",

    color_picker_title: "Theme color",
    custom_color_label: "Custom color",
    color_picker_hint: "Your choice is saved automatically.",
    color_picker_aria: "Pick theme color",

    toast_sent: "Message prepared ✨ Opening your mail client…",
    toast_missing: "Please fill title and message",
  },
};

/**
 * أدوات بسيطة للألوان
 */
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "").trim();
  const isShort = clean.length === 3;
  const full = isShort
    ? clean
        .split("")
        .map((c) => c + c)
        .join("")
    : clean;

  const num = parseInt(full, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return { r, g, b };
}

// returns {h, s, l} where s/l are 0-100
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  const d = max - min;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r:
        h = ((g - b) / d) % 6;
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
    if (h < 0) h += 360;
  }

  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function isColorLight({ r, g, b }) {
  // relative luminance-ish
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 160;
}

/**
 * تطبيق لون الثيم (accent) على CSS variables + meta theme-color
 */
function applyAccent(hex) {
  const root = document.documentElement;
  const meta = document.getElementById("themeColorMeta");
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  root.style.setProperty("--accent", `${hsl.h} ${hsl.s}% ${hsl.l}%`);

  const ink = isColorLight(rgb) ? "#0b0f12" : "#f5f7fb";
  root.style.setProperty("--accent-ink", ink);

  if (meta) meta.setAttribute("content", hex);

  localStorage.setItem(STORAGE_KEYS.accent, hex);

  // set active swatch UI
  document.querySelectorAll(".swatch").forEach((btn) => {
    btn.classList.toggle(
      "is-active",
      btn.dataset.color?.toLowerCase() === hex.toLowerCase(),
    );
  });

  const custom = document.getElementById("customColor");
  if (custom) custom.value = hex;
}

/**
 * Theme: dark/light
 */
function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEYS.theme);
  if (saved === "light" || saved === "dark") return saved;

  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

function syncThemeToggleUI(theme) {
  const switcher = document.getElementById("theme-switcher");
  if (!switcher) return;

  switcher.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.classList.toggle("theme-light", theme === "light");
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  syncThemeToggleUI(theme);
}

/**
 * Language
 */
function getInitialLang() {
  const saved = localStorage.getItem(STORAGE_KEYS.lang);
  if (saved === "ar" || saved === "en") return saved;
  return "en";
}

function t(lang, key) {
  return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
}

function applyLanguage(lang) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";

  // Marquee direction: RTL => reverse (right to left), LTR => normal
  html.style.setProperty(
    "--marquee-direction",
    lang === "ar" ? "reverse" : "normal",
  );

  // Update all i18n nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(lang, key);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    el.innerHTML = t(lang, key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(lang, key));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    el.setAttribute("aria-label", t(lang, key));
  });

  const langBtn = document.getElementById("langToggle");
  if (langBtn) langBtn.textContent = lang === "ar" ? "EN" : "AR";

  localStorage.setItem(STORAGE_KEYS.lang, lang);
}

/**
 * Header show/hide on scroll + Back to top
 */
function setupScrollUI() {
  const header = document.getElementById("header");
  const toTop = document.getElementById("toTop");

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const y = window.scrollY || 0;
      const threshold = window.innerHeight * 0.25;

      if (header) header.classList.toggle("hidden", y <= threshold);
      if (toTop) toTop.classList.toggle("is-visible", y > 600);

      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/**
 * Scrollspy: set active nav link by section visible
 */
function setupScrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav__link"));
  const targets = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const map = new Map();
  links.forEach((a) => map.set(a.getAttribute("href"), a));

  const obs = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const id = "#" + visible.target.id;

      links.forEach((l) => l.classList.remove("is-active"));
      const active = map.get(id);
      if (active) active.classList.add("is-active");
    },
    { root: null, threshold: [0.25, 0.4, 0.55] },
  );

  targets.forEach((sec) => obs.observe(sec));
}

/**
 * Reveal on scroll
 */
function setupReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  nodes.forEach((n) => obs.observe(n));
}

/**
 * Hero name particle effect: particles form perfect curly braces { } on hover
 * Typographic brace outline: parabolic curve for smooth { and } shape
 */
function getBraceShapePoints() {
  const points = [];
  const steps = 36;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = 0.06 + t * 0.88;
    const t2 = t * t;
    const t1 = t;
    const leftX = 0.32 - 0.8 * t1 + 0.8 * t2;
    const rightX = 0.68 + 0.8 * t1 - 0.8 * t2;
    points.push({ x: leftX, y });
    points.push({ x: rightX, y });
  }
  return points;
}

function initHeroParticles() {
  const wrap = document.getElementById("heroNameWrap");
  const canvas = document.getElementById("heroParticles");
  if (!wrap || !canvas) return;

  const ctx = canvas.getContext("2d");
  const shapePoints = getBraceShapePoints();
  const particleCount = Math.min(120, shapePoints.length * 2);
  let particles = [];
  let hover = false;
  let rafId = null;
  let visible = true;
  let time = 0;

  function getParticleColor() {
    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();
    if (accent) return `hsl(${accent})`;
    return "hsl(142, 70%, 46%)";
  }

  function createParticles() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = wrap.getBoundingClientRect();
    const w = Math.round(rect.width);
    const h = Math.round(rect.height);
    if (!w || !h) return;
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        tx: 0.5,
        ty: 0.5,
        vx: 0,
        vy: 0,
        shapeIndex: i % shapePoints.length,
      });
    }
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = wrap.getBoundingClientRect();
    const w = Math.round(rect.width);
    const h = Math.round(rect.height);
    if (w <= 0 || h <= 0) return;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (particles.length === 0) createParticles();
  }

  function tick() {
    if (!visible) {
      rafId = requestAnimationFrame(tick);
      return;
    }
    time += 0.016;
    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = canvas.height / (window.devicePixelRatio || 1);
    if (!w || !h) {
      rafId = requestAnimationFrame(tick);
      return;
    }
    const color = getParticleColor();
    const lerp = hover ? 0.08 : 0.02;
    const drift = 0.35;

    particles.forEach((p, i) => {
      if (hover) {
        const pt = shapePoints[p.shapeIndex];
        p.tx = pt.x;
        p.ty = pt.y;
      } else {
        p.tx = 0.5 + drift * Math.sin(time * 0.5 + i * 0.2) * Math.cos(i * 0.1);
        p.ty = 0.5 + drift * Math.cos(time * 0.4 + i * 0.15) * Math.sin(i * 0.08);
      }
      p.x += (p.tx - p.x) * lerp;
      p.y += (p.ty - p.y) * lerp;
    });

    ctx.clearRect(0, 0, w, h);
    const radius = 1.4;
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x * w, p.y * h, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.85 + 0.15 * Math.sin(time + p.x * 10);
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    rafId = requestAnimationFrame(tick);
  }

  wrap.addEventListener("mouseenter", () => { hover = true; });
  wrap.addEventListener("mouseleave", () => { hover = false; });

  const resizeObserver = new ResizeObserver(() => {
    resize();
    if (particles.length === 0) createParticles();
  });
  resizeObserver.observe(wrap);

  const heroSection = document.getElementById("home");
  if (heroSection) {
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.1 }
    );
    io.observe(heroSection);
  }

  resize();
  createParticles();
  tick();
}

/**
 * Payments marquee duplication for seamless loop (no empty gap)
 */
function setupMarquee() {
  const track = document.getElementById("paymentsTrack");
  if (!track) return;

  // Duplicate children twice (3 sets total) for smooth continuous loop
  const items = Array.from(track.children);
  for (let i = 0; i < 2; i++) {
    items.forEach((item) => {
      track.appendChild(item.cloneNode(true));
    });
  }
}

/**
 * Projects modal stories
 */
function setupProjectStories() {
  const cards = Array.from(document.querySelectorAll(".project-card"));
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("projectModalClose");
  const title = document.getElementById("projectModalTitle");
  const subtitle = document.getElementById("projectModalSubtitle");
  const body = document.getElementById("projectModalBody");
  const link = document.getElementById("projectModalLink");
  const backdrop = modal?.querySelector("[data-close-modal]");

  if (!cards.length || !modal || !title || !subtitle || !body || !link) return;

  let lastFocused = null;

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  function openModal(card) {
    const details = card.querySelector(".project-card__details");
    lastFocused = document.activeElement;

    title.textContent = card.dataset.projectTitle || "";
    subtitle.textContent = card.dataset.projectSubtitle || "";
    body.innerHTML = details ? details.innerHTML : "";

    const url = card.dataset.projectUrl || "";
    if (url) {
      link.href = url;
      link.hidden = false;
    } else {
      link.hidden = true;
      link.removeAttribute("href");
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    window.requestAnimationFrame(() => {
      closeBtn?.focus();
    });
  }

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      openModal(card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.target.closest("a")) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(card);
      }
    });
  });

  closeBtn?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!modal.classList.contains("is-open")) return;
    closeModal();
  });
}

/**
 * Color picker open/close
 */
function setupColorPicker() {
  const toggle = document.getElementById("colorPickerToggle");
  const panel = document.getElementById("colorPickerPanel");
  const custom = document.getElementById("customColor");

  if (!toggle || !panel) return;

  function openPanel() {
    panel.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  function closePanel() {
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.toggle("is-open");
    toggle.setAttribute(
      "aria-expanded",
      panel.classList.contains("is-open") ? "true" : "false",
    );
  });

  document.addEventListener("click", (e) => {
    if (!panel.classList.contains("is-open")) return;
    const isInside = panel.contains(e.target) || toggle.contains(e.target);
    if (!isInside) closePanel();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePanel();
  });

  document.querySelectorAll(".swatch").forEach((btn) => {
    btn.addEventListener("click", () => {
      const c = btn.dataset.color;
      if (!c) return;
      applyAccent(c);
    });
  });

  if (custom) {
    custom.addEventListener("input", () => {
      applyAccent(custom.value);
    });
  }
}

/**
 * Contact form (mailto)
 */
function setupContactForm(currentLangGetter) {
  const form = document.getElementById("contactForm");
  const title = document.getElementById("titleInput");
  const msg = document.getElementById("messageInput");
  const toast = document.getElementById("toast");

  if (!form || !title || !msg) return;

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(
      () => toast.classList.remove("is-visible"),
      2600,
    );
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const lang = currentLangGetter();
    const subject = title.value.trim();
    const body = msg.value.trim();

    if (!subject || !body) {
      showToast(t(lang, "toast_missing"));
      return;
    }

    const mail = DEFAULTS.mailTo;
    const url =
      `mailto:${encodeURIComponent(mail)}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    showToast(t(lang, "toast_sent"));
    window.location.href = url;
  });
}

/**
 * Theme toggle
 */
function setupThemeToggle(getTheme, setTheme) {
  const switcher = document.getElementById("theme-switcher");
  if (!switcher) return;

  const darkThemeIcon = document.getElementById("dark-theme-icon");
  const lightThemeIcon = document.getElementById("light-theme-icon");

  switcher.addEventListener("click", () => {
    const next = getTheme() === "dark" ? "light" : "dark";
    setTheme(next);

    [darkThemeIcon, lightThemeIcon].forEach((icon) => {
      if (!icon) return;
      icon.classList.remove("active");
      void icon.offsetWidth;
      icon.classList.add("active");
    });
  });
}

/**
 * Language toggle
 */
function setupLangToggle(getLang, setLang) {
  const btn = document.getElementById("langToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const next = getLang() === "ar" ? "en" : "ar";
    setLang(next);
  });
}

/**
 * Init
 */
(function init() {
  // theme
  let theme = getInitialTheme();
  applyTheme(theme);

  // accent
  const savedAccent =
    localStorage.getItem(STORAGE_KEYS.accent) || DEFAULTS.accentHex;
  applyAccent(savedAccent);

  // language
  let lang = getInitialLang();
  applyLanguage(lang);

  // setup UI
  setupScrollUI();
  setupScrollSpy();
  setupReveal();
  setupMarquee();
  initHeroParticles();
  setupProjectStories();
  setupColorPicker();
  setupThemeToggle(
    () => theme,
    (tNext) => {
      theme = tNext;
      applyTheme(theme);
    },
  );
  setupLangToggle(
    () => lang,
    (lNext) => {
      lang = lNext;
      applyLanguage(lang);
    },
  );
  setupContactForm(() => lang);
})();
