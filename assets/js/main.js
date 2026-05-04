const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => io.observe(el));

// Typewriter animation for hero
document.addEventListener('DOMContentLoaded', () => {
  const typeEl = document.getElementById('typewriter');
  if (!typeEl) return;
  const phrases = [
    'PHP, Laravel & Vue.js',
    'Backend & API Developer',
    'REST APIs & Scalable Systems'
  ];
  let pIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[pIndex];
    if (!deleting) {
      charIndex++;
      typeEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      typeEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        pIndex = (pIndex + 1) % phrases.length;
        setTimeout(tick, 300);
        return;
      }
    }
    setTimeout(tick, deleting ? 40 : 90);
  }

  // small delay so hero animations run first
  setTimeout(tick, 600);
});
