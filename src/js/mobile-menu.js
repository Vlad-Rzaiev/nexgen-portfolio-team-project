import { handleClicks } from './header';

const menuButton = document.querySelector('.menu-button');
const mobMenu = document.querySelector('.mobile-menu');
const mobMenuButton = document.querySelector('.mobile-menu-button');
const menuLinks = document.querySelectorAll('.mobile-menu-list a');
const orderBtn = document.querySelector('.mobile-menu-order');

menuButton.addEventListener('click', onOpen);

mobMenuButton.addEventListener('click', onClose);

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
  document.body.style.overflow = 'hidden';
}

function onClose(event) {
  event.preventDefault();
  mobMenu.classList.remove('show');
  document.body.style.overflow = '';
}