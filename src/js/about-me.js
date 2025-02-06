import Accordion from "accordion-js";

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

new Accordion(".accordion-container", {
    duration: 400,   
    showMultiple: true,   
    collapse: true,
    openOnInit: [0],
});

const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 2, // Показываем 2 элемента на экране
    allowTouchMove: false, // Отключаем свайп руками
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
    },
});
