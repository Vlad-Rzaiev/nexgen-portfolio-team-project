document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.querySelector('.covers-section-js');
  const coversMargueeLine = document.querySelectorAll(
    '.covers-marquee__line-js'
  );

  if (!coversSection) return;

  const sectionInViewport = new IntersectionObserver(
    cards => {
      cards.forEach(card => {
        if (card.isIntersecting) {
          coversMargueeLine.forEach(item => item.classList.add('animated'));
        } else {
          coversMargueeLine.forEach(item => item.classList.remove('animated'));
        }
      });
    },
    { threshold: 0.5 }
  );

  sectionInViewport.observe(coversSection);
});
