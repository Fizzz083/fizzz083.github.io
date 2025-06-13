
// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Navigation background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Dynamic typing effect for hero subtitle (optional enhancement)
const subtitle = document.querySelector('.hero .subtitle');
const titles = [
    'Senior Software Engineer',
    'Full-Stack Developer',
    'Competitive Programmer',
    'Problem Solver'
];
let currentTitle = 0;
let currentChar = 0;
let isDeleting = false;

function typeWriter() {
    const current = titles[currentTitle];

    if (isDeleting) {
        subtitle.textContent = current.substring(0, currentChar - 1);
        currentChar--;
    } else {
        subtitle.textContent = current.substring(0, currentChar + 1);
        currentChar++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentChar === current.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentTitle = (currentTitle + 1) % titles.length;
        typeSpeed = 500; // Pause before next title
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start typing animation after page load
setTimeout(() => {
    typeWriter();
}, 2000);

// Add some interactive elements
document.querySelectorAll('.skill-tag, .tech-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 5px 15px rgba(59, 130, 246, 0.3)';
    });

    tag.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Add click effect to cards
document.querySelectorAll('.project-card, .achievement-card, .skill-category').forEach(card => {
    card.addEventListener('click', function () {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.07}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
