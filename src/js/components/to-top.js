import SmoothScroll from '../vendor/smooth-scroll.min';

const scroll = new SmoothScroll('.to-top');
const toTop = document.querySelector('.scroll-up');
let heroHeight;

if (document.querySelector('.hero')) {
  heroHeight = document.querySelector('.hero').offsetHeight;
}

if (document.querySelector('.page-hero')) {
  heroHeight = document.querySelector('page-hero').offsetHeight;
}

const isScrollUpVisible = (y = 0) => {
  if (y >= heroHeight) {
    toTop.classList.add('scroll-up--active');
  } else {
    toTop.classList.remove('scroll-up--active');
  }
}

isScrollUpVisible(window.scrollY);

window.addEventListener('scroll', () => {
  let y = window.scrollY;

  isScrollUpVisible(y);
})


