const feedBackList = document.querySelector('.feedback__list'); 
const feedBackPerson = document.querySelectorAll('.feedback__item'); //* карточка человека
const openFeedBackBtn = feedBackList.querySelectorAll('.btn');

document.addEventListener('DOMContentLoaded', function() {
   initFeedback()
});



function initFeedback() {
   feedBackList.addEventListener('click', (e) => {
      e.preventDefault();
         let element = e.target;
         if (element.classList.contains('btn')) {
            overlay.setContent("ppp")
            overlay.open();
         }
         
   })
}

