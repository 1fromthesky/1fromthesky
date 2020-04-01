const orderForm = document.forms.orderForm;
const phone_input = orderForm.phone;
const name_input = orderForm.name;
const formSection = document.querySelector('#form');

// *sorting inputs: number and name
const checkNumber = function(e) {
  let isDigit = false;
  let isDash = false;
  let isControl = false;

  if (e.key >= 0 || e.key <= 9) {
    isDigit = true;
  }

  if (e.key == "-") {
    isDash = true;
  }

  if (
    e.key == "ArrowLeft" ||
    e.key == "ArrowRight" ||
    e.key == "Backspace" ||
    e.key == "Tab"
  ) {
    isControl = true;
  }

  if (!isDigit && !isDash && !isControl) {
    e.preventDefault();
  }
};
phone_input.addEventListener("keydown", checkNumber);
// phone_input.removeEventListener('keydown', checkNumber);

const checkName = function(e) {
  let isDigit = false;

  if (e.key >= 0 || e.key <= 9) {
    isDigit = true;
  }

  if (isDigit) {
    e.preventDefault();
  }
};
name_input.addEventListener("keydown", checkName) 
// name_input.removeEventListener('keydown', checkNumber);


// !-----------------
// *-----------------
// ?-----------------
// todo--------------

const buttonFormSubmit = document.querySelector("#send-form-btn");
const successOverlay = createOverlay("Сообщение отправлено");

// *button click
buttonFormSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  sendData();
  document.body.appendChild(successOverlay);
  // document.body.style.height = "100vh";
  // document.body.style.overflow = "hidden";

});  

// *function to send form date
function sendData() {
  // const formData = new FormData();
  const data = {
    name: orderForm.elements.name.value,
    phone: orderForm.elements.phone.value,
    to: orderForm.elements.to.value,
    comment: orderForm.elements.comment.value
  };

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
  xhr.send(JSON.stringify(data));
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
  });
};

// *overlay
function createOverlay(content) {
  const overlayElement = document.createElement('div');
  overlayElement.classList.add('overlay');
  overlayElement.addEventListener('click', (e) => {
    if (e.target === overlayElement) {
      btnClose.click();
    }
  });

  const containerElement = document.createElement('div');
  containerElement.classList.add('overlay__container');

  const contentElement = document.createElement('div');
  contentElement.classList.add('overlay__content');
  contentElement.innerHTML = content;

  const btnClose = document.createElement('a');
  btnClose.classList.add('btn');
  btnClose.setAttribute('id','close-overlay');
  btnClose.textContent = "Закрыть";
  btnClose.href = "#";
  btnClose.addEventListener('click', (event) => {
    event.preventDefault();
    // document.body.style.height = "100%";
    // document.body.style.overflow = "visible";
    document.body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(contentElement);
  containerElement.appendChild(btnClose);

  return overlayElement;
};


  // if (validateForm(orderForm)) {
  //   const data = {
  //   name: orderForm.elements.name.value,
  //   phone: orderForm.elements.phone.value,
  //   to: orderForm.elements.to.value,
  //   comment: orderForm.elements.comment.value,
  // }
    
  // function validateForm(form) {
  //   let valid = true;
  
  //   if (!validateField(orderForm.elements.name)) {
  //     valid = false;
  //   }
  //   if (!validateField(orderForm.elements.phone)) {
  //     valid = false;
  //   }
  //   if (!validateField(orderForm.elements.to)) {
  //     valid = false;
  //   }
  //   if (!validateField(orderForm.elements.comment)) {
  //     valid = false;
  //   }
  //   return valid;
  // }
  
  // function validateField(field) {
  //   field.nextElementSibling.textContent = field.validationMessage;
  //   return field.checkValidity();
  // }


// * 1/4 version of overley
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

// * 2/4 version of overley (uncomment in html)
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