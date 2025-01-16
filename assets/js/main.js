// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Initialize AOS with updated settings
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Typed.js initialization with erasing animation
const typed = new Typed('.typed-text', {
    strings: ['Programmer', 'Software Developer', 'Full Stack Developer', 'Freelancer'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true,
    autoInsertCss: true,
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500
});

// Theme toggle functionality with smooth transitions
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');
const header = document.querySelector('.header');

// Check for saved theme preference or system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
    updateThemeIcon(savedTheme === 'dark');
} else {
    const isDark = prefersDarkScheme.matches;
    body.classList.toggle('dark-mode', isDark);
    updateThemeIcon(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function updateThemeIcon(isDark) {
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    // Force header background update based on both scroll position and theme
    updateHeaderBackground(window.pageYOffset, isDark);

    // Animate icon
    icon.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        updateThemeIcon(isDark);
        icon.style.transform = 'rotate(0deg)';
    }, 150);

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Separate function to handle header background updates
function updateHeaderBackground(scrollPosition, isDark) {
    if (scrollPosition <= 0) {
        header.style.background = 'transparent';
        header.classList.remove('shadow');
    } else {
        header.style.background = isDark
            ? 'rgba(15, 23, 42, 0.9)'
            : 'rgba(255, 255, 255, 0.9)';
        header.classList.add('shadow');
    }
}

// Update scroll event listener to use the shared function
window.addEventListener('scroll', () => {
    const isDark = body.classList.contains('dark-mode');
    updateHeaderBackground(window.pageYOffset, isDark);
});

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    navLinks.style.display = isMenuOpen ? 'flex' : '';
    navLinks.style.animation = isMenuOpen ? 'slideDown 0.3s ease forwards' : 'slideUp 0.3s ease forwards';

    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (isMenuOpen) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
}

// Function to handle window resize
function handleResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
        navLinks.style.display = 'flex';
        isMenuOpen = false;
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    } else {
        navLinks.style.display = isMenuOpen ? 'flex' : 'none';
    }
}

// Add resize event listener
window.addEventListener('resize', handleResize);

// Initial check
handleResize();

hamburger.addEventListener('click', toggleMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (isMenuOpen && !e.target.closest('.nav-container')) {
        toggleMenu();
    }
});

// Ensure navbar is visible on load
window.addEventListener('load', handleResize);

// Smooth scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (isMenuOpen) {
                toggleMenu();
            }
        }
    });
});

// Active section highlighting with Intersection Observer
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${currentId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Back to top button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }

    .header {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .header.shadow {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .dark-mode .header.shadow {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .hamburger span {
        transition: transform 0.3s ease, opacity 0.3s ease;
    }
`;

document.head.appendChild(style);

// Initialize project image lazy loading
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
});