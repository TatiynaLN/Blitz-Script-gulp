

export default function modal() {
    if (document.querySelector('.overlay')) {
        let popupBg = document.querySelector('.overlay'); // Фон попап окна
        let popup = document.querySelector('.modal'); // Само окно
        let popup2 = document.querySelector('.modal2'); // Само окно
        let openPopupButtons = document.querySelectorAll('.open-modal'); // Кнопки для показа окна
        let openPopupButtons2 = document.querySelectorAll('.open-modal2'); // Кнопки для показа окна
        let closePopupButton = document.querySelectorAll('.close-modal'); // Кнопка для скрытия окна
        const body = document.getElementsByTagName('body')[0];

        openPopupButtons.forEach((button) => { // Перебираем все кнопки
            button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
                e.preventDefault(); // Предотвращаем дефолтное поведение браузера
                popupBg.classList.add('active'); // Добавляем класс 'active' для фона
                popup.classList.add('active'); // И для самого окна
                body.classList.add('no-scroll');
            })
        });

        openPopupButtons2.forEach((button) => { // Перебираем все кнопки
            button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
                e.preventDefault(); // Предотвращаем дефолтное поведение браузера
                popupBg.classList.add('active'); // Добавляем класс 'active' для фона

                popup2.classList.add('active');
                body.classList.add('no-scroll');
            })
        });

        closePopupButton.forEach((close) => {
            close.addEventListener('click', () => { // Вешаем обработчик на крестик
                popupBg.classList.remove('active'); // Убираем активный класс с фона
                popup.classList.remove('active'); // И с окна
                popup2.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });

        document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
            if (e.target === popupBg) { // Если цель клика - фот, то:
                popupBg.classList.remove('active'); // Убираем активный класс с фона
                popup.classList.remove('active'); // И с окна
                popup2.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                if (document.querySelector('.modal' || '.modal2')) {
                    setTimeout(() => {
                        body.classList.remove('no-scroll');
                        popupBg.classList.remove('active'); // Убираем активный класс с фона
                        popup.classList.remove('active'); // И с окна
                        popup2.classList.remove('active');
                    }, 200);
                }
            }
        });

    }
}