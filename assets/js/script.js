document.addEventListener('DOMContentLoaded', function () {

    // DOM's elements
    const preloader = document.querySelector('.preloader');
    const themeSwitch = document.getElementById('themeSwitch');
    const themeIconElement = document.getElementById('themeIcon');
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
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
    themeIconElement.className = currentTheme === 'dark' ? 'bi bi-moon-fill dark' : 'bi bi-brightness-high-fill light';
    themeSwitch.checked = currentTheme !== 'dark';

    // Toggle theme function
    function toggleTheme() {
        const theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
        document.body.dataset.theme = theme;
        themeIconElement.className = theme === 'dark' ? 'bi bi-moon-fill dark' : 'bi bi-brightness-high-fill light';
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
        navbarTogglerIcon.classList.toggle('scroll', window.scrollY > navbarHeight);
        const styles = `
            .navbar-toggler-icon.scroll {
                background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
            }
        `;
        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
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


const modalHTML = `
<div id="contactModal" class="modal" tabindex="-1" role="dialog"  data-bs-backdrop="static"  data-bs-keypad="false"  aria-labelledby="contactModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="contactModalLabel">Contact Form</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <div id="contactModalMessage" style="font-size: 1.5rem; line-height: 1.5;"></div>
            </div>
        </div>
    </div>
</div>
`;

const modalElement = document.createElement('div');
modalElement.innerHTML = modalHTML;
document.body.appendChild(modalElement);

const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
const captchaMessage = document.querySelector('#captcha_message');
document.querySelector('#contactForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    captchaMessage.textContent = '';
    captchaMessage.classList.remove('text-danger');
    toggleInputs();

    let captchaToken = grecaptcha.getResponse();
    data.append('g-recaptcha-response', captchaToken);

    fetch('mailer/sendEmail.php', { method: 'POST', body: data })
        .then(response => response.json())
        .then(data => {
            const modal = document.querySelector('#contactModal');
            const messageElement = modal.querySelector('#contactModalMessage');
            const contactModalLabel = modal.querySelector('#contactModalLabel');

            if (data.message && data.message.toLowerCase().includes('captcha')) {
                captchaMessage.textContent = data.message;
                captchaMessage.classList.add('text-danger');
            } else {
                captchaMessage.textContent = '';
                captchaMessage.classList.remove('text-danger');
            }
            messageElement.textContent = data.message;
            contactModalLabel.textContent = data.title;
            messageElement.classList.remove('text-success', 'text-danger');
            messageElement.classList.add(data.success ? 'text-success' : 'text-danger');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            toggleInputs();
            contactModal.show();

            if (data.success) {
                form.reset();
            }
            grecaptcha.reset();
            hideModal();
        })
        .catch(error => {
            console.error('Error:', error);
            const modal = document.querySelector('#contactModal');
            const messageElement = modal.querySelector('#contactModalMessage');
            const contactModalLabel = modal.querySelector('#contactModalLabel');
            contactModalLabel.textContent = error.title;
            messageElement.textContent = error.message;
            messageElement.classList.remove('text-success', 'text-danger');
            messageElement.classList.add('text-danger');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            toggleInputs();
            contactModal.show();
            hideModal();
        });


    function hideModal() {
        setTimeout(() => {
            contactModal.hide();
        }, 5000);
    }

    function toggleInputs() {
        form.querySelectorAll('input, textarea').forEach(input => {
            input.readOnly = !input.readOnly;
            input.style.backgroundColor = input.readOnly ? '#e9ecef' : '';
            input.style.cursor = input.readOnly ? 'not-allowed' : '';
        });
    }
});
