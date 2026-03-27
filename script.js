// ArtStudio3D – Landing Page Scripts

// ── Navbar scroll effect ──────────────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 60
    ? 'rgba(13,0,31,0.98)'
    : 'rgba(13,0,31,0.88)';
});

// ── Portfolio tabs (visual only) ──────────────────────────
const tabs = document.querySelectorAll('.ptab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// ── Scroll reveal ─────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.pain-item, .benefit-card, .diff-card, .testimonial-card, .stat-card, .step, .obj-card, .faq-item'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ── Smooth anchor ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});
