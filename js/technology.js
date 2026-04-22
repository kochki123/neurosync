// Subtle pulse on icons when visible
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.animate(
        [{transform:'scale(1)'},{transform:'scale(1.12)'},{transform:'scale(1)'}],
        {duration:900}
      );
    }
  });
},{threshold:.6});
document.querySelectorAll('.card__icon').forEach(i => obs.observe(i));
