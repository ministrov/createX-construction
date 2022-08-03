import Swiper from 'swiper';

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--grid-gap'));
const portSlide = document.querySelector('.portfolio-section__items');

const portfolioSlider = new Swiper(portSlide, {
  slidesPerView: 3,
  spaceBetween: gap,
  on: {
    init: function () {
      console.log('swiper initialized');

      const activeSlide = portSlide.querySelector('.swiper-slide-active');

      const nextActiveSlide = activeSlide.nextElementSibling;

      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');

      nextActiveSlide.classList.add('slider-visible');

      nextNextActiveSlide.classList.add('slider-visible');
    },
  },
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev'
  },
});

portfolioSlider.on('slideChange', function () {
  console.log('slide changed');

  const activeSlide = portSlide.querySelector('.swiper-slide-next');

  const nextActiveSlide = activeSlide.nextElementSibling;

  const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

  activeSlide.classList.add('slider-visible');

  nextActiveSlide.classList.add('slider-visible');

  nextNextActiveSlide.classList.add('slider-visible');

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible');
  })
});
