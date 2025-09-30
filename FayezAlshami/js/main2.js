// ============================
// Variables
// ============================
let currentLang = 'ar';

// ============================
// Initialize AOS (Animate On Scroll)
// ============================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS if library is loaded
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Add scroll event listener for header
    window.addEventListener('scroll', handleScroll);

    // Add scroll event listener for scroll-to-top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
    }
});

// ============================
// Header Scroll Effect
// ============================
function handleScroll() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ============================
// Mobile Menu Toggle
// ============================
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// ============================
// Smooth Scroll to Top
// ============================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================
// Language Switcher
// ============================
function switchLanguage() {
    if (currentLang === 'ar') {
        switchToEnglish();
        currentLang = 'en';
    } else {
        switchToArabic();
        currentLang = 'ar';
    }
}

function switchToEnglish() {
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');

    // Update language button text
    const langBtn = document.querySelector('.lang-switcher');
    if (langBtn) {
        langBtn.innerHTML = '<i class="fas fa-globe"></i> AR';
    }

    // Update content
    updateContentToEnglish();
}

function switchToArabic() {
    document.documentElement.setAttribute('lang', 'ar');
    document.documentElement.setAttribute('dir', 'rtl');

    // Update language button text
    const langBtn = document.querySelector('.lang-switcher');
    if (langBtn) {
        langBtn.innerHTML = '<i class="fas fa-globe"></i> EN';
    }

    // Update content
    updateContentToArabic();
}

// ============================
// Content Translation
// ============================
function updateContentToEnglish() {
    const translations = {
        // Logo
        '.logo-text': 'Fayez Alshami',

        // Navigation
        '.nav-link:nth-child(1)': 'About',
        '.nav-link:nth-child(2)': 'Services',
        '.nav-link:nth-child(3)': 'Projects',
        '.nav-link:nth-child(4)': 'Portfolio',
        '.nav-link:nth-child(5)': 'Contact',

        // Hero Section
        '.hero-title': 'Hello, I'm <span class="highlight">Fayez Alshami</span>',
        '.hero-subtitle': '👨‍💻 Bot Developer & Automation Specialist',
        '.hero-description:nth-of-type(1)': 'I build practical and professional solutions in Telegram bot development, automated payment systems, back-end development, and automation. Currently an IT student studying CCNA to enhance my networking expertise.',
        '.hero-description:nth-of-type(2)': 'I work with a Full-Stack team specialized in website and application development. We turn ideas into complete projects — from design to delivery — with the highest standards of security, efficiency, and automation.',

        // Section Titles
        '#about .section-title': '🖥 About Me',
        '#services .section-title': '🔥 Core Services',
        '#packages .section-title': '📱 Ready Packages',
        '#projects .section-title': '💡 Featured Projects',
        '#portfolio .section-title': '🌐 Websites & Applications',
        '#payment .section-title': '👛 Payment Methods Available',
        '#why-me .section-title': '💬 Why Choose Me?',
        '#contact .section-title': '✉️ Contact Me'
    };

    // Apply translations
    for (const [selector, text] of Object.entries(translations)) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = text;
        }
    }
}

function updateContentToArabic() {
    const translations = {
        // Logo
        '.logo-text': 'فايز الشامي',

        // Navigation
        '.nav-link:nth-child(1)': 'عنّي',
        '.nav-link:nth-child(2)': 'خدماتي',
        '.nav-link:nth-child(3)': 'مشاريعي',
        '.nav-link:nth-child(4)': 'Portfolio',
        '.nav-link:nth-child(5)': 'تواصل معي',

        // Hero Section
        '.hero-title': 'مرحباً، أنا <span class="highlight">فايز الشامي</span>',
        '.hero-subtitle': '👨‍💻 مبرمج بوتات تيليجرام و مطوّر أنظمة مؤتمتة',
        '.hero-description:nth-of-type(1)': 'أبني حلول عملية واحترافية في تطوير بوتات تيليجرام، أنظمة الدفع المؤتمتة، الـBack-End، والأتمتة. حالياً طالب IT وأدرس CCNA لتعزيز خبرتي في الشبكات.',
        '.hero-description:nth-of-type(2)': 'أعمل مع فريق Full-Stack متخصص في تطوير المواقع والتطبيقات، نحول الأفكار إلى مشاريع متكاملة — من التصميم إلى التسليم — مع أعلى معايير الأمان، الكفاءة، والأتمتة.',

        // Section Titles
        '#about .section-title': '🖥 عنّي',
        '#services .section-title': '🔥 خدماتي الرئيسية',
        '#packages .section-title': '📱 العروض الجاهزة',
        '#projects .section-title': '💡 مشاريعي المميزة',
        '#portfolio .section-title': '🌐 المواقع والتطبيقات',
        '#payment .section-title': '👛 طرق الدفع المتوفرة',
        '#why-me .section-title': '💬 لماذا تختارني؟',
        '#contact .section-title': '✉️ تواصل معي'
    };

    // Apply translations
    for (const [selector, text] of Object.entries(translations)) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = text;
        }
    }
}

// ============================
// Smooth Scroll for Navigation Links
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu && navMenu.classList.contains('mobile-active')) {
                navMenu.classList.remove('mobile-active');
            }
        }
    });
});

// ============================
// Intersection Observer for animations
// ============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.service-card, .package-card, .project-card, .portfolio-card').forEach(el => {
    observer.observe(el);
});

// ============================
// Loading Animation (Optional)
// ============================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ============================
// Console Easter Egg
// ============================
console.log('%c👾 فايز الشامي | Fayez Alshami', 'color: #ff4500; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Bot Developer & Automation Specialist', 'color: #ff6347; font-size: 14px;');
console.log('%c📱 Telegram: @Fayez_Alshami', 'color: #ff7f50; font-size: 12px;');
console.log('%c🌐 Website: magnustech.pro', 'color: #ffa07a; font-size: 12px;');