import Swiper from 'swiper';

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--grid-gap'));
const portSlide = document.querySelector('.portfolio-section__items');

const portfolioSlider = new Swiper('.portfolio-section__items', {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  on: {
    init: function () {
      console.log('swiper initialized');

      const activeSlide = portSlide.querySelector('.swiper-slide-active');

      console.log(activeSlide);
    },
  },
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev'
  },
});

portfolioSlider.on('slideChange', function () {
  console.log('slide changed');
});
