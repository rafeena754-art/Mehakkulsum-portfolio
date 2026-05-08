document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Mobile Menu logic (Checkbox Hack Support)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');

    if (menuToggle && navLinksContainer) {
        // Close menu when a link is clicked
        const links = navLinksContainer.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                console.log('Link clicked, unchecking menu toggle');
                menuToggle.checked = false;
                document.body.style.overflow = 'auto';
            });
        });

        // Handle body scroll when checkbox state changes
        menuToggle.addEventListener('change', () => {
            document.body.style.overflow = menuToggle.checked ? 'hidden' : 'auto';
        });
    }






    // Active link highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        } else if (currentPath === '/' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
});
