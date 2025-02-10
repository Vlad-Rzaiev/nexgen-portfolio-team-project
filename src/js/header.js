const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
const menuLinks = document.querySelectorAll('.menu-list a');

menu.addEventListener('click', toggleMenu);
document.addEventListener('click', onDocumentClick);

menuLinks.forEach(link => {
  link.addEventListener('click', handleClicks, { once: true });
});

function toggleMenu(event) {
  event.preventDefault();
  menuList?.classList.toggle('show');
}

function onDocumentClick(event) {
  if (!menu.contains(event.target) && !menuList.contains(event.target)) {
    menuList.classList.remove('show');
  }
}

export function handleClicks(event) {
  event.preventDefault();
  
  const target = event.target.closest('a');
  if (!target || !target.getAttribute('href')) return;

  const sectionId = target.getAttribute('href').substring(1);
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  menuList?.classList.remove('show');
}

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
});