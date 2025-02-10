import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import axios from 'axios';

const reviewsList = document.querySelector('.reviews-list');
const renderMarkup = posts => {
  const markup = posts
    .map(
      post => 
      `<li class="reviews-item swiper-slide">
        <img class="reviews-img" src="${post.avatar_url}" alt="avatar" />
        <h3 class="reviews-post-title">${post.author}</h3>
        <p class="reviews-post-text">${post.review}</p>
      </li>`
    )
    .join('');
  reviewsList.innerHTML = markup;
};
const getData = async () => {
  try {
    const { data } = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    renderMarkup(data);
  } catch (error) {
    console.log(error);
  }
};
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  modules: [Navigation, Keyboard],
  loop: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    disabledClass: 'reviews-off-btn',
    prevEl: '.reviews-prev-btn',
    nextEl: '.reviews-next-btn',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
getData();