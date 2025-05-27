// Scroll to top functionality
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll for navigation links and active state
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop - 80; /* Adjust for fixed header height */

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// Set active class on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100; // Adjusted offset
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}
navHighlighter(); // Call on load to set initial active section

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observing various elements for animations
document.querySelectorAll('.timeline-item, .skill-category, .certificate-item, .about-text, .about-info, .project-card').forEach(el => {
    observer.observe(el);
});

// Add click event for project cards to open links
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        const target = this.getAttribute('target'); // Get the target attribute (e.g., "_blank")

        if (link) {
            if (target === "_blank") {
                window.open(link, '_blank'); // Open in new tab
            } else {
                window.location.href = link; // Open in same tab
            }
        }
    });
});