/**
 * MARC MANZORRO PORTFOLIO
 * Professional Systems & Cybersecurity
 */

// ============================================================
// CONFIGURATION
// ============================================================

const CONFIG = {
  particles: {
    count: 60,
    connectionDistance: 150,
    mouseDistance: 200,
    speed: 0.5,
    color: 'rgba(0, 240, 255, 0.5)'
  },
  animations: {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  },
  cursor: {
    smoothing: 0.15,
    dotSmoothing: 0.5
  }
};

// ============================================================
// TRANSLATIONS
// ============================================================

const translations = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.skills': 'Skills',
    'nav.experience': 'Experiencia',
    'nav.education': 'Estudios',
    'nav.contact': 'Contacto',
    'hero.status': 'Disponible para prácticas & trabajo',
    'hero.subtitle': 'Técnico en Administración de Sistemas y Ciberseguridad. Especializado en infraestructura cloud, redes y seguridad informática.',
    'hero.cta.primary': 'Ver Experiencia',
    'hero.cta.secondary': 'Contactar',
    'stats.english': 'Inglés',
    'stats.experience': 'Años Exp.',
    'stats.location': 'Ubicación',
    'about.title': 'Sobre mí',
    'about.p1': 'Soy un estudiante de <span class="highlight">ASIXC</span> residente en <span class="highlight">Montcada i Reixac</span>, apasionado por la infraestructura tecnológica y la ciberseguridad.',
    'about.p2': 'Además de mi formación técnica, soy jugador de rugby. Este deporte me ha enseñado el valor real del compañerismo, la disciplina, el trabajo en equipo y la motivación por buscar siempre nuevos retos con actitud y responsabilidad.',
    'cards.infra.title': 'Infraestructura',
    'cards.infra.desc': 'Sistemas, Redes, Cloud',
    'cards.security.title': 'Ciberseguridad',
    'cards.security.desc': 'Perfil ASIXC',
    'cards.rugby.title': 'Rugby',
    'cards.rugby.desc': 'Disciplina & Equipo',
    'cards.langs.title': 'Idiomas',
    'cards.langs.desc': 'ES · CA · EN B2',
    'skills.title': 'Stack Tecnológico',
    'skills.systems': 'Sistemas & Infraestructura',
    'skills.network': 'Redes',
    'skills.networking': 'Configuración de equipos',
    'skills.dev': 'Desarrollo & Herramientas',
    'skills.db': 'Bases de Datos',
    'skills.sgbd': 'Administración SGBD',
    'skills.languages': 'Idiomas',
    'skills.extra': 'Aptitudes Extra',
    'skills.license': 'Carnet B',
    'skills.car': 'Coche propio',
    'skills.mobility': 'Disponibilidad de traslado',
    'lang.ca': 'Catalán',
    'lang.es': 'Castellano',
    'lang.en': 'Inglés',
    'lang.native': 'Nativo',
    'experience.title': 'Experiencia',
    'exp.aramark.role': 'Servicio de barra en eventos',
    'exp.aramark.date': 'Mar 2025 — Actualidad',
    'exp.aramark.desc': 'Atención al público en diferentes idiomas en partidos de fútbol del FC Barcelona. Gestión de barra en eventos de alto volumen de asistencia.',
    'exp.cepsa.role': 'Empleado de Estación de Servicio',
    'exp.cepsa.date': 'Jun 2025 — Sep 2025',
    'exp.cepsa.desc': 'Operaciones en estación de servicio, atención al cliente y gestión de caja.',
    'exp.monitor.company': 'Monitor de actividades infantiles',
    'exp.monitor.role': 'Educación no formal',
    'exp.monitor.desc': 'Organización y dinamización de actividades para grupos de menores. Desarrollo de habilidades de liderazgo y gestión de equipos.',
    'tag.customer': 'Atención al cliente',
    'tag.multilingual': 'Multilingüe',
    'tag.events': 'Eventos',
    'tag.operations': 'Operaciones',
    'tag.cash': 'Gestión de caja',
    'tag.leadership': 'Liderazgo',
    'tag.teamwork': 'Trabajo en equipo',
    'education.title': 'Formación',
    'edu.asix.date': '2024 — Actualidad',
    'edu.asix.title': 'Administración de Sistemas Informáticos en Red',
    'edu.asix.spec': 'Perfil Ciberseguridad',
    'edu.bat.date': '2022 — 2024',
    'edu.bat.title': 'Bachillerato Tecnológico',
    'edu.bat.spec': 'Ciencias y Tecnología',
    'contact.title': 'Contacto',
    'contact.role': 'Sistemas & Ciberseguridad',
    'form.name': 'Nombre',
    'form.namePlaceholder': 'Tu nombre completo',
    'form.emailPlaceholder': 'tu@email.com',
    'form.message': 'Mensaje',
    'form.messagePlaceholder': 'Cuéntame en qué puedo ayudarte...',
    'form.send': 'Enviar Mensaje',
    'form.sending': 'Enviando...',
    'form.success': '¡Mensaje enviado!',
    'footer.made': 'Diseñado & desarrollado con'
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'hero.status': 'Available for internships & work',
    'hero.subtitle': 'Systems Administration and Cybersecurity Technician. Specialized in cloud infrastructure, networking and IT security.',
    'hero.cta.primary': 'View Experience',
    'hero.cta.secondary': 'Get in Touch',
    'stats.english': 'English',
    'stats.experience': 'Years Exp.',
    'stats.location': 'Location',
    'about.title': 'About Me',
    'about.p1': 'I am an <span class="highlight">ASIXC</span> student based in <span class="highlight">Montcada i Reixac</span>, passionate about technology infrastructure and cybersecurity.',
    'about.p2': 'Beyond my technical training, I am a rugby player. This sport has taught me the real value of teamwork, discipline, and the motivation to always seek new challenges with attitude and responsibility.',
    'cards.infra.title': 'Infrastructure',
    'cards.infra.desc': 'Systems, Networks, Cloud',
    'cards.security.title': 'Cybersecurity',
    'cards.security.desc': 'ASIXC Profile',
    'cards.rugby.title': 'Rugby',
    'cards.rugby.desc': 'Discipline & Team',
    'cards.langs.title': 'Languages',
    'cards.langs.desc': 'ES · CA · EN B2',
    'skills.title': 'Tech Stack',
    'skills.systems': 'Systems & Infrastructure',
    'skills.network': 'Networking',
    'skills.networking': 'Equipment Configuration',
    'skills.dev': 'Development & Tools',
    'skills.db': 'Databases',
    'skills.sgbd': 'DBMS Administration',
    'skills.languages': 'Languages',
    'skills.extra': 'Additional Skills',
    'skills.license': "Driver's License B",
    'skills.car': 'Own Vehicle',
    'skills.mobility': 'Willing to Relocate',
    'lang.ca': 'Catalan',
    'lang.es': 'Spanish',
    'lang.en': 'English',
    'lang.native': 'Native',
    'experience.title': 'Experience',
    'exp.aramark.role': 'Event Bar Service',
    'exp.aramark.date': 'Mar 2025 — Present',
    'exp.aramark.desc': 'Customer service in multiple languages at FC Barcelona football matches. Bar management at high-attendance events.',
    'exp.cepsa.role': 'Gas Station Attendant',
    'exp.cepsa.date': 'Jun 2025 — Sep 2025',
    'exp.cepsa.desc': 'Gas station operations, customer service and cash management.',
    'exp.monitor.company': "Children's Activity Monitor",
    'exp.monitor.role': 'Non-formal Education',
    'exp.monitor.desc': 'Organization and facilitation of activities for groups of minors. Development of leadership and team management skills.',
    'tag.customer': 'Customer Service',
    'tag.multilingual': 'Multilingual',
    'tag.events': 'Events',
    'tag.operations': 'Operations',
    'tag.cash': 'Cash Management',
    'tag.leadership': 'Leadership',
    'tag.teamwork': 'Teamwork',
    'education.title': 'Education',
    'edu.asix.date': '2024 — Present',
    'edu.asix.title': 'Network Systems Administration',
    'edu.asix.spec': 'Cybersecurity Profile',
    'edu.bat.date': '2022 — 2024',
    'edu.bat.title': 'Technological Baccalaureate',
    'edu.bat.spec': 'Science & Technology',
    'contact.title': 'Contact',
    'contact.role': 'Systems & Cybersecurity',
    'form.name': 'Name',
    'form.namePlaceholder': 'Your full name',
    'form.emailPlaceholder': 'your@email.com',
    'form.message': 'Message',
    'form.messagePlaceholder': 'Tell me how I can help you...',
    'form.send': 'Send Message',
    'form.sending': 'Sending...',
    'form.success': 'Message sent!',
    'footer.made': 'Designed & developed with'
  }
};

// ============================================================
// LANGUAGE MANAGER
// ============================================================

class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'es';
    this.buttons = document.querySelectorAll('.lang-btn');
    this.init();
  }

  init() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => this.setLanguage(btn.dataset.lang));
    });
    this.setLanguage(this.currentLang, false);
  }

  setLanguage(lang, save = true) {
    this.currentLang = lang;
    if (save) localStorage.setItem('lang', lang);
    
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    
    this.buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    this.updateContent();
    this.updatePlaceholders();
  }

  updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const translation = translations[this.currentLang][key];
      if (translation) {
        if (key.includes('.')) {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
    });
  }

  updatePlaceholders() {
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const translation = translations[this.currentLang][key];
      if (translation) el.placeholder = translation;
    });
  }

  getText(key) {
    return translations[this.currentLang][key] || key;
  }
}

// ============================================================
// CUSTOM CURSOR
// ============================================================

class CustomCursor {
  constructor() {
    this.cursor = document.querySelector('.cursor');
    this.dot = document.querySelector('.cursor-dot');
    this.mouseX = 0;
    this.mouseY = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.dotX = 0;
    this.dotY = 0;
    
    if (!this.cursor || window.matchMedia('(pointer: coarse)').matches) return;
    
    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    this.addHoverEffects();
    this.animate();
  }

  addHoverEffects() {
    const hoverElements = document.querySelectorAll(
      'a, button, .btn, .feature-card, .skill-block, .timeline-content, ' +
      '.edu-card, .contact-item, .lang-btn, .menu-toggle'
    );

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => this.cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => this.cursor.classList.remove('hover'));
    });
  }

  animate() {
    // Smooth follow for main cursor
    this.cursorX += (this.mouseX - this.cursorX) * CONFIG.cursor.smoothing;
    this.cursorY += (this.mouseY - this.cursorY) * CONFIG.cursor.smoothing;
    
    // Faster follow for dot
    this.dotX += (this.mouseX - this.dotX) * CONFIG.cursor.dotSmoothing;
    this.dotY += (this.mouseY - this.dotY) * CONFIG.cursor.dotSmoothing;

    this.cursor.style.left = this.cursorX + 'px';
    this.cursor.style.top = this.cursorY + 'px';
    this.dot.style.left = this.dotX + 'px';
    this.dot.style.top = this.dotY + 'px';

    requestAnimationFrame(() => this.animate());
  }
}

// ============================================================
// PARTICLE SYSTEM
// ============================================================

class ParticleSystem {
  constructor() {
    this.canvas = document.getElementById('particles-canvas');
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null };
    
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    this.createParticles();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    for (let i = 0; i < CONFIG.particles.count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * CONFIG.particles.speed,
        vy: (Math.random() - 0.5) * CONFIG.particles.speed,
        size: Math.random() * 2 + 1
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach((p, i) => {
      // Mouse interaction
      if (this.mouse.x != null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < CONFIG.particles.mouseDistance) {
          const force = (CONFIG.particles.mouseDistance - dist) / CONFIG.particles.mouseDistance;
          p.vx -= (dx / dist) * force * 0.02;
          p.vy -= (dy / dist) * force * 0.02;
        }
      }

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = CONFIG.particles.color;
      this.ctx.fill();

      // Draw connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.particles.connectionDistance) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 * (1 - dist / CONFIG.particles.connectionDistance)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================

class ScrollAnimations {
  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersect(entries),
      {
        threshold: CONFIG.animations.threshold,
        rootMargin: CONFIG.animations.rootMargin
      }
    );
    
    this.init();
  }

  init() {
    // Reveal animations
    document.querySelectorAll('.reveal').forEach(el => {
      this.observer.observe(el);
    });

    // Timeline items
    document.querySelectorAll('.timeline-item').forEach(el => {
      this.observer.observe(el);
    });

    // Progress bars
    document.querySelectorAll('.lang-progress').forEach(el => {
      this.observer.observe(el);
    });

    this.initNavbar();
    this.initParallax();
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animate progress bars
        if (entry.target.classList.contains('lang-progress')) {
          const width = entry.target.dataset.width || entry.target.style.width;
          entry.target.style.width = width;
        }
        
        // Stagger children for timeline
        if (entry.target.classList.contains('timeline-item')) {
          const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.1}s`;
        }
      }
    });
  }

  initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }

  initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      
      const orb = hero.querySelector('.gradient-orb');
      if (orb) {
        orb.style.transform = `translateY(${rate}px)`;
      }
    });
  }
}

// ============================================================
// MOBILE MENU
// ============================================================

class MobileMenu {
  constructor() {
    this.toggle = document.querySelector('.menu-toggle');
    this.menu = document.querySelector('.mobile-menu');
    this.links = this.menu?.querySelectorAll('a');
    
    if (this.toggle) this.init();
  }

  init() {
    this.toggle.addEventListener('click', () => this.toggleMenu());
    
    this.links?.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.menu.classList.contains('active')) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.toggle.classList.toggle('active');
    this.menu.classList.toggle('active');
    document.body.style.overflow = this.menu.classList.contains('active') ? 'hidden' : '';
  }

  closeMenu() {
    this.toggle.classList.remove('active');
    this.menu.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ============================================================
// FORM HANDLER
// ============================================================

class FormHandler {
  constructor() {
    this.form = document.getElementById('contactForm');
    if (this.form) this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const btn = this.form.querySelector('.submit-btn');
    const langManager = window.langManager;
    
    // Validate
    const inputs = this.form.querySelectorAll('.form-input');
    let valid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        this.shake(input);
      }
    });

    if (!valid) return;

    // Loading state
    btn.classList.add('sending');
    btn.textContent = langManager.getText('form.sending');

    // Simulate API call
    setTimeout(() => {
      btn.classList.remove('sending');
      btn.classList.add('success');
      btn.textContent = langManager.getText('form.success');
      
      // Reset form
      this.form.reset();
      
      // Reset button after delay
      setTimeout(() => {
        btn.classList.remove('success');
        btn.textContent = langManager.getText('form.send');
      }, 3000);
    }, 1500);
  }

  shake(element) {
    element.style.animation = 'shake 0.5s ease';
    element.style.borderColor = '#ff4444';
    
    setTimeout(() => {
      element.style.animation = '';
      element.style.borderColor = '';
    }, 500);
  }
}

// ============================================================
// MAGNETIC EFFECTS
// ============================================================

class MagneticElements {
  constructor() {
    this.elements = document.querySelectorAll('.magnetic');
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    this.init();
  }

  init() {
    this.elements.forEach(el => {
      el.addEventListener('mousemove', (e) => this.handleMove(e, el));
      el.addEventListener('mouseleave', () => this.handleLeave(el));
    });
  }

  handleMove(e, el) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height
  }
// Continuación de MagneticElements...

  handleMove(e, el) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const strength = 0.3;
    
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  handleLeave(el) {
    el.style.transform = '';
    el.style.transition = 'transform 0.3s var(--ease-out-expo)';
  }
}

// ============================================================
// TEXT SCRAMBLE EFFECT
// ============================================================

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scramble-char">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// ============================================================
// SMOOTH SCROLL
// ============================================================

class SmoothScroll {
  constructor() {
    this.links = document.querySelectorAll('a[href^="#"]');
    this.init();
  }

  init() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          const offset = 80; // navbar height
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// ============================================================
// TILT EFFECT FOR CARDS
// ============================================================

class TiltEffect {
  constructor() {
    this.cards = document.querySelectorAll('.feature-card, .skill-block, .edu-card, .timeline-content');
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    this.init();
  }

  init() {
    this.cards.forEach(card => {
      card.addEventListener('mousemove', (e) => this.handleMove(e, card));
      card.addEventListener('mouseleave', () => this.handleLeave(card));
    });
  }

  handleMove(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  }

  handleLeave(card) {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s var(--ease-out-expo)';
  }
}

// ============================================================
// GLITCH EFFECT ON HOVER
// ============================================================

class GlitchEffect {
  constructor() {
    this.elements = document.querySelectorAll('.glitch');
    this.init();
  }

  init() {
    this.elements.forEach(el => {
      el.setAttribute('data-text', el.textContent);
    });
  }
}

// ============================================================
// TYPING EFFECT
// ============================================================

class TypingEffect {
  constructor(element, text, speed = 100) {
    this.element = element;
    this.text = text;
    this.speed = speed;
    this.index = 0;
  }

  type() {
    if (this.index < this.text.length) {
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), this.speed);
    }
  }

  start() {
    this.element.textContent = '';
    this.type();
  }
}

// ============================================================
// DARK MODE DETECTION (para futuras expansiones)
// ============================================================

class ThemeManager {
  constructor() {
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.init();
  }

  init() {
    // El sitio ya es dark por defecto, pero podemos escuchar cambios
    this.prefersDark.addEventListener('change', (e) => {
      if (!e.matches) {
        // Usuario cambió a modo claro en sistema
        console.log('Modo claro detectado - el sitio mantiene tema oscuro por diseño');
      }
    });
  }
}

// ============================================================
// PERFORMANCE MONITOR
// ============================================================

class PerformanceMonitor {
  constructor() {
    this.init();
  }

  init() {
    // Reducir animaciones si el usuario prefiere movimiento reducido
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--transition-speed', '0.01ms');
    }

    // Pausar canvas cuando no es visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Pausar animaciones intensivas
      }
    });
  }
}

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar gestor de idiomas primero (lo necesitan otros módulos)
  window.langManager = new LanguageManager();
  
  // Inicializar todos los módulos
  new CustomCursor();
  new ParticleSystem();
  new ScrollAnimations();
  new MobileMenu();
  new FormHandler();
  new MagneticElements();
  new SmoothScroll();
  new TiltEffect();
  new GlitchEffect();
  new ThemeManager();
  new PerformanceMonitor();

  // Efecto de typing para el subtítulo del hero (opcional)
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    setTimeout(() => {
      const typing = new TypingEffect(heroSubtitle, originalText, 30);
      typing.start();
    }, 1000);
  }

  // Preloader simple
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 500);
    });
  }

  console.log('%c Marc Manzorro Portfolio ', 'background: linear-gradient(135deg, #00f0ff, #7000ff); color: #000; padding: 10px 20px; font-weight: bold; font-family: monospace;');
  console.log('%c Systems & Cybersecurity ', 'color: #00f0ff; font-family: monospace;');
});

// ============================================================
// UTILIDADES GLOBALES
// ============================================================

// Debounce para eventos de scroll/resize
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle para eventos frecuentes
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Detectar cuando elementos entran en viewport (alternativa simple)
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Exportar para uso global si es necesario
window.PortfolioUtils = {
  debounce,
  throttle,
  isInViewport,
  TextScramble,
  TypingEffect
};