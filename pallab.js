const nav = document.getElementById('navigation');

// Listen for scroll events
window.addEventListener('scroll', () => {
  // If we have scrolled down at least 50px, add the "scrolled" class
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});