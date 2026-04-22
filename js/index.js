// Subtle parallax on hero orbs
const orbs = document.querySelectorAll('.hero .orb');
window.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - .5) * 30;
  const y = (e.clientY / window.innerHeight - .5) * 30;
  orbs.forEach((o,i) => {
    const f = i ? -1 : 1;
    o.style.transform = `translate(${x*f}px,${y*f}px)`;
  });
});

// Animate stats numbers
const counters = document.querySelectorAll('.stat__num[data-to]');
const obs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if(!en.isIntersecting) return;
    const el = en.target;
    const to = parseFloat(el.dataset.to);
    const suffix = el.dataset.suffix || '';
    let cur = 0;
    const step = to / 60;
    const tick = () => {
      cur += step;
      if(cur >= to){ el.textContent = to + suffix; return; }
      el.textContent = Math.round(cur) + suffix;
      requestAnimationFrame(tick);
    };
    tick();
    obs.unobserve(el);
  });
},{threshold:.5});
counters.forEach(c => obs.observe(c));
