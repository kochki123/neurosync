// Sequentially highlight steps as they enter view
const steps = document.querySelectorAll('.step');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.querySelector('.step__num').animate(
        [{boxShadow:'0 0 30px -5px rgba(34,225,255,.6)'},
         {boxShadow:'0 0 60px 0 rgba(160,107,255,.85)'},
         {boxShadow:'0 0 30px -5px rgba(34,225,255,.6)'}],
        {duration:1600,iterations:1}
      );
    }
  });
},{threshold:.5});
steps.forEach(s => obs.observe(s));
