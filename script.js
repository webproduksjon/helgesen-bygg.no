const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

toggle?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

document.querySelector('.contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  const note = event.currentTarget.querySelector('.form-note');
  button.innerHTML = 'Takk for forespørselen <span>✓</span>';
  note.textContent = 'Dette er en forhåndsvisning – ring oss gjerne direkte på 981 24 042.';
});
