// ============================
// Variables
// ============================
let currentLang = "ar";

// ============================
// Translation System
// ============================
const translations = {
  ar: {
    // Navigation
    nav: {
      about: "عنّي",
      services: "خدماتي",
      projects: "مشاريعي",
      portfolio: "Portfolio",
      contact: "تواصل معي"
    },
    // Hero
    hero: {
      title: 'مرحباً، أنا <span class="highlight">فايز الشامي</span>',
      subtitle: "👨‍💻 مبرمج بوتات تيليجرام و مطوّر أنظمة مؤتمتة",
      description1: "أبني حلول عملية واحترافية في تطوير بوتات تيليجرام، أنظمة الدفع المؤتمتة، الـBack-End، والأتمتة. حالياً طالب IT وأدرس CCNA لتعزيز خبرتي في الشبكات.",
      description2: "أعمل مع فريق Full-Stack متخصص في تطوير المواقع والتطبيقات، نحول الأفكار إلى مشاريع متكاملة — من التصميم إلى التسليم — مع أعلى معايير الأمان، الكفاءة، والأتمتة.",
      btnServices: "استكشف خدماتي",
      btnContact: "تواصل معي"
    },
    // About
    about: {
      title: "🖥 من أنا",
      description1: "أنا فايز الشامي، مبرمج بوتات تيليجرام و Back-End Developer ومتخصص في أتمتة الأنظمة. أمتلك سنتين من الخبرة الفعلية في بناء أنظمة عملية تساعد أصحاب المشاريع على تنظيم أعمالهم وتقليل العمل اليدوي قدر الإمكان. خلال هذه الفترة نفذت أكثر من 20 مشروع حقيقي بين بوتات تيليجرام، أنظمة دفع مؤتمتة، ولوحات تحكم لإدارة العمليات اليومية."
    },
    // Stats
    stats: {
      experience: "سنتان+",
      experienceLabel: "خبرة",
      projects: "20+",
      projectsLabel: "مشروع منجز",
      systems: "بوتات وأنظمة",
      systemsLabel: "أتمتة"
    },
    // Sections
    sections: {
      services: "🔥 خدماتي الرئيسية",
      packages: "📱 العروض الجاهزة",
      packagesSubtitle: "قابلة للتخصيص حسب طلبك",
      projects: "💡 مشاريعي المميزة",
      portfolio: "🌐 المواقع والتطبيقات",
      payment: "👛 طرق الدفع المتوفرة",
      paymentSubtitle: "أدعم أغلب طرق الدفع العالمية والمحلية",
      whyMe: "💬 لماذا تختارني؟",
      contact: "✉️ تواصل معي",
      contactIntro: "متاح للمشاريع الحرة، حلول الأتمتة، وتطوير الأنظمة"
    },
    // Target Clients
    targetClients: {
      title: "👥 لمن هذه الخدمات؟",
      intro: "خدماتي موجّهة لأصحاب المشاريع الرقمية والأشخاص الذين يريدون أنظمة عملية وواضحة بدلاً من العمل اليدوي المتكرر. بشكل خاص أعمل مع:",
      item1: {
        title: "أصحاب متاجر الشحن",
        desc: "أصحاب متاجر شحن الألعاب والمنتجات الرقمية."
      },
      item2: {
        title: "المجتمعات الطلابية",
        desc: "أصحاب القنوات والمجتمعات الطلابية التي تحتاج إلى تنظيم الاشتراكات والطلبات."
      },
      item3: {
        title: "الشركات والأفراد",
        desc: "الشركات والأفراد الذين يحتاجون إلى أنظمة دفع مؤتمتة وربط بين أكثر من منصة (بوت، موقع، بوابة دفع، قاعدة بيانات)."
      }
    },
    // Workflow
    workflow: {
      title: "⚙️ كيف أعمل مع العميل؟",
      step1: {
        title: "إرسال الطلب",
        desc: "ترسل فكرتك أو طلبك وتشرح احتياجك بشكل مختصر."
      },
      step2: {
        title: "العرض الفني",
        desc: "أراجع طلبك وأرسل لك عرض فني وتقدير مبدئي للوقت والتكلفة."
      },
      step3: {
        title: "الاتفاق",
        desc: "نتّفق على المتطلبات النهائية، السعر، ومدّة التنفيذ."
      },
      step4: {
        title: "التطوير",
        desc: "أعمل على تطوير النظام أو البوت مع إرسال نماذج/تجارب أولية عند الحاجة."
      },
      step5: {
        title: "التسليم والدعم",
        desc: "يتم التسليم النهائي مع فترة دعم بعد التسليم لمعالجة أي مشاكل أو تحسينات بسيطة."
      }
    },
    // Special Offer
    specialOffer: {
      title: "ملاحظة مهمة",
      text1: "أقدّم <strong>مجاناً</strong> عرضاً فنياً أولياً (Specification) لمشروعك خلال <strong>24 ساعة</strong>.",
      text2: "كل ما عليك هو إرسال فكرتك أو متطلباتك، وسأحولها إلى خطة عمل واضحة ومهيكلة قابلة للتنفيذ مباشرة.",
      btn: "ابدأ مشروعك الآن"
    },
    // Footer
    footer: {
      copyright: "© 2025 فايز الشامي. جميع الحقوق محفوظة.",
      madeWith: "الموقع مازال قيد التطوير ترقبو التحديثات"
    }
  },
  en: {
    // Navigation
    nav: {
      about: "About",
      services: "Services",
      projects: "Projects",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    // Hero
    hero: {
      title: 'Hello, I\'m <span class="highlight">Fayez Alshami</span>',
      subtitle: "👨‍💻 Bot Developer & Automation Specialist",
      description1: "I build practical and professional solutions in Telegram bot development, automated payment systems, back-end development, and automation. Currently an IT student studying CCNA to enhance my networking expertise.",
      description2: "I work with a Full-Stack team specialized in website and application development. We turn ideas into complete projects — from design to delivery — with the highest standards of security, efficiency, and automation.",
      btnServices: "Explore My Services",
      btnContact: "Contact Me"
    },
    // About
    about: {
      title: "🖥 About Me",
      description1: "I'm Fayez Al Shami, a Telegram bot developer, Back-End developer, and automation specialist. I have 2 years of hands-on experience building practical systems that help business owners organize their operations and reduce manual work as much as possible. During this time, I've completed more than 20 real-world projects, including Telegram bots, automated payment systems, and dashboards for managing daily operations."
    },
    // Stats
    stats: {
      experience: "2+ Years",
      experienceLabel: "Experience",
      projects: "20+",
      projectsLabel: "Completed Projects",
      systems: "Bots &",
      systemsLabel: "Automation Systems"
    },
    // Sections
    sections: {
      services: "🔥 Core Services",
      packages: "📱 Ready Packages",
      packagesSubtitle: "Customizable according to your needs",
      projects: "💡 Featured Projects",
      portfolio: "🌐 Websites & Applications",
      payment: "👛 Payment Methods Available",
      paymentSubtitle: "I support most global and local payment methods",
      whyMe: "💬 Why Choose Me?",
      contact: "✉️ Contact Me",
      contactIntro: "Available for freelance projects, automation solutions, and system development"
    },
    // Target Clients
    targetClients: {
      title: "👥 Who Are These Services For?",
      intro: "My services are designed for digital business owners and people who want practical, reliable systems instead of repetitive manual work. I mainly work with:",
      item1: {
        title: "Game Store Owners",
        desc: "Owners of game top-up and digital product stores."
      },
      item2: {
        title: "Student Communities",
        desc: "Owners of student communities and channels that need to manage subscriptions and requests."
      },
      item3: {
        title: "Companies & Individuals",
        desc: "Companies and individuals who need automated payment systems and integrations between multiple platforms (bots, websites, payment gateways, databases)."
      }
    },
    // Workflow
    workflow: {
      title: "⚙️ How I Work With Clients",
      step1: {
        title: "Send Request",
        desc: "You send me your idea or request and briefly describe what you need."
      },
      step2: {
        title: "Technical Proposal",
        desc: "I review your request and send you a technical proposal with an initial time and cost estimate."
      },
      step3: {
        title: "Agreement",
        desc: "We agree on the final requirements, price, and delivery timeline."
      },
      step4: {
        title: "Development",
        desc: "I develop the system or bot and share demos or test versions when needed."
      },
      step5: {
        title: "Delivery & Support",
        desc: "Final delivery with a support period to fix issues and handle minor improvements."
      }
    },
    // Special Offer
    specialOffer: {
      title: "Important Note",
      text1: "I offer <strong>free</strong> initial technical proposal (Specification) for your project within <strong>24 hours</strong>.",
      text2: "All you need to do is send me your idea or requirements, and I'll turn it into a clear, structured action plan ready for implementation.",
      btn: "Start Your Project Now"
    },
    // Footer
    footer: {
      copyright: "© 2025 Fayez Alshami. All rights reserved.",
      madeWith: "Website is still under development, stay tuned for updates"
    }
  }
};

// ============================
// Initialize AOS (Animate On Scroll)
// ============================
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS if library is loaded
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }
  // ============================
  // Scroll Progress Bar
  // ============================
  const scrollBar = document.getElementById("scrollProgress");
  if (scrollBar) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollBar.style.width = progress + "%";
    });
  }

  // Scroll effects
  window.addEventListener("scroll", handleScroll);

  // Scroll-to-top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      scrollTopBtn.classList.toggle("visible", window.scrollY > 300);
    });
    scrollTopBtn.addEventListener("click", scrollToTop);
  }

  // Language switcher button
  const langBtn = document.querySelector(".lang-switcher");
  if (langBtn) {
    langBtn.addEventListener("click", switchLanguage);
  }
  
  // Initialize translations on page load
  updateAllTranslations(currentLang);

  // إغلاق القائمة عند النقر على overlay
  const overlay = document.querySelector(".mobile-menu-overlay");
  if (overlay) {
    overlay.addEventListener("click", toggleMobileMenu);
  }

  // إغلاق القائمة عند تغيير حجم الشاشة إلى حجم كبير
  window.addEventListener("resize", function () {
    if (window.innerWidth > 968) {
      const navMenu = document.querySelector(".nav-menu");
      const overlay = document.querySelector(".mobile-menu-overlay");
      if (navMenu && navMenu.classList.contains("mobile-active")) {
        navMenu.classList.remove("mobile-active");
        if (overlay) overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });
});

// ============================
// Header Scroll Effect
// ============================
function handleScroll() {
  const header = document.querySelector(".main-header");
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }
}

// ============================
// Mobile Menu Toggle
// ============================
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const body = document.body;

  if (navMenu) {
    const isActive = navMenu.classList.contains("mobile-active");
    navMenu.classList.toggle("mobile-active");

    if (overlay) {
      overlay.classList.toggle("active", !isActive);
    }

    // منع التمرير عند فتح القائمة
    if (!isActive) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }
}

// ============================
// Smooth Scroll to Top
// ============================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================
// Language Switcher
// ============================
function switchLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  currentLang === "en" ? switchToEnglish() : switchToArabic();
}

function switchToEnglish() {
  document.documentElement.lang = "en";
  document.documentElement.dir = "ltr";

  const langBtn = document.querySelector(".lang-switcher");
  if (langBtn) langBtn.innerHTML = '<i class="fas fa-globe"></i> AR';

  updateAllTranslations("en");
}

function switchToArabic() {
  document.documentElement.lang = "ar";
  document.documentElement.dir = "rtl";

  const langBtn = document.querySelector(".lang-switcher");
  if (langBtn) langBtn.innerHTML = '<i class="fas fa-globe"></i> EN';

  updateAllTranslations("ar");
}

// ============================
// Advanced Translation System
// ============================
function updateAllTranslations(lang) {
  const t = translations[lang];
  
  // Navigation
  const navLinks = document.querySelectorAll(".nav-link");
  if (navLinks.length >= 5) {
    navLinks[0].textContent = t.nav.about;
    navLinks[1].textContent = t.nav.services;
    navLinks[2].textContent = t.nav.projects;
    navLinks[3].textContent = t.nav.portfolio;
    navLinks[4].textContent = t.nav.contact;
  }

  // Hero Section
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) heroTitle.innerHTML = t.hero.title;
  
  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
  
  const heroDescriptions = document.querySelectorAll(".hero-description");
  if (heroDescriptions.length >= 2) {
    heroDescriptions[0].textContent = t.hero.description1;
    heroDescriptions[1].textContent = t.hero.description2;
  }

  const heroButtons = document.querySelectorAll(".hero-buttons .btn");
  if (heroButtons.length >= 2) {
    heroButtons[0].innerHTML = `<i class="fas fa-rocket"></i> ${t.hero.btnServices}`;
    heroButtons[1].innerHTML = `<i class="fas fa-paper-plane"></i> ${t.hero.btnContact}`;
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = getNestedValue(t, key);
    if (value !== undefined) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.value = value;
      } else {
        element.innerHTML = value;
      }
    }
  });

  // Update sections without data-i18n (backward compatibility)
  const sectionTitles = {
    "#about .section-title": t.about.title,
    "#services .section-title": t.sections.services,
    "#packages .section-title": t.sections.packages,
    "#projects .section-title": t.sections.projects,
    "#portfolio .section-title": t.sections.portfolio,
    "#payment .section-title": t.sections.payment,
    "#why-me .section-title": t.sections.whyMe,
    "#contact .section-title": t.sections.contact,
  };

  for (const [selector, text] of Object.entries(sectionTitles)) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = text;
  }

  // Update section subtitles
  const packageSubtitle = document.querySelector("#packages .section-subtitle");
  if (packageSubtitle) packageSubtitle.textContent = t.sections.packagesSubtitle;

  const paymentSubtitle = document.querySelector("#payment .section-subtitle");
  if (paymentSubtitle) paymentSubtitle.textContent = t.sections.paymentSubtitle;

  const contactIntro = document.querySelector(".contact-intro");
  if (contactIntro) contactIntro.textContent = t.sections.contactIntro;

  // Special Offer Section
  const specialOfferTitle = document.querySelector(".special-offer-content h2");
  if (specialOfferTitle) specialOfferTitle.textContent = t.specialOffer.title;

  const specialOfferTexts = document.querySelectorAll(".special-offer-content p");
  if (specialOfferTexts.length >= 2) {
    specialOfferTexts[0].innerHTML = t.specialOffer.text1;
    specialOfferTexts[1].innerHTML = t.specialOffer.text2;
  }

  const specialOfferBtn = document.querySelector(".special-offer-content .btn");
  if (specialOfferBtn) specialOfferBtn.textContent = t.specialOffer.btn;

  // Footer
  const copyright = document.querySelector(".copyright");
  if (copyright) copyright.textContent = t.footer.copyright;

  const madeWith = document.querySelector(".made-with .heart");
  if (madeWith) madeWith.textContent = t.footer.madeWith;
}

function getNestedValue(obj, path) {
  return path.split(".").reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

// ============================
// Smooth Scroll for Navigation Links
// ============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const offsetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });

      const navMenu = document.querySelector(".nav-menu");
      const overlay = document.querySelector(".mobile-menu-overlay");
      if (navMenu?.classList.contains("mobile-active")) {
        navMenu.classList.remove("mobile-active");
        if (overlay) overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });
});

// ============================
// Intersection Observer for animations
// ============================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

document
  .querySelectorAll(
    ".service-card, .package-card, .project-card, .portfolio-card"
  )
  .forEach((el) => {
    observer.observe(el);
  });

// ============================
// Loading Animation
// ============================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ============================
// Console Easter Egg
// ============================
console.log(
  "%c👾 فايز الشامي | Fayez Alshami",
  "color: #ff4500; font-size: 20px; font-weight: bold;"
);
console.log(
  "%c🚀 Bot Developer & Automation Specialist",
  "color: #ff6347; font-size: 14px;"
);
console.log(
  "%c📱 Telegram: @Fayez_Alshami",
  "color: #ff7f50; font-size: 12px;"
);
console.log("%c🌐 Website: magnustech.pro", "color: #ffa07a; font-size: 12px;");

// ============================
// Hero Typewriter Effect
// ============================
const subtitleEl = document.getElementById("heroSubtitle");
if (subtitleEl) {
  const phrases = [
    "👨‍💻 مبرمج بوتات تيليجرام",
    "🤖 مطوّر أنظمة أتمتة",
    "🛡️ Back-End & Automation Engineer",
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeLoop() {
    const current = phrases[phraseIndex];

    if (typing) {
      subtitleEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        typing = false;
        setTimeout(typeLoop, 1500);
        return;
      }
    } else {
      subtitleEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        typing = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(typeLoop, 80);
  }

  typeLoop();
}
// ============================
// Hero Image Parallax
// ============================
const heroImage = document.querySelector(".hero-image .image-wrapper");
if (heroImage && window.innerWidth > 992) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10; // -5 to 5
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    heroImage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.cursor = "none";

  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  const cursorDot = document.createElement("div");
  cursorDot.className = "custom-cursor-dot";
  document.body.appendChild(cursorDot);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
  });

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
  });

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});
