/* ============================================
   IOVINO — main.js
   Cursor · Scroll · Nav · i18n · Reveal
   ============================================ */

(() => {
  'use strict';

  /* ---------------------------------------
     Translations
     --------------------------------------- */
  const i18n = {
    es: {
      'nav.about':    'Bio',
      'nav.music':    'Música',
      'nav.live':     'Live',
      'nav.contact':  'Contacto',

      'hero.tag1':    'Disponible para shows · 2026',
      'hero.role':    'DJ / Producer',
      'hero.from':    'Argentina · Barcelona',
      'hero.scroll':  'Desliza',

      'about.kicker': '— Sobre Iovino',
      'about.title':  'Una carrera entre dos orillas del Atlántico.',
      'about.p1':     '<strong>Lautaro Gómez Iovino</strong>, conocido artísticamente como Iovino, es un DJ y productor argentino nacido en la Provincia de Buenos Aires en 1993, actualmente radicado en Barcelona.',
      'about.p2':     'Influenciado desde temprana edad por la música y sus diversos géneros, inició su carrera profesional como DJ en 2019, llevando su sonido a reconocidos clubes de la Provincia de Buenos Aires como Crobar, Bahrein, Elements Club, La Biblioteca y Niceto Club.',
      'about.p3':     'Su camino como productor comenzó en 2021. Desde entonces, ha lanzado música en sellos de renombre como <strong>The Soundgarden</strong> de Nick Warren, <strong>Musique de Lune</strong> y <strong>Slc6 Music</strong>, recibiendo apoyo constante de grandes referentes como Hernán Cattáneo, Nick Warren, John Digweed y Mariano Mellino.',
      'about.caption':'Retrato — Sesión 2025',

      'stats.dj':         'DJ desde',
      'stats.prod':       'Productor desde',
      'stats.audience':   'Audiencia',
      'stats.countries':  'Países en gira',

      'music.kicker':         '— Discografía',
      'music.title':          'Lanzamientos en sellos de referencia.',
      'labels.tsg':           'Sello fundado por Nick Warren. Una de las plataformas más respetadas del progressive contemporáneo.',
      'labels.mdl':           'Sello francés de melodic & deep house orientado a una estética nocturna y emocional.',
      'labels.slc6':          'Plataforma argentina ligada al circuito progressive sudamericano.',
      'labels.odst':          'Próximo lanzamiento en uno de los sellos más sólidos de la escena progressive.',
      'labels.flown':         'Lanzamiento programado para el ciclo 2026.',
      'labels.tag.released':  'Lanzado',
      'labels.tag.upcoming':  'Próximamente',

      'support.kicker':   '— Apoyado por',

      'live.kicker':  '— En vivo',
      'live.title':   'De los clubes de Buenos Aires al festival circuit europeo.',
      'live.clubs':   'Clubes',
      'live.shared':  'Compartió cabina con',
      'live.intl':    'Internacional',
      'live.us':      'Estados Unidos',
      'live.tour':    'Tour 2024',

      'contact.kicker':   '— Contacto',
      'contact.title':    '¿Trabajamos juntos?',
      'contact.lead':     'Bookings, releases, colaboraciones o consultas de prensa.',
      'contact.email':    'Email',
      'contact.presskitEs': 'Press Kit · ESP',
      'contact.presskitEn': 'Press Kit · EN',

      'footer.rights':    'Todos los derechos reservados',
    },
    en: {
      'nav.about':    'Bio',
      'nav.music':    'Music',
      'nav.live':     'Live',
      'nav.contact':  'Contact',

      'hero.tag1':    'Available for shows · 2026',
      'hero.role':    'DJ / Producer',
      'hero.from':    'Argentina · Barcelona',
      'hero.scroll':  'Scroll',

      'about.kicker': '— About Iovino',
      'about.title':  'A career bridging two shores of the Atlantic.',
      'about.p1':     '<strong>Lautaro Gómez Iovino</strong>, known artistically as Iovino, is an Argentine DJ and producer born in Buenos Aires Province in 1993, currently based in Barcelona.',
      'about.p2':     'Influenced from an early age by music and its diverse genres, he began his professional DJ career in 2019, bringing his sound to renowned clubs across Buenos Aires Province including Crobar, Bahrein, Elements Club, La Biblioteca and Niceto Club.',
      'about.p3':     'His journey as a producer started in 2021. Since then, he has released music on respected labels such as <strong>The Soundgarden</strong> by Nick Warren, <strong>Musique de Lune</strong> and <strong>Slc6 Music</strong>, receiving consistent support from major artists like Hernán Cattáneo, Nick Warren, John Digweed and Mariano Mellino.',
      'about.caption':'Portrait — 2025 Session',

      'stats.dj':         'DJ since',
      'stats.prod':       'Producer since',
      'stats.audience':   'Audience',
      'stats.countries':  'Countries toured',

      'music.kicker':         '— Discography',
      'music.title':          'Releases on industry-leading labels.',
      'labels.tsg':           'Label founded by Nick Warren. One of the most respected platforms in contemporary progressive music.',
      'labels.mdl':           'French melodic & deep house label with a nocturnal, emotional aesthetic.',
      'labels.slc6':          'Argentine platform tied to the South American progressive circuit.',
      'labels.odst':          'Upcoming release on one of the strongest labels in the progressive scene.',
      'labels.flown':         'Scheduled release for the 2026 cycle.',
      'labels.tag.released':  'Released',
      'labels.tag.upcoming':  'Upcoming',

      'support.kicker':   '— Supported by',

      'live.kicker':  '— Live',
      'live.title':   'From the clubs of Buenos Aires to the European festival circuit.',
      'live.clubs':   'Clubs',
      'live.shared':  'Shared the booth with',
      'live.intl':    'International',
      'live.us':      'United States',
      'live.tour':    '2024 Tour',

      'contact.kicker':   '— Contact',
      'contact.title':    'Let\u2019s work together.',
      'contact.lead':     'Bookings, releases, collaborations or press inquiries.',
      'contact.email':    'Email',
      'contact.presskitEs': 'Press Kit · ESP',
      'contact.presskitEn': 'Press Kit · EN',

      'footer.rights':    'All rights reserved',
    },
  };

  function applyLang(lang) {
    if (!i18n[lang]) return;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = i18n[lang][key];
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    try { localStorage.setItem('iovino-lang', lang); } catch (_) {}
  }

  /* ---------------------------------------
     Init language
     --------------------------------------- */
  function initLang() {
    let saved = null;
    try { saved = localStorage.getItem('iovino-lang'); } catch (_) {}
    const browserLang = (navigator.language || 'es').slice(0, 2);
    const initial = saved || (browserLang === 'en' ? 'en' : 'es');
    applyLang(initial);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
  }

  /* ---------------------------------------
     Custom cursor
     --------------------------------------- */
  function initCursor() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const cursor = document.querySelector('.cursor');
    const dot    = document.querySelector('.cursor-dot');
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const lerp = (a, b, t) => a + (b - a) * t;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function tick() {
      cursorX = lerp(cursorX, mouseX, 0.18);
      cursorY = lerp(cursorY, mouseY, 0.18);
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    }
    tick();

    const hoverable = 'a, button, .label-card, .contact-link, .lang-btn, .nav__menu';
    document.querySelectorAll(hoverable).forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
  }

  /* ---------------------------------------
     Nav scroll behaviour
     --------------------------------------- */
  function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 30);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------------------------------
     Mobile menu
     --------------------------------------- */
  function initMobileMenu() {
    const btn  = document.querySelector('.nav__menu');
    const menu = document.querySelector('.mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
      menu.setAttribute('aria-hidden', String(open));
      document.body.style.overflow = !open ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------------------------------------
     Scroll reveal — apply to sections
     --------------------------------------- */
  function initReveal() {
    const targets = document.querySelectorAll(
      '.about__heading, .about__copy, .about__photo, .stat, ' +
      '.music__head, .label-card, .support, ' +
      '.live__media, .live__content, ' +
      '.contact__inner > *, .footer__inner > *'
    );

    targets.forEach(el => el.classList.add('reveal'));

    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // small staggered delay based on index in batch
          setTimeout(() => entry.target.classList.add('is-in'), i * 70);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(el => io.observe(el));
  }

  /* ---------------------------------------
     Smooth-scroll offset for fixed nav
     --------------------------------------- */
  function initAnchorOffset() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id === '#' || id === '#top') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const navH = document.getElementById('nav')?.offsetHeight || 60;
        const top = target.getBoundingClientRect().top + window.scrollY - navH + 1;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ---------------------------------------
     Boot
     --------------------------------------- */
  function boot() {
    initLang();
    initNav();
    initMobileMenu();
    initCursor();
    initReveal();
    initAnchorOffset();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
