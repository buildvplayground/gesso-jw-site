/* ============ Gesso JW — app.js ============ */
(function () {
  'use strict';

  // ---- CTA aciona o popup do Merlin (clique simulado no launcher que o próprio Merlin injeta) ----
  function clickMerlinLauncher() {
    var btn = document.querySelector('.merlin-button-popup');
    if (btn) { btn.click(); return true; }
    return false;
  }
  document.querySelectorAll('[data-wa-btn]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      if (clickMerlinLauncher()) return;
      // Merlin ainda carregando o launch.json: tenta por até 4s
      var waited = 0;
      var poll = setInterval(function () {
        waited += 150;
        if (clickMerlinLauncher() || waited >= 4000) clearInterval(poll);
      }, 150);
    });
  });

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Loader ----
  var loader = document.getElementById('loader');
  function hideLoader() { if (loader) loader.classList.add('done'); }
  window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, 2200); // fallback

  // ---- Header solid + nav mobile ----
  var header = document.getElementById('header');
  function onScrollHeader() { header.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  var nav = document.getElementById('nav');
  var toggle = document.getElementById('nav-toggle');
  function closeNav() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); }
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });

  // ---- Reveals (3 camadas: timer 1ª tela + observer + flush em salto) ----
  var revealEls = [].slice.call(document.querySelectorAll('[data-reveal]'));
  function showEl(el) { el.classList.add('in'); }
  if (reduced) {
    revealEls.forEach(showEl);
  } else {
    // stagger automático entre irmãos
    revealEls.forEach(function (el) {
      var sibs = [].filter.call(el.parentElement.children, function (c) { return c.hasAttribute('data-reveal'); });
      var i = sibs.indexOf(el);
      if (i > 0) el.style.transitionDelay = Math.min(i, 6) * 80 + 'ms';
    });
    // 1ª tela por timer (IO não dispara em aba oculta)
    setTimeout(function () {
      revealEls.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) showEl(el);
      });
    }, 140);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { showEl(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
    // camada de scroll (cobre saltos de âncora e ambientes sem IO):
    // revela com animação o que entrou na viewport; sem animação o que já passou
    var rvTicking = false;
    function revealScan() {
      rvTicking = false;
      var vh = window.innerHeight;
      revealEls = revealEls.filter(function (el) {
        if (el.classList.contains('in')) return false;
        var r = el.getBoundingClientRect();
        if (r.bottom < vh * 0.3) { el.style.transition = 'none'; showEl(el); return false; }
        if (r.top < vh * 0.93 && r.bottom > 0) { showEl(el); return false; }
        return true;
      });
    }
    window.addEventListener('scroll', function () {
      if (!rvTicking) { rvTicking = true; requestAnimationFrame(revealScan); }
    }, { passive: true });
    // varredura por timer: cobre ambientes onde rAF/scroll/IO não disparam
    var sweep = setInterval(function () {
      revealScan();
      if (!revealEls.length) clearInterval(sweep);
    }, 500);
  }

  // ---- Parallax leve nas faixas editoriais (≤0.12) ----
  var pxSections = [].slice.call(document.querySelectorAll('[data-parallax] .break-img'));
  if (!reduced && pxSections.length && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    var ticking = false;
    function parallax() {
      pxSections.forEach(function (img) {
        var r = img.parentElement.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          var p = (r.top + r.height / 2 - window.innerHeight / 2) * 0.12;
          img.style.transform = 'translateY(' + p.toFixed(1) + 'px)';
        }
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(parallax); ticking = true; }
    }, { passive: true });
    parallax();
  }

  // ---- Lightbox galeria por obra ----
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lb-img');
  var lbCount = document.getElementById('lb-count');
  var lbCap = document.getElementById('lb-cap');
  var lbPrev = document.getElementById('lb-prev');
  var lbNext = document.getElementById('lb-next');
  var gallery = [], idx = 0, lastFocus = null;

  function lbShow() {
    lbImg.src = gallery[idx];
    lbCount.textContent = (idx + 1) + ' / ' + gallery.length;
  }
  function lbOpen(list, cap, origin) {
    gallery = list; idx = 0; lastFocus = origin;
    lbCap.textContent = cap || '';
    var single = gallery.length < 2;
    lbPrev.style.display = single ? 'none' : 'flex';
    lbNext.style.display = single ? 'none' : 'flex';
    lbCount.style.display = single ? 'none' : 'block';
    lbShow();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('lb-close').focus();
  }
  function lbClose() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  function lbStep(d) { idx = (idx + d + gallery.length) % gallery.length; lbShow(); }

  document.querySelectorAll('.pf-card[data-gallery]').forEach(function (card) {
    card.addEventListener('click', function () {
      lbOpen(card.getAttribute('data-gallery').split('|'), card.getAttribute('data-cap'), card);
    });
  });
  lbPrev.addEventListener('click', function () { lbStep(-1); });
  lbNext.addEventListener('click', function () { lbStep(1); });
  document.getElementById('lb-close').addEventListener('click', lbClose);
  lb.addEventListener('click', function (e) { if (e.target === lb) lbClose(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowLeft' && gallery.length > 1) lbStep(-1);
    if (e.key === 'ArrowRight' && gallery.length > 1) lbStep(1);
  });

  // ---- FAQ ----
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.parentElement, a = item.querySelector('.faq-a');
      var open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---- Scroll com inércia (lerp) — só desktop/ponteiro fino, arquitetura B ----
  // Guarda: só sequestra o wheel depois que o rAF comprovadamente roda neste ambiente.
  if (!reduced && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    var rafAlive = false;
    requestAnimationFrame(function () { rafAlive = true; });
    setTimeout(function () {
      if (!rafAlive) return; // ambiente sem rAF (doc oculto): mantém scroll nativo
      var target = window.scrollY, current = target, running = false;
      function maxScroll() { return document.documentElement.scrollHeight - window.innerHeight; }
      function loop() {
        current += (target - current) * 0.1;
        if (Math.abs(target - current) < 0.5) { current = target; running = false; }
        window.scrollTo({ top: current, behavior: 'instant' });
        if (running) requestAnimationFrame(loop);
      }
      function scrollableUnder(el) {
        var n = el, i = 0;
        while (n && n !== document.body && i++ < 8) {
          var s = getComputedStyle(n);
          if (/(auto|scroll)/.test(s.overflowY + s.overflowX) && n.scrollHeight > n.clientHeight + 4) return true;
          n = n.parentElement;
        }
        return false;
      }
      window.addEventListener('wheel', function (e) {
        if (document.body.style.overflow === 'hidden') return; // lightbox/menu aberto
        if (e.ctrlKey || scrollableUnder(e.target)) return;
        e.preventDefault();
        if (!running) { current = window.scrollY; }
        target = Math.max(0, Math.min(maxScroll(), (running ? target : current) + e.deltaY));
        if (!running) { running = true; requestAnimationFrame(loop); }
      }, { passive: false });
      // cliques em âncora/teclado interrompem o lerp e usam o nativo
      document.addEventListener('click', function (ev) {
        if (ev.target.closest && ev.target.closest('a[href^="#"]')) { running = false; }
      });
    }, 400);
  }

  // ---- Política de Privacidade + Cookie Notice (LGPD) ----
  function openModal(id) {
    var el = document.getElementById(id);
    if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
  }
  function closeModal(id) {
    var el = document.getElementById(id);
    if (el) {
      el.classList.remove('open');
      if (!document.querySelectorAll('.privacy-overlay.open').length) document.body.style.overflow = '';
    }
  }
  document.querySelectorAll('[data-modal]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); openModal(el.getAttribute('data-modal')); });
  });
  var privCl = document.getElementById('privacyClose');
  var privOv = document.getElementById('privacyOverlay');
  if (privCl) privCl.addEventListener('click', function () { closeModal('privacyOverlay'); });
  if (privOv) privOv.addEventListener('click', function (e) { if (e.target === privOv) closeModal('privacyOverlay'); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal('privacyOverlay');
  });
  var COOKIE_KEY = 'gesso_jw_cookie_ok';
  var notice = document.getElementById('cookieNotice');
  window.dataLayer = window.dataLayer || [];
  var storedConsent = localStorage.getItem(COOKIE_KEY);
  if (storedConsent) {
    // visitante recorrente: reemite o estado para o GTM condicionar as tags
    window.dataLayer.push({ event: storedConsent === 'granted' ? 'cookie_consent_granted' : 'cookie_consent_denied' });
  } else if (notice) {
    setTimeout(function () { notice.classList.add('show'); }, 1200);
  }
  function dismissCookie(consent) {
    if (notice) notice.classList.remove('show');
    localStorage.setItem(COOKIE_KEY, consent ? 'granted' : 'denied');
    // as tags (GTM/GA4/Pixel) devem escutar este evento para respeitar a LGPD
    window.dataLayer.push({ event: consent ? 'cookie_consent_granted' : 'cookie_consent_denied' });
  }
  var bAcc = document.getElementById('cookieAccept'), bDec = document.getElementById('cookieDecline');
  if (bAcc) bAcc.addEventListener('click', function () { dismissCookie(true); });
  if (bDec) bDec.addEventListener('click', function () { dismissCookie(false); });

  // ---- CTA "Como funciona": linha desenha + passos escalonados ----
  var flow = document.getElementById('steps-flow');
  if (flow) {
    if (reduced) { flow.classList.add('on'); }
    else {
      var sio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { flow.classList.add('on'); sio.disconnect(); } });
      }, { threshold: 0.35 });
      sio.observe(flow);
      var stepSweep = setInterval(function () {
        var r = flow.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.75 && r.bottom > 0) { flow.classList.add('on'); clearInterval(stepSweep); }
      }, 500);
    }
  }
})();
