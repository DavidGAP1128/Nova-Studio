// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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
// ===========================
// MOBILE MENU TOGGLE
// ===========================
  document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('nav');
    const mobileMenu = document.createElement('div');

    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
      <div class="menu-items">
        <a href="home.html">Inicio</a>
        <a href="portafolio.html">Portafolio</a>
        <a href="home.html#contacto" 
           class="px-6 py-3 rounded-full font-bold text-center bg-secondary" 
           style="margin-top: 1rem;">Contacto</a>
      </div>
    `;

    nav.appendChild(mobileMenu);

    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  });


// ===========================
// SCROLL ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observe process steps
document.querySelectorAll('.process-step').forEach(step => {
    observer.observe(step);
});

// ===========================
// NAVBAR BACKGROUND ON SCROLL
// ===========================
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// PARALLAX EFFECT FOR HERO (DISABLED)
// ===========================
// Removed parallax effect from hero section

// ===========================
// ADD ANIMATION CLASS TO STAGGER ITEMS
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Trigger stagger animations on page load
    const staggerContainers = document.querySelectorAll('.stagger-fade-in');
    staggerContainers.forEach(container => {
        const items = container.children;
        Array.from(items).forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
            }, index * 100);
        });
    });
});

// ===========================
// CURSOR EFFECT (OPTIONAL)
// ===========================
const createCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.display = 'block';
    });
    
    // Scale cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
};

// Uncomment to enable custom cursor
// createCursor();

// ===========================
// LOADING ANIMATION
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-filter]");
    const items = document.querySelectorAll("[data-category]");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        items.forEach(item => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.style.display = "block"; // mostrar
          } else {
            item.style.display = "none"; // ocultar
          }
        });

        // opcional: resaltar botón activo
        buttons.forEach(b => b.classList.remove("bg-primary","text-secondary"));
        btn.classList.add("bg-primary","text-secondary");
      });
    });
  });

// ===========================
// CONSOLE MESSAGE
// ===========================
console.log('%c🚀 Nova Creative Studio', 'font-size: 20px; font-weight: bold; color: #13273f;');
console.log('%cBranding & Diseño Editorial', 'font-size: 14px; color: #13273f;');
console.log('%c@novacreative.jrz', 'font-size: 12px; color: #13273f;');