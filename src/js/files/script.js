// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

// Dropdown menu

const dropdownLink = document.querySelectorAll('.menu__item-dropdown');

if (dropdownLink) {
  if (window.innerWidth < 991) {
    dropdownLink.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const secondChild = link.children[1];
        const firstChild = link.children[0];
        secondChild.classList.toggle('sub-active');
        firstChild.classList.toggle('link-active');
      });
    });
  }
}
