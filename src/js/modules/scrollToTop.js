export default function scrollToTop() {
    const topArrow = document.querySelector('.top-arrow');

    window.addEventListener('scroll', () => {
        getWindowScrollTop(window);
    });

    function getWindowScrollTop() {

        if (window.pageYOffset >= 300) { // Расстояние от верха, при котором кнопка появляется
            topArrow.classList.add('top-arrow--show');
        } else {
            topArrow.classList.remove('top-arrow--show');
        }
    }

    topArrow.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#top').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}