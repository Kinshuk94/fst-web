// js/main.js
// Nav scroll shadow + mobile menu + transport tabs

document.addEventListener('DOMContentLoaded', () => {
  // ── Nav scroll shadow ──────────────────────────────
  const nav = document.getElementById('site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });
  }

  // ── Mobile hamburger ───────────────────────────────
  document.addEventListener('click', e => {
    const btn = e.target.closest('.nav-hamburger');
    if (btn && nav) {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    } else if (nav && nav.classList.contains('open') && !e.target.closest('.site-nav')) {
      nav.classList.remove('open');
    }
  });

  // ── Transport tabs (reach.html) ────────────────────
  const tabs = document.querySelectorAll('.transport-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.transport-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
});
