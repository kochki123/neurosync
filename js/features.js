// Tilt cards on hover
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `translateY(-6px) rotateX(${-y*4}deg) rotateY(${x*4}deg)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});
