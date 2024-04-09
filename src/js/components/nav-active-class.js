const navLinks = document.querySelectorAll('.nav__item-link');
const windowPathname = window.location.pathname;

navLinks.forEach(link => {
  if (link.href.includes(windowPathname)) {
    link.classList.add('nav__item-link--current');
  }
});

// console.log(window.location);
