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