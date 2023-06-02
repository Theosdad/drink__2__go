const siteList = document.querySelector('.site-list');
const navToggle = document.querySelector('.nav__toggle');

siteList.classList.remove('site-list--no-js');
navToggle.classList.remove('nav__toggle--no-js');

const toggleMenu = () => {
  siteList.classList.toggle('site-list--hidden');
  navToggle.classList.toggle('nav__toggle--hidden');
  navToggle.classList.toggle('nav__toggle--shown');
}

navToggle.addEventListener('click', toggleMenu);
