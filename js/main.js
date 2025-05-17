// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current navigation item
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Initialize Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (!form.checkValidity()) {
                event.stopPropagation();
            } else {
                // Simulate form submission
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
                
                // Simulate API call
                setTimeout(() => {
                    submitButton.innerHTML = '<i class="fas fa-check me-2"></i>Sent Successfully!';
                    submitButton.classList.remove('btn-primary');
                    submitButton.classList.add('btn-success');
                    
                    // Reset form after delay
                    setTimeout(() => {
                        form.reset();
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalText;
                        submitButton.classList.remove('btn-success');
                        submitButton.classList.add('btn-primary');
                    }, 2000);
                }, 1500);
            }
            form.classList.add('was-validated');
        });
    }
});

// Add scroll animation for features
window.addEventListener('scroll', () => {
    const features = document.querySelectorAll('.feature-card');
    features.forEach(feature => {
        const featurePosition = feature.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (featurePosition < screenPosition) {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }
    });
});

// Live chat button functionality
const chatButton = document.querySelector('.btn-primary[data-chat]');
if (chatButton) {
    chatButton.addEventListener('click', function() {
        // Implement chat functionality or redirect to chat service
        alert('Chat feature coming soon!');
    });
}

// Accordion animation
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-rotate-180');
        }
    });
});
