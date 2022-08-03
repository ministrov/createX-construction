import Swiper from 'swiper';

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--grid-gap'));

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev'
  },
});

console.log(gap, swiper);
