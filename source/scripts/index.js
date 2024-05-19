/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__container--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-header__container--closed')) {
    navMain.classList.remove('main-header__container--closed');
    navMain.classList.add('main-header__container--opened');
  } else {
    navMain.classList.add('main-header__container--closed');
    navMain.classList.remove('main-header__container--opened');
  }
});
