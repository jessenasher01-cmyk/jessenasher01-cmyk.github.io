// ===== MAIN JAVASCRIPT =====
// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing...');
    initMobileMenu();
    initTabs();
    initScrollToTop();
    initSmoothScrolling();
});

// ===== MOBILE MENU =====
function initMobileMenu() {
    console.log('Initializing mobile menu...');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuBtn && navMenu) {
        console.log('Mobile menu found, adding click event');
        menuBtn.addEventListener('click', function() {
            console.log('Menu button clicked');
            if (navMenu.style.display === 'flex' || navMenu.style.display === 'block') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
            }
        });
    } else {
        console.log('Mobile menu elements not found');
    }
}

// ===== TABS FUNCTIONALITY =====
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            const content = document.getElementById(tabId);
            if (content) {
                content.classList.add('active');
            }
        });
    });
}

// ===== SCROLL TO TOP BUTTON =====
function initScrollToTop() {
    const scrollBtn = document.querySelector('.scroll-top');
    
    if (scrollBtn) {
        // Hide button initially
        scrollBtn.style.display = 'none';
        
        // Show/hide button on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollBtn.style.display = 'flex';
            } else {
                scrollBtn.style.display = 'none';
            }
        });
        
        // Scroll to top on click
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking (if open)
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu && window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                }
            }
        });
    });
}

// ===== WINDOW RESIZE HANDLER =====
window.addEventListener('resize', function() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex'; // Show desktop menu
        } else {
            navMenu.style.display = 'none'; // Hide mobile menu by default
        }
    }
});
