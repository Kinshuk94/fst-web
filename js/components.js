// js/components.js
// Injects nav and footer into every page. Edit here to update
// navigation or footer content across the whole site.

const NAV_HTML = `
<a href="index.html" class="nav-brand">Free Spirit's Tribe</a>
<div class="nav-links">
  <a href="stay.html">Stay</a>
  <a href="cafe.html">Cafe</a>
  <a href="explore.html">Explore</a>
  <a href="reach.html">Reach</a>
  <a href="contact.html">Contact</a>
</div>
<a href="contact.html" class="btn btn-primary nav-cta">Enquire</a>
<button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
`;

const FOOTER_HTML = `
<div class="footer-inner">
  <div>
    <div class="footer-brand-name">Free Spirit's Tribe</div>
    <p class="footer-address">
      Pulag Road, 400m ahead of Roerich Art Gallery<br>
      Naggar, Himachal Pradesh 175130<br>
      <a href="tel:+919582956085" style="color:rgba(240,230,210,0.6)">+91 95829 56085</a>
    </p>
  </div>
  <div class="footer-col">
    <div class="footer-col-title">Navigate</div>
    <a href="index.html">Home</a>
    <a href="stay.html">Stay</a>
    <a href="cafe.html">Cafe &amp; Amenities</a>
    <a href="explore.html">Explore</a>
    <a href="reach.html">How to Reach</a>
    <a href="contact.html">Contact</a>
  </div>
  <div class="footer-col">
    <div class="footer-col-title">Connect</div>
    <a href="https://www.instagram.com/freespiritstribe/" target="_blank" rel="noopener">Instagram</a>
    <a href="https://wa.me/919582956085" target="_blank" rel="noopener">WhatsApp</a>
    <a href="contact.html">Send a Message</a>
  </div>
</div>
<div class="footer-bottom">© 2026 Free Spirit's Tribe · Naggar, Himachal Pradesh</div>
`;

function initPage() {
  // Inject nav
  const nav = document.getElementById('site-nav');
  if (nav) nav.innerHTML = NAV_HTML;

  // Inject footer
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = FOOTER_HTML;

  // Mark active nav link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', initPage);
