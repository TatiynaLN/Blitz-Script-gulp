import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function slider() {
  if (document.querySelector('.slider-modules')) {
    const swiperModules = new Swiper('.slider-modules', {
      // spaceBetween: 24,
      loopedSlides: 1,
      autoHeight: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>';
        },
      },
      Keyboard: {
        enabled: true, // вкл-выкл
        onlyInViewport: true, // в пределах вьюпорта
        pageUpDown: true,// управление клавиатурой
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          loopedSlides: 1,

          centerdSlides: true
        },
        768: {
          slidesPerView: 2,
          loopedSlides: 2,
          spaceBetween: 24,
          slidesPerGroup: 2
        },
        1024: {
          slidesPerView: 3,
          loopedSlides: 3,
          spaceBetween: 24,
          slidesPerGroup: 3
        },
      }
    });
  }

}