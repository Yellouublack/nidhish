// Smooth scroll functionality for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjusts for the fixed nav bar
            behavior: 'smooth'
        });
    });
});

// Handle scroll to add/remove 'scrolled' class to navigation bar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Resize images dynamically based on window size
function resizeImages() {
    const educationImages = document.querySelectorAll('.education-item img');
    const projectImages = document.querySelectorAll('.gallery-item img');

    educationImages.forEach(img => {
        img.style.width = '90%';
        img.style.height = 'auto';
    });

    projectImages.forEach(img => {
        img.style.width = '100%';
        img.style.height = 'auto';
    });
}

// Call resizeImages function on window resize
window.addEventListener('resize', resizeImages);

// Initial call to set image sizes based on initial window size
resizeImages();

