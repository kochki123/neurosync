const form = document.querySelector('.form');
const msg  = document.querySelector('.form__msg');
form?.addEventListener('submit', e => {
  e.preventDefault();
  if(!form.checkValidity()){ form.reportValidity(); return; }
  msg.textContent = '✓ Thanks — we\'ll be in touch from the future of mobility.';
  msg.classList.add('is-shown');
  form.reset();
  setTimeout(() => msg.classList.remove('is-shown'), 5000);
});
