import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Sprite from '../img/icons.svg';
export function accordion() {
  document.addEventListener('DOMContentLoaded', function () {
    new Accordion('.accordion-container', {
      duration: 700,
      showMultiple: true,
    });

    const aboutmeButtons = document.querySelectorAll('.aboutme-ac-trigger');

    aboutmeButtons.forEach(button => {
      button.addEventListener('click', function () {
        handler4(button);
      });
    });
  });

  function handler4(button) {
    const SvgLink = button.querySelector('.aboutme-accordeon-svg use');
    const accordeonList = button.closest('.aboutme-ac');
    const isActive = accordeonList.classList.contains('is-active');

    const iconStan = isActive
      ? '#icon-accordeon_mobile_opened_svg-min'
      : '#icon-accordeon_svg_mobile-min';

    SvgLink.setAttribute('href', `${Sprite}${iconStan}`);
  }
}

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
export function swiper1() {
  document.addEventListener('DOMContentLoaded', function () {
    const swiperSlide = document.querySelector('.swiper-slide');
    const swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
      },
      direction: 'horizontal',
      spaceBetween: 0,
      enabled: true,
      loop: true,
      watchOverflow: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      breakpoints: {
        375: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 6,
        },
      },
      on: {
        slideChange: function () {
          const slides = document.querySelectorAll('.aboutme-swiper-slide');
          slides.forEach(slide => {
            slide.style.backgroundColor = '';
          });

          const activeSlide = slides[this.activeIndex];
          activeSlide.style.backgroundColor = '#ed3b44';
        },
      },
    });
  });
}
