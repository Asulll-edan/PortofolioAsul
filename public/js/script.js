// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    initAOS();
    initParticles();
    initSmoothScroll();
    initBackToTop();
    initDarkMode();
    initLightbox();
    initContactForm();
    initNavbarScroll();
});

// ==========================================
// AOS ANIMATION
// ==========================================
function initAOS() {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 100
    });
}

// ==========================================
// PARTICLES (MARIO COINS)
// ==========================================
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 30,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#FCD000' // Mario Coin Gold
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 2,
                    color: '#D4A600'
                }
            },
            opacity: {
                value: 0.7,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.3,
                    sync: false
                }
            },
            size: {
                value: 8,
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    size_min: 4,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'bottom',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'bubble'
                },
                onclick: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 200,
                    size: 12,
                    duration: 2,
                    opacity: 1,
                    speed: 3
                },
                repulse: {
                    distance: 150,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// DARK MODE TOGGLE
// ==========================================
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check localStorage for saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        updateParticlesColor(true);
    }
    
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        const isDarkMode = body.classList.contains('dark-mode');
        
        // Save preference
        if (isDarkMode) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
        
        // Update particles color
        updateParticlesColor(isDarkMode);
        
        // Add rotation animation to button
        this.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

function updateParticlesColor(isDarkMode) {
    if (window.pJSDom && window.pJSDom.length > 0) {
        const color = '#FCD000'; // Keep Mario coin gold in both modes
        window.pJSDom[0].pJS.particles.color.value = color;
    }
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 5px 30px var(--color-shadow)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 2px 20px var(--color-shadow)';
        }
        
        lastScroll = currentScroll;
    });
}

// ==========================================
// LIGHTBOX GALLERY
// ==========================================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('h3').textContent;
            const description = this.querySelector('p').textContent;
            
            lightbox.classList.add('active');
            lightboxImg.src = img.src;
            lightboxCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ==========================================
// CONTACT FORM
// ==========================================
function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        // Add ripple effect to submit button
        const submitBtn = form.querySelector('.btn-submit');
        
        submitBtn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Form validation and submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const message = form.querySelector('#message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Mohon lengkapi semua field!', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Email tidak valid!', 'error');
                return;
            }
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending...</span>';
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                showNotification('Pesan berhasil dikirim! Terima kasih.', 'success');
                form.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = `
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                `;
            }, 1500);
        });
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Add coin emoji for success, mushroom for error
    const icon = type === 'success' ? '🪙' : '🍄';
    notification.innerHTML = `<span style="font-size: 1.2rem; margin-right: 0.5rem;">${icon}</span>${message}`;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#FCD000' : '#E52521'};
        color: ${type === 'success' ? '#2D2D2D' : '#FFFFFF'};
        padding: 1rem 2rem;
        border-radius: 8px;
        border: 4px solid ${type === 'success' ? '#D4A600' : '#B81D1A'};
        box-shadow: 0 6px 0 ${type === 'success' ? '#D4A600' : '#B81D1A'};
        z-index: 10000;
        font-family: 'Press Start 2P', cursive;
        font-size: 0.7rem;
        animation: coinPop 0.3s ease;
        display: flex;
        align-items: center;
    `;
    
    document.body.appendChild(notification);
    
    // Play coin sound effect (visual simulation)
    if (type === 'success') {
        notification.animate([
            { transform: 'scale(0.8) translateY(20px)', opacity: 0 },
            { transform: 'scale(1.1) translateY(-5px)', opacity: 1 },
            { transform: 'scale(1) translateY(0)', opacity: 1 }
        ], {
            duration: 300,
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        });
    }
    
    setTimeout(() => {
        notification.style.animation = 'coinPop 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add coin pop animation to CSS
const coinStyle = document.createElement('style');
coinStyle.textContent = `
    @keyframes coinPop {
        0% {
            transform: scale(0.8) translateY(20px);
            opacity: 0;
        }
        60% {
            transform: scale(1.1) translateY(-5px);
            opacity: 1;
        }
        100% {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(coinStyle);

// ==========================================
// PROJECT CARD PARALLAX
// ==========================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==========================================
// SKILL ITEMS HOVER EFFECT
// ==========================================
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ==========================================
// FORM INPUT ANIMATIONS
// ==========================================
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ==========================================
// PARALLAX SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==========================================
// CSS ANIMATIONS
// ==========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
    
    .btn-submit {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// CONSOLE MESSAGE - MARIO STYLE
// ==========================================
console.log('%c🍄 SUPER PORTFOLIO! 🍄', 'font-size: 24px; font-weight: bold; color: #E52521; text-shadow: 2px 2px #FCD000;');
console.log('%c⭐ It\'s-a me, Your Portfolio! ⭐', 'font-size: 16px; color: #43B047;');
console.log('%c🪙 Press START to continue... 🪙', 'font-size: 14px; color: #FCD000;');
console.log('%cMade with ❤️ in the Mushroom Kingdom', 'font-size: 12px; color: #0084C7;');