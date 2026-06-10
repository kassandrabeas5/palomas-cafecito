document.addEventListener('DOMContentLoaded', function () {
  const iconMap = {
    'icon-iced-coffee':   Icons.iced,
    'icon-hot-coffee':    Icons.coffee,
    'icon-matcha':        Icons.matcha,
    'icon-chai':          Icons.chai,
    'icon-agua':          Icons.agua,
    'icon-kids':          Icons.kids,
    'icon-sparkle':       Icons.sparkle,
    'icon-pastry':        Icons.pastry,
    'icon-community-val': Icons.community,
    'icon-heritage-val':  Icons.heritage,
    'icon-familia-val':   Icons.familia,
    'icon-fresh-val':     Icons.fresh,
    'icon-location':      Icons.location,
    'icon-clock':         Icons.clock,
    'icon-social':        Icons.social,
    'icon-loyalty':       Icons.coffee,
    'icon-churro':        Icons.coffee,
    'icon-mocha':         Icons.coffee,
    'icon-agua-card':     Icons.agua,
  };

  for (const [id, svg] of Object.entries(iconMap)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = svg;
  }
});

// === MOBILE HAMBURGER MENU ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// === SCROLL ANIMATIONS ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.card, .value-card, .menu-item, .menu-category, .about-text, .about-logo-block, .contact-block, .loyalty-tier, .hours-banner, .about-snippet, .featured, .neighborhood'
).forEach(el => observer.observe(el));