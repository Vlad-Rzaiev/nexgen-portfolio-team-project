import { handleClicks } from './header';

const menuBtn = document.querySelector('.mobile-menu-button');
const mobMenu = document.querySelector('.mobile-menu');
const mobBtn = document.querySelector('.mobile-menu-button');
const menuLinks = document.querySelectorAll('.mobile-menu-list a');
const orderBtn = document.querySelector('.mobile-menu-order');

menuBtn.addEventListener('click', onOpen);
mobBtn.addEventListener('click', onClose);

menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    handleClicks(event);
    mobMenu.classList.remove('show');
  });
});

orderBtn.addEventListener('click', onOrder);

function onOrder(event) {
  handleClicks(event);
  mobMenu.classList.remove('show');
}

function onOpen(event) {
  event.preventDefault();
  mobMenu.classList.add('show');
}

function onClose(event) {
  event.preventDefault();
  mobMenu.classList.remove('show');
}