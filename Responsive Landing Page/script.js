const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;

  if (scrollY > 20) {
    document.querySelector('.navigation').classList.add('scrolled');
  } else {
    document.querySelector('.navigation').classList.remove('scrolled');
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
