document.addEventListener('DOMContentLoaded', function () {

    // DOM elements
    const preloader = document.querySelector('.preloader');
    const themeSwitch = document.getElementById('themeSwitch');
    const themeIconElement = document.getElementById('themeIcon');
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const progressBars = document.querySelectorAll('.progress-bar');
    const projectCards = document.querySelectorAll('.project-card');
    const experienceCards = document.querySelectorAll('.experience-card');

    // Automatically add active on click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            navLinks.forEach(otherLink => {
                otherLink.classList.remove('active');
                otherLink.classList.remove('unclickable');
                if (otherLink === link) {
                    link.classList.add('unclickable');
                }
            });
            link.classList.add('active');
            // Smooth scroll
            event.preventDefault();
            const targetId = event.target.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                setTimeout(() => {
                    link.classList.remove('unclickable');
                }, 500);
            }
        });
    });


    // Hide preloader if all is loaded
    window.addEventListener('load', () => {
        if (preloader) {
            preloader.style.transition = 'opacity 0.5s ease-in-out';
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });

    // Set Theme from local storage
    const storedTheme = localStorage.getItem('theme');
    const currentTheme = storedTheme || 'light';
    document.body.dataset.theme = currentTheme;
    themeIconElement.className = currentTheme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-brightness-high-fill';
    themeSwitch.checked = currentTheme !== 'dark';

    // Toggle theme function
    function toggleTheme() {
        const theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
        document.body.dataset.theme = theme;
        themeIconElement.className = theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-brightness-high-fill';
        themeSwitch.checked = theme === 'light';
        localStorage.setItem('theme', theme);
    }

    // Toggle navbar function
    function toggleNavbar() {
        navbar.classList.toggle('expanded');
    }

    // Scroll event for navbar
    function handleScrollEvent() {
        const navbarHeight = navbar.offsetHeight;
        navbar.classList.toggle('scrolled', window.scrollY > navbarHeight);
    }

    // Check if an element is in the viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animate progress bars
    function handleProgressBars() {
        progressBars.forEach(progressBar => {
            if (isElementInViewport(progressBar)) {
                progressBar.classList.add('animate-progress');
            }
        });
    }

    // Intersection Observer callback for project cards
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('fade-in')) {
                entry.target.classList.add('fade-in');
            }
        });
    }

    // Intersection Observer setup for project cards
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    });
    [...projectCards, ...experienceCards].forEach(card => observer.observe(card));

    // Event listeners
    themeSwitch.addEventListener('click', toggleTheme);
    navbarToggler.addEventListener('click', toggleNavbar);
    window.addEventListener('scroll', () => {
        handleScrollEvent();
        handleProgressBars();
    });

    // Initial scroll check
    handleScrollEvent();
    handleProgressBars();

    // CSS styles
    const styles = `
        .navbar.scrolled { background-color: var(--primary-color) !important; }
        .navbar.scrolled, .navbar-brand, .nav-link, #themeIcon { color: white !important; }
        .navbar:not(.scrolled) { background-color: rgba(--bg-color) !important; }
        .navbar:not(.scrolled), .navbar-brand, .nav-link, #themeIcon { color: inherit !important; }
    `;
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
});
