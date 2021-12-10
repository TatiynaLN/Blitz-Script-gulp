import Swiper from './../libs/swiper-bundle.min.js';

export default function slider() {
    if (document.querySelector('.swiper-catalog')) {
        const swiper = new Swiper('.swiper-catalog', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                // dynamicBullets: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
            // Управление клавиатурой
            Keyboard: {
                enabled: true, // вкл-выкл
                onlyInViewport: true, // в пределах вьюпорта
                pageUpDown: true,// управление клавиатурой
            },
            // autoplay: {
            //     delay: 2000,
            //     disableOnInteraction: false,
            // },
            // Активный слайд по центру
            centerdSlides: true,
            // Бесконечный слайд
            loop: true,
            // Скорость прокрутки
            speed: 400,
            autoHeight: true,
            watchOverflow: true,
            // spaceBetween: 50,
            centerdSlides: true,
            slidesPerView: 1
        });
        // let sliderBlock = document.querySelector('.swiper-projects');
        // sliderBlock.addEventListener("mouseleave", function (e) {
        //     swiper.params.autoplay.disableOnInteraction = false;
        //     // swiper.params.autoplay.delay = 50;
        //     swiper.autoplay.start();

        // });
        // sliderBlock.addEventListener("mouseenter", function (e) {
        //     swiper.autoplay.stop();
        // });
    }
}
