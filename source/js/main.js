'use strict';

(function () {
  var mainNav = document.querySelector('.main-header__nav-wrap');
  var menuBtn = document.querySelector('.main-header__btn');
  // var regEmail = /^\s*[\w.-]+@[\w-]+\.[A-Za-z]{2,8}\s*$/;

  var onMenuBtnClick = function (evt) {
    evt.preventDefault();
    mainNav.classList.toggle('main-header__menu--show');
    menuBtn.classList.toggle('main-header__btn--close');
    document.body.classList.toggle('overflow-hidden');
  };

  menuBtn.addEventListener('click', onMenuBtnClick);
})();
