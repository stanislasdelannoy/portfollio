// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu mobile
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Animation de la barre de navigation au scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Scroll smooth pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Compensation pour la navbar fixe
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation des éléments au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Appliquer l'animation aux sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les données du formulaire
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validation simple
            if (!name || !email || !message) {
                showMessage('Veuillez remplir tous les champs.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Veuillez entrer une adresse email valide.', 'error');
                return;
            }
            
            // Simulation d'envoi
            showMessage('Message envoyé avec succès! Je vous répondrai bientôt.', 'success');
            contactForm.reset();
        });
    }

    // Fonction de validation email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Fonction pour afficher les messages
    function showMessage(text, type) {
        // Supprimer les messages existants
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Créer le nouveau message
        const message = document.createElement('div');
        message.className = `form-message ${type}`;
        message.textContent = text;
        
        // Styles pour le message
        message.style.cssText = `
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 0.5rem;
            font-weight: 500;
            ${type === 'success' ? 
                'background-color: #dcfce7; color: #166534; border: 1px solid #bbf7d0;' : 
                'background-color: #fef2f2; color: #dc2626; border: 1px solid #fecaca;'
            }
        `;
        
        // Insérer le message avant le bouton
        const submitButton = contactForm.querySelector('button[type="submit"]');
        contactForm.insertBefore(message, submitButton);
        
        // Supprimer le message après 5 secondes
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 5000);
    }

    // Animation de typage pour le titre
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        
        typing();
    }

    // Appliquer l'animation de typage au titre principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 1000);
    }

    // Compteur animé pour les statistiques (peut être ajouté plus tard)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Parallax effect pour le header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Gestion des liens vers les réseaux sociaux
    document.querySelectorAll('.contact-method').forEach(method => {
        method.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            if (text === 'LinkedIn') {
                window.open('https://linkedin.com/in/stanislas-delannoy', '_blank');
            } else if (text === 'GitHub') {
                window.open('https://github.com/stanislasdelannoy', '_blank');
            }
        });
        
        // Ajouter un style de cursor pointer
        method.style.cursor = 'pointer';
        method.style.transition = 'color 0.3s ease';
        
        method.addEventListener('mouseenter', function() {
            this.style.color = 'var(--primary-color)';
        });
        
        method.addEventListener('mouseleave', function() {
            this.style.color = 'var(--text-secondary)';
        });
    });
});