// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Année courante dans le pied de page
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
