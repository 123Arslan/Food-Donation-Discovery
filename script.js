// script.js - Fixed version for home page with proper navigation

document.addEventListener('DOMContentLoaded', function () {
    // ---------- ELEMENTS ----------
    const navHome = document.getElementById('nav-home');
    const navAbout = document.getElementById('nav-about');
    const navImpact = document.getElementById('nav-impact');
    const navContact = document.getElementById('nav-contact');

    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about-section');
    const impactSection = document.getElementById('impact-section');

    // ========== CHECK CURRENT PAGE ==========
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // ========== HOME PAGE SPECIFIC CODE ==========
    if (currentPage === 'index.html' || currentPage === '') {

        // Hide all sections initially
        document.querySelectorAll('.page').forEach(section => {
            section.classList.remove('active-page');
        });

        // Show home section by default
        if (homeSection) {
            homeSection.classList.add('active-page');
        }

        // Set active class on home link
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        if (navHome) {
            navHome.classList.add('active');
        }

        // ---------- HOME LINK ----------
        if (navHome) {
            navHome.addEventListener('click', function (e) {
                e.preventDefault();

                // Hide all sections
                document.querySelectorAll('.page').forEach(section => {
                    section.classList.remove('active-page');
                });

                // Show home section
                if (homeSection) {
                    homeSection.classList.add('active-page');
                }

                // Update active class
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                navHome.classList.add('active');

                // Smooth scroll to home
                homeSection.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // ---------- ABOUT LINK (Show about section on same page) ----------
        if (navAbout) {
            navAbout.addEventListener('click', function (e) {
                e.preventDefault();

                // Hide all sections
                document.querySelectorAll('.page').forEach(section => {
                    section.classList.remove('active-page');
                });

                // Show about section
                if (aboutSection) {
                    aboutSection.classList.add('active-page');
                }

                // Update active class
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                navAbout.classList.add('active');

                // Smooth scroll to about section
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // ---------- IMPACT LINK (Show impact section on same page) ----------
        if (navImpact) {
            navImpact.addEventListener('click', function (e) {
                e.preventDefault();

                // Hide all sections
                document.querySelectorAll('.page').forEach(section => {
                    section.classList.remove('active-page');
                });

                // Show impact section
                if (impactSection) {
                    impactSection.classList.add('active-page');
                }

                // Update active class
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                navImpact.classList.add('active');

                // Smooth scroll to impact section
                impactSection.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // ---------- CONTACT LINK (Navigate to contact page) ----------
        if (navContact) {
            navContact.addEventListener('click', function (e) {
                // Allow default navigation to contact.html
                // No preventDefault()
                window.location.href = 'contact.html';
            });
        }
    }

    // ========== BUTTON FUNCTIONALITY ==========
    const donateBtn = document.getElementById('start-donating');
    const receiveBtn = document.getElementById('start-receiving');

    if (donateBtn) {
        donateBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showNotification('🍲 Donor form', 'success');
            setTimeout(() => {
                window.location.href = 'donor.html';
            }, 1500);
        });
    }

    if (receiveBtn) {
        receiveBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showNotification('', '');
            setTimeout(() => {
                window.location.href = 'receiver.html';
            }, 1500);
        });
    }

    // ========== FOOTER LINK HANDLING ==========
    const footerLinks = document.querySelectorAll('.footer-links a');

    footerLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // If it's an internal page link, let it navigate normally
            if (href.endsWith('.html')) {
                // Allow normal navigation
                return true;
            }
        });
    });

    // ========== NOTIFICATION SYSTEM ==========
    function showNotification(message, type = 'info') {
        const existingNotification = document.querySelector('.site-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = 'site-notification';

        let icon = '';
        if (type === 'success') icon = '✅';
        else if (type === 'error') icon = '❌';
        else icon = 'ℹ️';

        notification.innerHTML = `
            <span class="notification-icon">${icon}</span>
            <span class="notification-message">${message}</span>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            border-radius: 50px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 9999;
            animation: slideInRight 0.3s ease;
            font-size: 1rem;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 2000);
    }

    // ========== ADD ANIMATION STYLES ==========
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .page {
            display: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .page.active-page {
            display: block;
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    console.log('Script loaded successfully - Home page ready');
});



















// Data for "What You Can Donate" categories based on the design
const categoriesData = [
    { name: "Cooked Food", desc: "Ready-to-eat meals", emoji: "1" },
    { name: "Packaged Food", desc: "Sealed & preserved", emoji: "2" },
    { name: "Raw Food", desc: "Fresh produce & grains", emoji: "3" },
    { name: "Beverages", desc: "Drinks & water", emoji: "4" }
];

// Render categories grid dynamically
function renderCategories() {
    const grid = document.getElementById('foodCategoriesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    categoriesData.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.setAttribute('data-category', cat.name);
        
        card.innerHTML = `
            <div class="category-emoji">${cat.emoji}</div>
            <div class="category-name">${cat.name}</div>
            <div class="category-desc">${cat.desc}</div>
        `;
        
        // Click handler for each category card
        card.addEventListener('click', () => {
            const selectElem = document.getElementById('foodType');
            if (selectElem) {
                // Match value to category
                let val = cat.name;
                if (cat.name === "Cooked Food") selectElem.value = "Cooked Food";
                else if (cat.name === "Packaged Food") selectElem.value = "Packaged Food";
                else if (cat.name === "Raw Food") selectElem.value = "Raw Food";
                else if (cat.name === "Beverages") selectElem.value = "Beverages";
                
                // Scroll to form smoothly
                document.getElementById('donate-now').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
                
                // Visual feedback: temporary highlight on form panel
                const formPanel = document.querySelector('.donate-form-panel');
                if (formPanel) {
                    formPanel.style.transition = '0.2s';
                    formPanel.style.boxShadow = '0 0 0 3px #2c6e2f';
                    setTimeout(() => { 
                        formPanel.style.boxShadow = ''; 
                    }, 800);
                }
            }
        });
        
        grid.appendChild(card);
    });
}

// Initialize the categories section when DOM is ready
document.addEventListener('DOMContentLoaded', renderCategories);













// ========== BACKGROUND SLIDER LOGIC ==========
        const slides = document.querySelectorAll('.bg-slider .slide');
        let currentIndex = 0;
        let slideInterval;
        const SLIDE_DURATION = 5000;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active-slide');
            });
            if (index >= slides.length) currentIndex = 0;
            else if (index < 0) currentIndex = slides.length - 1;
            else currentIndex = index;
            slides[currentIndex].classList.add('active-slide');
        }

        function nextSlide() { showSlide(currentIndex + 1); }
        function startSlider() { if (slideInterval) clearInterval(slideInterval); slideInterval = setInterval(nextSlide, SLIDE_DURATION); }
        
        if (slides.length) {
            startSlider();
            const sliderContainer = document.querySelector('.bg-slider');
            if (sliderContainer) {
                sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
                sliderContainer.addEventListener('mouseleave', startSlider);
            }
        }


























        