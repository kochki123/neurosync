// Highlight timeline items as they enter
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.style.transition = 'background .6s ease';
      e.target.style.background = 'linear-gradient(90deg,rgba(34,225,255,.06),transparent)';
      setTimeout(() => e.target.style.background = '', 1200);
    }
  });
},{threshold:.5});
document.querySelectorAll('.tl-item').forEach(i => obs.observe(i));
