import Accordion from "accordion-js";

import Swiper from 'swiper';
import { Navigation, Keyboard  } from 'swiper/modules';
import 'swiper/css';

new Accordion(".accordion-container", {
    duration: 800,   
    showMultiple: true,   
    collapse: true,
    openOnInit: [0],
});

 const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard],
   slidesPerView: 2,
    allowTouchMove: true,
    loop: true,
    preventClicks: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
    breakpoints: {
    768: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 6,
    }
  }
 });