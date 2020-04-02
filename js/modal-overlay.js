const template = document.querySelector("#overlayTemplate").innerHTML; //* обертка модального окна
const overlay = createOverlay(template); //* функция вызова модального окна

function createOverlay(template) {
   
   const fragment = document.createElement('div');
   fragment.innerHTML = template;

   const overlayElement = fragment.querySelector('.overlay');
   const contentElement = fragment.querySelector('.overlay__content');
   const btnCloseElement = fragment.querySelector('#close-overlay');

   overlayElement.addEventListener('click', (event) => {
      if (event.target === overlayElement) {
         btnCloseElement.click();
      }
   });
   btnCloseElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.body.removeChild(overlayElement);
   });
   
   return {
      open() {
         document.body.appendChild(overlayElement);
      },
      close() {
         btnCloseElement.click();
      },
      setContent(content) {
         contentElement.innerHTML = content;
      }
   }
};
 
 //* 1/4 version of overley
 // const buttonFormSubmit = document.querySelector("#send-form-btn");
 // const successOverlay = createOverlay("Сообщение отправлено");
 // buttonFormSubmit.addEventListener('click', (event) => {
 //  event.preventDefault();
 //  document.body.appendChild(successOverlay);
 // });
 
 // function createOverlay(content) {
 //   const overlayElement = document.createElement('div');
 //   overlayElement.classList.add('overlay');
 //   overlayElement.addEventListener('click', (e) => {
 //     if (e.target === overlayElement) {
 //       btnClose.click();
 //     }
 //   });
 
 //   const containerElement = document.createElement('div');
 //   containerElement.classList.add('overlay__container');
 
 //   const contentElement = document.createElement('div');
 //   contentElement.classList.add('overlay__content');
 //   contentElement.innerHTML = content;
 
 //   const btnClose = document.createElement('a');
 //   btnClose.classList.add('btn');
 //   btnClose.setAttribute('id','close-overlay');
 //   btnClose.textContent = "Закрыть";
 //   btnClose.href = "#";
 //   btnClose.addEventListener('click', (event) => {
 //     event.preventDefault();
 //     document.body.removeChild(overlayElement);
 //   });
 
 //   overlayElement.appendChild(containerElement);
 //   containerElement.appendChild(contentElement);
 //   containerElement.appendChild(btnClose);
 
 //   return overlayElement;
 // }
 
 //* 2/4 version of overley (uncomment in html)
 // const overlayElement = document.querySelector("#overlay");
 // const btnClose = overlayElement.querySelector('#close-overlay');
 
   // function openOverlay() {
   //   overlayElement.style.display = "flex";
   // }
   // openOverlay();
 
 // btnClose.addEventListener('click', (event) => {
 //   event.preventDefault();
 //   overlayElement.style.display = "none";
 // });
 
 // overlayElement.addEventListener('click', (e) => {
 //   if (e.target === overlayElement) {
 //     btnClose.click();
 //   }
 // });
 
 //* 3/4 version of overley (реализован)