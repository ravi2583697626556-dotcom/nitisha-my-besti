/* ── Generate petals ── */
const emojis = ['🌸','🪷','🌺','🌼','✿','❀'];
const container = document.getElementById('petals');
for (let i = 0; i < 28; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (7 + Math.random() * 10) + 's';
  p.style.animationDelay = (-Math.random() * 12) + 's';
  p.style.fontSize = (.9 + Math.random() * .9) + 'rem';
  p.style.opacity = .4 + Math.random() * .5;
  container.appendChild(p);
}

/* ── Scroll reveal ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Card stagger ── */
document.querySelectorAll('.card').forEach((c, i) => {
  c.style.animationDelay = (i * .12) + 's';
});
