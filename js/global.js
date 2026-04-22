/* Shared behaviors: nav toggle + scroll reveal + active link */
(function(){
  const burger = document.querySelector('.nav__burger');
  const links  = document.querySelector('.nav__links');
  if(burger && links){
    burger.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open);
      burger.textContent = open ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('is-open'))
    );
  }

  // Mark active link based on current page
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('is-active');
  });

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
