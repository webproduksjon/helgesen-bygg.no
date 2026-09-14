const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

function closeMenu() {
  mobileNav?.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}

toggle?.addEventListener('click', event => {
  event.stopPropagation();
  const isOpen = mobileNav?.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

mobileNav?.addEventListener('click', event => event.stopPropagation());
document.addEventListener('click', event => {
  if (mobileNav?.classList.contains('open') && !mobileNav.contains(event.target) && event.target !== toggle) closeMenu();
});
document.addEventListener('touchstart', event => {
  if (mobileNav?.classList.contains('open') && !mobileNav.contains(event.target) && event.target !== toggle) closeMenu();
}, {passive: true});

document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', closeMenu));

document.querySelector('#contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const note = form.querySelector('.form-note');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const button = form.querySelector('button');
  button.innerHTML = 'Takk for henvendelsen <b>✓</b>';
  note.textContent = 'Dette er en forhåndsvisning. Ring 981 24 042 for direkte kontakt.';
});
