// Cursor glow
const glow = document.createElement('div');
glow.classList.add('cursor-glow');
document.body.appendChild(glow);

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// Skill bars animation
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.skill-fill');
      fills.forEach(fill => {
        const pct = fill.getAttribute('data-pct');
        setTimeout(() => { fill.style.width = pct + '%'; }, 200);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(el => skillObserver.observe(el));

// Typed text effect
const typed = document.getElementById('typed-text');
if (typed) {
  const words = [' full-stack junior', ' PHP / Java'];
  let wi = 0, ci = 0, deleting = false;

  function typeEffect() {
    const word = words[wi];
    if (!deleting) {
      typed.textContent = word.slice(0, ci + 1);
      ci++;
      if (ci === word.length) { deleting = true; setTimeout(typeEffect, 1800); return; }
    } else {
      typed.textContent = word.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(typeEffect, deleting ? 60 : 100);
  }
  typeEffect();
}
