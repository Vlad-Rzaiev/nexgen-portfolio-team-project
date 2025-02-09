import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/navigation'

import { Navigation, Keyboard  } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-projects', {
        modules: [Navigation, Keyboard],
        slidesPerView: 1,
        containerModifierClass: 'swiper-projects',

        loop: false,

        navigation: {
            nextEl: '.projects-btn-next',
            prevEl: '.projects-btn-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

    })
    function updateNavigationState(swiper) {
        const prevBtn = document.querySelector('.projects-btn-prev');
        const nextBtn = document.querySelector('.projects-btn-next');

        prevBtn.disabled = swiper.isBeginning;
        nextBtn.disabled = swiper.isEnd;
    }
}
);
     
// import Swiper from "swiper";
// import 'swiper/css';
// import 'swiper/css/navigation';

// import { Navigation, Keyboard } from 'swiper/modules';

// document.addEventListener('DOMContentLoaded', function () {
//     const swiper = new Swiper('.swiper-projects', {
//         modules: [Navigation, Keyboard],
//         slidesPerView: 1,
//         containerModifierClass: 'swiper-projects', // Унікальний модифікатор для контейнера

//         loop: false,

//         navigation: {
//             nextEl: '.projects-btn-next',
//             prevEl: '.projects-btn-prev',
//         },

//         keyboard: {
//             enabled: true,
//             onlyInViewport: true,
//         },

//         on: {
//             init: function () {
//                 updateNavigationState(this);
//             },
//             slideChange: function () {
//                 updateNavigationState(this);
//             },
//         },
//     });

//     function updateNavigationState(swiper) {
//         const prevBtn = document.querySelector('.projects-btn-prev');
//         const nextBtn = document.querySelector('.projects-btn-next');

//         // Вимикаємо/вмикаємо кнопки
//         prevBtn.disabled = swiper.isBeginning;
//         nextBtn.disabled = swiper.isEnd;

//         // Додаємо/видаляємо клас для стилізації
//         prevBtn.classList.toggle('disabled', swiper.isBeginning);
//         nextBtn.classList.toggle('disabled', swiper.isEnd);
//     }
// });


