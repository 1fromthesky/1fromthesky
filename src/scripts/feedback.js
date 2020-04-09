const feedBackList = document.querySelector('.feedback__list'); 
const feedBackPersons = document.querySelectorAll('.feedback__item'); //* карточка человека

document.addEventListener('DOMContentLoaded', function() {
   initFeedback()
});

function initFeedback() {
   
   feedBackPersons.forEach(function(item) {
      let person = item;
      
      person.addEventListener('click', function(event) {
         event.preventDefault();
         overlay.setContentModal(event.currentTarget.innerText)
         overlay.openModal();

      })
   })
}  

