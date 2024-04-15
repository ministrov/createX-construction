import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const item = document.querySelector('.nav__item');
const navLinks = document.querySelectorAll('.nav__item-link');
const windowPathname = window.location.pathname;

navLinks.forEach(link => {
  const navLinkPathname = new URL(link.href).pathname;

  if (windowPathname === navLinkPathname) {
    link.classList.add('nav__item-link--current');

    const active = document.createElement('div');
    active.className = 'nav__active';

    const state = Flip.getState(active);
    link.parentElement.appendChild(active);
    Flip.from(state, {
      duration: 0.8,
      absolute: true
    });
  }
});
