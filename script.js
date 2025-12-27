// Language Content Object
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navServices: "Services",
        navContact: "Contact Me",
        heroGreeting: "Hello, I'm",
        heroName: "Abdullah altairi",
        heroSubtitle: "Web • Mobile • Backend • Data • AI",
        heroDescription: "A passionate software developer focused on building reliable, scalable, and high-quality digital solutions. Merging academic depth with hands-on professional expertise.",
        btnContact: "Get in Touch",
        btnProjects: "View Projects",
        sectionAbout: "About Me",
        aboutLead: "I am a general software developer based in Dhamar, Yemen, actively balancing university studies with hands-on professional practice.",
        aboutP1: "I possess solid intermediate-level experience that is rapidly progressing toward advanced proficiency through continuous self-learning and real-world projects. I believe that great software is built through a deep understanding of problems, attention to detail, and professional integrity.",
        aboutP2: "Currently working independently, managing projects from concept to delivery, and preparing to collaborate within professional development teams. Every project I build is treated with the same care and responsibility as if it were my own product.",
        qualitiesTitle: "Personal Qualities",
        quality1: "Strong perseverance and discipline",
        quality2: "Honesty and professional integrity",
        quality3: "High work ethic",
        quality4: "Exceptional attention to detail",
        quality5: "Passion for diverse technical challenges",
        objectiveTitle: "Career Objective",
        objectiveText: "My goal is to secure a professional role or freelance opportunities where I can apply and expand my software development skills. Aiming to work in the <strong>Kingdom of Saudi Arabia</strong> within the next two years with leading international technology companies.",
        sectionExperience: "Experience & Education",
        exp1Role: "Freelance Software Developer",
        exp1Type: "Self-Employed",
        exp1Desc1: "Designed and developed complete software solutions independently.",
        exp1Desc2: "Built and managed relational databases using SQL Server.",
        exp1Desc3: "Continuously learned and applied modern programming practices.",
        exp2Role: "University Student",
        exp2Type: "Telecommunications Engineering / IT",
        exp2Desc1: "Combined academic knowledge with practical software development.",
        exp2Desc2: "Applied theoretical concepts to real-world projects.",
        sectionSkills: "Technical Skills",
        sectionProjects: "Recent Projects",
        filterAll: "All",
        filterWeb: "Web Dev",
        filterDb: "Databases",
        filterDesktop: "Desktop",
        sectionServices: "My Services",
        service1: "Full-Stack Web Development",
        service2: "Software & System Development",
        service3: "Database Design & Management",
        service4: "Technical Consulting & Analysis",
        sectionContact: "Get In Touch",
        contactTitle: "Let's work together",
        contactDesc: "Interested in hiring me for a project or professional role? Feel free to reach out. I am available for opportunities in freelance or full-time capacities.",
        labelName: "Your Name",
        labelEmail: "Your Email",
        labelSubject: "Subject",
        labelMessage: "Your Message",
        btnSend: "Send Message",
        emailLabel: "Email",
        metaDescription: "Portfolio of Abdullah Abdulrab Abdullah altairi - General Software Developer & Full-Stack Engineer.",
        statProjects: "Completed Projects",
        statYears: "Years of Experience",
        statTech: "Technologies",
        statHours: "Coding Hours",
        linkedinLabel: "LinkedIn",
        linkedinName: "Abdullah altairi",
        project1Title: "School Management System",
        project1Desc: "A comprehensive system designed to manage students, teachers, attendance, grades, and reporting, with a structured database and secure data handling.",
        project2Title: "Banking Management System",
        project2Desc: "A simulated banking system featuring account management, transactions, user roles, and a strong focus on accuracy and security.",
        project3Title: "University Website",
        project3Desc: "A responsive and user-friendly official website developed for a university, focusing on clarity, accessibility, and modern design.",
        project3Link: "View Project",
        project4Title: "Additional Projects",
        project4Desc: "Multiple standalone projects using C++, Desktop applications with C#, and Web projects (Approx. 7 total)."
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "من أنا",
        navSkills: "مهاراتي",
        navProjects: "أعمالي",
        navServices: "خدماتي",
        navContact: "تواصل معي",
        heroGreeting: "مرحباً، أنا",
        heroName: "عبدالله الطيري",
        heroSubtitle: "ويب • موبايل • أنظمة خلفية • بيانات • ذكاء اصطناعي",
        heroDescription: "مطور برمجيات شغوف أركز على بناء حلول رقمية موثوقة، قابلة للتطوير، وعالية الجودة. أدمج بين العمق الأكاديمي والخبرة المهنية العملية.",
        btnContact: "تواصل معي",
        btnProjects: "تصفح أعمالي",
        sectionAbout: "نبذة عني",
        aboutLead: "أنا عبدالله عبدالرب الطيري، مطور برمجيات عام مقيم في ذمار، اليمن، وازن بنشاط بين الدراسات الجامعية والممارسة المهنية العملية.",
        aboutP1: "أمتلك خبرة متوسطة قوية تتقدم بسرعة نحو الاحتراف المتقدم من خلال التعلم الذاتي المستمر والمشاريع الواقعية. أؤمن أن البرمجيات العظيمة تُبنى من خلال فهم عميق للمشاكل، الاهتمام بالتفاصيل، والنزاهة المهنية.",
        aboutP2: "أعمل حالياً بشكل مستقل، أدير المشاريع من الفكرة إلى التسليم، وأستعد للتعاون داخل فرق التطوير المهنية. كل مشروع أبنيه يعامل بنفس العناية والمسؤولية كما لو كان منتجي الخاص.",
        qualitiesTitle: "الصفات الشخصية",
        quality1: "مثابرة وانضباط قوي",
        quality2: "الصدق والنزاهة المهنية",
        quality3: "أخلاقيات عمل عالية",
        quality4: "اهتمام استثنائي بالتفاصيل",
        quality5: "شغف بالتحديات التقنية المتنوعة",
        objectiveTitle: "الهدف المهني",
        objectiveText: "هدفي هو تأمين دور مهني أو فرص عمل حر حيث يمكنني تطبيق وتوسيع مهاراتي في تطوير البرمجيات. أطمح للعمل في <strong>المملكة العربية السعودية</strong> خلال العامين المقبلين مع شركات تكنولوجيا دولية رائدة.",
        sectionExperience: "الخبرة والتعليم",
        exp1Role: "مطور برمجيات مستقل",
        exp1Type: "عمل حر",
        exp1Desc1: "تصميم وتطوير حلول برمجية كاملة بشكل مستقل.",
        exp1Desc2: "بناء وإدارة قواعد البيانات العلاقية باستخدام SQL Server.",
        exp1Desc3: "التعلم المستمر وتطبيق ممارسات البرمجة الحديثة.",
        exp2Role: "طالب جامعي",
        exp2Type: "هندسة اتصالات / تقنية معلومات",
        exp2Desc1: "دمج المعرفة الأكاديمية مع تطوير البرمجيات العملي.",
        exp2Desc2: "تطبيق المفاهيم النظرية على مشاريع واقعية.",
        sectionSkills: "المهارات التقنية",
        sectionProjects: "أحدث المشاريع",
        filterAll: "الكل",
        filterWeb: "ويب",
        filterDb: "قواعد بيانات",
        filterDesktop: "سطح مكتب",
        sectionServices: "خدماتي",
        service1: "تطوير ويب متكامل (Full-Stack)",
        service2: "تطوير البرمجيات والأنظمة",
        service3: "تصميم وإدارة قواعد البيانات",
        service4: "الاستشارات والتحليل التقني",
        sectionContact: "تواصل معي",
        contactTitle: "لنعمل معاً",
        contactDesc: "هل أنت مهتم بتوظيفي لمشروع أو دور مهني؟ لا تتردد في التواصل. أنا متاح لفرص العمل الحر أو الدوام الكامل.",
        labelName: "الاسم الكريم",
        labelEmail: "البريد الإلكتروني",
        labelSubject: "الموضوع",
        labelMessage: "رسالتك",
        btnSend: "إرسال الرسالة",
        emailLabel: "البريد الإلكتروني",
        metaDescription: "موقع عبدالله عبدالرب الطيري - مطور برمجيات خبير في اليمن والسعودية. متخصص في تطوير الويب والأنظمة والذكاء الاصطناعي. شركة الطيري للتقنية.",
        statProjects: "مشروع مكتمل",
        statYears: "سنوات خبرة",
        statTech: "تقنية",
        statHours: "ساعة برمجة",
        linkedinLabel: "لينكد إن",
        linkedinName: "عبدالله الطيري",
        project1Title: "نظام إدارة المدارس",
        project1Desc: "نظام شامل مصمم لإدارة الطلاب والمعلمين والحضور والدرجات والتقارير بمقاعدة بيانات مهيكلة وتداول آمن للبيانات.",
        project2Title: "نظام إدارة البنوك",
        project2Desc: "نظام بنكي محاكي يتميز بإدارة الحسابات، المعاملات، أدوار المستخدمين، وتركيز قوي على الدقة والأمان.",
        project3Title: "موقع إلكتروني للجامعة",
        project3Desc: "موقع رسمي متجاوب وسهل الاستخدام تم تطويره لجامعة، مع التركيز على الوضوح وسهولة الوصول والتصميم الحديث.",
        project3Link: "عرض المشروع",
        project4Title: "مشاريع إضافية",
        project4Desc: "مشاريع برمجية متعددة باستخدام C++، تطبيقات سطح مكتب بـ C#، ومشاريع ويب (حوالي 7 مشاريع إجمالاً)."
    }
};

// Typing Effect
const typedTextSpan = document.querySelector(".typing-text");
const cursorSpan = document.querySelector(".cursor");

const textArrays = {
    en: ["General Software Developer", "Full-Stack Engineer", "Web & Mobile Developer", "AI Enthusiast"],
    ar: ["مطور برمجيات عام", "مهندس Full-Stack", "مطور ويب وموبايل", "شغوف بالذكاء الاصطناعي"]
};

let currentLang = localStorage.getItem("language") || "en";
let textArray = textArrays[currentLang];

const typingDelay = 100;

// Declare timeout variables (globally or naturally scoped here)
let newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
let typingTimeout;
let erasingTimeout;
const erasingDelay = 50;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        typingTimeout = setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        erasingTimeout = setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        erasingTimeout = setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        typingTimeout = setTimeout(type, typingDelay + 1100);
    }
}

// EmailJS Initialization
// IMPORTANT: You must replace 'YOUR_PUBLIC_KEY' with your actual public key from EmailJS dashboard
(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init("Aub19bGo7y6-qm5bl");
})();

// Contact Form Handler
const contactForm = document.querySelector('.contact-form');
const btnSend = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Show loading state
    const originalBtnText = btnSend.innerText;
    btnSend.innerText = currentLang === 'en' ? 'Sending...' : 'جاري الإرسال...';
    btnSend.disabled = true;

    // These IDs come from your EmailJS dashboard
    const serviceID = 'service_8zg0x82';
    const templateID = 'template_cmzxu0y';

    // Prepare parameters matching your template
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            // Success
            btnSend.innerText = currentLang === 'en' ? 'Sent Successfully!' : 'تم الإرسال بنجاح!';
            btnSend.style.backgroundColor = '#00b894';
            contactForm.reset();

            setTimeout(() => {
                btnSend.innerText = originalBtnText;
                btnSend.disabled = false;
                btnSend.style.backgroundColor = ''; // Reset color
            }, 3000);
        }, (err) => {
            // Error
            btnSend.innerText = currentLang === 'en' ? 'Failed!' : 'فشل الإرسال!';
            btnSend.style.backgroundColor = '#d63031';
            alert(JSON.stringify(err));

            setTimeout(() => {
                btnSend.innerText = originalBtnText;
                btnSend.disabled = false;
                btnSend.style.backgroundColor = '';
            }, 3000);
        });
});
const languageToggle = document.getElementById("language-toggle");

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("language", lang);
    languageToggle.textContent = lang === "en" ? "AR" : "EN";

    // Update Text Content
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            if (el.innerHTML.includes('<') && (key === "objectiveText" || key.includes("hero"))) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Reset Typing Effect
    resetTypingEffect();

    // Update Font Family specifically if needed via JS (CSS handles most)
    if (lang === 'ar') {
        document.body.style.fontFamily = "'Cairo', 'Cairo Fallback', sans-serif";
    } else {
        document.body.style.fontFamily = "var(--font-body)";
    }
}

function resetTypingEffect() {
    // Clear existing timeouts
    clearTimeout(typingTimeout);
    clearTimeout(erasingTimeout);

    // Reset state
    textArray = textArrays[currentLang];
    textArrayIndex = 0;
    charIndex = 0;
    typedTextSpan.textContent = "";

    // Restart
    setTimeout(type, newTextDelay + 250);
}

languageToggle.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    setLanguage(newLang);
});

document.addEventListener("DOMContentLoaded", function () {
    setLanguage(currentLang);
    // Typing effect is initiated by setLanguage -> resetTypingEffect
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Scroll Header Background (Optimized)
const navbar = document.querySelector('.navbar');
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            scrollTimeout = false;
        });
        scrollTimeout = true;
    }
});

// Active Link Highlighting (Optimized with Intersection Observer)
const sections = document.querySelectorAll('section');

const activeLinkOptions = {
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
};

const activeLinkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, activeLinkOptions);

sections.forEach(section => {
    activeLinkObserver.observe(section);
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.section-title, .about-text, .skill-category, .project-card, .timeline-item, .service-item, .contact-wrapper');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light-mode');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark-mode');
    }
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.remove('hide');
                card.classList.add('show');
            } else {
                card.classList.remove('show');
                card.classList.add('hide');
            }
        });
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// NEW FEATURES
// ============================================

// Loading Screen (Optimized: hides immediately after load)
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    // We add a minimal delay to ensure the hide animation starts smoothly
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 500); // Reduced forced delay from 1500 to 500
});

// Particles.js Configuration
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#6c5ce7'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6c5ce7',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// Animated Counter for Stats
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target >= 1000 ? '+' : '');
        }
    };

    updateCounter();
};

// Intersection Observer for Stats Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            animateCounter(statNumber);
            statsObserver.unobserve(statNumber);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});
