const navLinks = document.querySelectorAll('.nav__item-link');
const windowPathname = window.location.pathname;

navLinks.forEach(link => {
  const navLinkPathname = new URL(link.href).pathname;

  console.log(navLinkPathname);
  if (windowPathname === navLinkPathname) {
    link.classList.add('nav__item-link--current');
  }
});

console.log(window.location);
