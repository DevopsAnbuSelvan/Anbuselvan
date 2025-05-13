// Loader functionality
document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    
    // Show loader for 1 second
    setTimeout(() => {
        loaderWrapper.classList.add('fade-out');
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
        }, 300); // Wait for fade animation to complete
    }, 1000);
});

// Handle page refresh
window.addEventListener('beforeunload', () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.style.display = 'flex';
    loaderWrapper.classList.remove('fade-out');
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Typing Animation
const texts = ['Mobile App Developer ', 'Web App Developer ', 'Backend Developer '];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

function type() {
    currentText = texts[count];
    
    if (!isDeleting) {
        letter = currentText.slice(0, ++index);
        
        if (index === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause at end
            return;
        }
    } else {
        letter = currentText.slice(0, --index);
        
        if (index === 0) {
            isDeleting = false;
            count = (count + 1) % texts.length;
        }
    }

    document.getElementById('typing-text').textContent = letter;
    setTimeout(type, isDeleting ? 100 : 200); // Delete faster than type
}

// Start typing animation when the page loads
window.onload = () => {
    type();
};

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    // For now, we'll just log it to the console
    console.log('Form submitted:', { name, email, message });
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Clear form
    contactForm.reset();
});

// Scroll to Top Button
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
});

// Project Cards Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Skills Animation
const skillItems = document.querySelectorAll('.skill-item');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

skillItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease-in-out';
    observer.observe(item);
}); 