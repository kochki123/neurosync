// Animated gradient sweep on module visuals
document.querySelectorAll('.module__visual').forEach(v => {
  v.addEventListener('mouseenter', () => {
    v.animate(
      [{filter:'hue-rotate(0)'},{filter:'hue-rotate(60deg)'},{filter:'hue-rotate(0)'}],
      {duration:1800}
    );
  });
});
