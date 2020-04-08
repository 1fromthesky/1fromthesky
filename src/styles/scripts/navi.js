(function() {
document.addEventListener('DOMContentLoaded', function() {
   initNavToggle()
})
const navToggle = document.getElementById('nav-toggle');
const navi = document.getElementById('nav-list');
const logo = document.getElementById('logo-link');
const naviLinks = document.getElementsByClassName('navi__link');
let naviLinkOne = [];

function clickOnBurger(event) {
   event.preventDefault();
   if (navi.classList.contains('navi__list_open')) {
      navi.classList.remove('navi__list_open');
      navToggle.classList.remove('btn-burger_open');
   } else {
      navi.classList.add('navi__list_open');
      navToggle.classList.add('btn-burger_open');
   }
}

function clickOnLogo(event) {
   event.preventDefault();
   if (navi.classList.contains('navi__list_open')) {
      navi.classList.remove('navi__list_open');
      navToggle.classList.remove('btn-burger_open');
   }
}

function clickOnLink() {
   if (navi.classList.contains('navi__list_open')) {
      navi.classList.remove('navi__list_open');
      navToggle.classList.remove('btn-burger_open');
   }
}

function initNavToggle() {
   navToggle.addEventListener('click', clickOnBurger)
   logo.addEventListener('click', clickOnLogo)

   for (let i = 0; i < naviLinks.length; i++) {
      naviLinkOne = naviLinks[i];
      naviLinkOne.addEventListener('click', clickOnLink)
   }
}

// todo resize убирать активный класс при ширине больше tablets
})()