const openCard = 'card-member_open';
let cardAll = [];

document.addEventListener('DOMContentLoaded', function() {
   initAccordion()
})

function clickOnName(e) {
   e.preventDefault()
   let element = e.target;
   let parentElement = element.parentElement;

   if (parentElement.classList.contains(openCard)) {
      parentElement.classList.remove(openCard);
   } else {
      
      for (let i = 0; i < cardAll.length; i++) {
         let cardOpenerLink = cardAll[i];
         cardOpenerLink.parentElement.classList.remove(openCard);
      }
      
      parentElement.classList.add(openCard);
   }
}

function initAccordion() {
   cardAll = document.getElementsByClassName('card-member__link')

   for (let i = 0; i < cardAll.length; i++) {
      let cardOpenerLink = cardAll[i];

      cardOpenerLink.addEventListener('click', clickOnName)
   }
}

// const s = () => {}
// const s2 = function() {}

// const cardMember = document.querySelector('.card-member');

// const showDetails = function(event) {
//    event.preventDefault()

//    const {target, currentTarget} = event;
   
//    if (!target.classList.contains('card-member__link')) return

//    const items = currentTarget.querySelectorAll('.card-member__link');
//    console.log(items);
   
//    items.forEach(element => {
//       if (target === element) {
//          if (element.parentElement.classList.contains(openCard)) {
//             element.parentElement.classList.remove(openCard);
//          } else {
//             element.parentElement.classList.add(openCard);
//          }
//       }
//       else {
//          element.parentElement.classList.remove(openCard);
//       }
//    });
// }

// cardMember.addEventListener('click', showDetails)