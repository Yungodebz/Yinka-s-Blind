// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Quote form → WhatsApp
document.getElementById('quoteForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const msg = `Hello Yinka Interior! 👋

Name: ${f.name.value}
Phone: ${f.phone.value}
Project: ${f.room.value}

${f.message.value}`;
  window.open(`https://wa.me/2349069164276?text=${encodeURIComponent(msg)}`, '_blank');
});