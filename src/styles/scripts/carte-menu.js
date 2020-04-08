(function() {
const carteItemsAll = document.getElementsByClassName('carte__item');
const carteLinksAll = document.getElementsByClassName('carte__link');
let elementLink = [];

document.addEventListener('DOMContentLoaded', function() {
   initMenuToggle()
})

function OpenCard(event) {
   event.preventDefault();
   const element = event.currentTarget;
   
   const parentElement = element.parentElement;

   if (parentElement.classList.contains('carte__item_open')) {
      parentElement.classList.remove('carte__item_open');
   } else {
      for (let i = 0; i < carteLinksAll.length; i++) {
         elementLink = carteLinksAll[i];
         elementLink.parentElement.classList.remove('carte__item_open');
      }

      parentElement.classList.add('carte__item_open');
   }
}

function initMenuToggle() {
   for (let i = 0; i < carteLinksAll.length; i++) {
      elementLink = carteLinksAll[i];
      elementLink.addEventListener('click', OpenCard)
   }
}

// todo при переключении аккордеона вначале анимации происходит дерганье
})()