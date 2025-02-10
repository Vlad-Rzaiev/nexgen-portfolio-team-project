import Accordion from "accordion-js";

import Swiper from 'swiper';
import { Navigation, Keyboard  } from 'swiper/modules';
import 'swiper/css';

new Accordion(".accordion-container-about-me", {
  elementClass: "ac-about-me",
  triggerClass: "ac-trigger-about-me",
  panelClass: "ac-panel-about-me",
  activeClass: "is-active-about-me",
  duration: 800,   
  showMultiple: true,   
  collapse: true,
  openOnInit: [0],
});

 const swiper = new Swiper('.swiper-one', {
   modules: [Navigation, Keyboard],
   containerModifierClass: 'swiper-one',
   slideActiveClass: 'about-me-swiper-slide-active',
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
      nextEl: '.skills-swiper-button-next',
    },
   breakpoints: {
      320: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 6,
    }
  }
 });