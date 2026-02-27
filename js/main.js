// ===== MAIN JAVASCRIPT =====
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
        
        // Make sure menu is hidden on mobile by default
        if (window.innerWidth <= 768) {
            navMenu.style.display = 'none';
        }
        
        menuBtn.addEventListener('click', function() {
            console.log('Menu button clicked');
            if (navMenu.style.display === 'flex' || navMenu.style.display === 'block') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'white';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
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
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
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
        scrollBtn.style.display = 'none';
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollBtn.style.display = 'flex';
            } else {
                scrollBtn.style.display = 'none';
            }
        });
        
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== SMOOTH SCROLLING =====
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
                
                // Close mobile menu after clicking
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
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'row';
            navMenu.style.width = 'auto';
            navMenu.style.padding = '0';
            navMenu.style.boxShadow = 'none';
        } else {
            navMenu.style.display = 'none';
        }
    }
});

// ===== NEWSLETTER FORM =====
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    if (email) {
        alert('Thank you for subscribing to our newsletter!');
        event.target.reset();
    }
}
