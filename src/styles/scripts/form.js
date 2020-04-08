(function() {
const orderForm = document.forms.orderForm; //*форма
const phone_input = orderForm.phone; //* поле - телефон
const name_input = orderForm.name; //* поле - имя
const buttonFormSubmit = document.querySelector("#send-form-btn"); //* поле - кнопка "заказать"


//* Сортировка: number and name
const checkNumber = function(event) {
  let isDigit = false;
  let isDash = false;
  let isControl = false;

  if (event.key >= 0 || event.key <= 9) {
    isDigit = true;
  }

  if (event.key == "-") {
    isDash = true;
  }

  if (
    event.key == "ArrowLeft" ||
    event.key == "ArrowRight" ||
    event.key == "Backspace" ||
    event.key == "Tab"
  ) {
    isControl = true;
  }

  if (!isDigit && !isDash && !isControl) {
    event.preventDefault();
  }
};
phone_input.addEventListener("keydown", checkNumber);
// phone_input.removeEventListener('keydown', checkNumber);

const checkName = function(event) {
  let isDigit = false;

  if (event.key >= 0 || event.key <= 9) {
    isDigit = true;
  }

  if (isDigit) {
    event.preventDefault();
  }
};
name_input.addEventListener("keydown", checkName) 
// name_input.removeEventListener('keydown', checkNumber);


//* Обработчик событий на кнопку "Заказать"
buttonFormSubmit.addEventListener("click", (event) => {

  //* Общение с сервером
  //* Если форма не валидна, браузер будет выводить стандартные сообщения валидности
  //* Если валидна, выполнится код ниже
  
  if (orderForm.checkValidity()) {
    event.preventDefault();
    overlay.setContentModal('Ожидание ответа');
    overlay.openModal()

  //* Создание объекта FormData
    const data = new FormData();
    data.append("name", orderForm.elements.name.value); 
    data.append("phone", orderForm.elements.phone.value); 
    data.append("comment", orderForm.elements.comment.value); 
    data.append("to", "code_raja@mail.ru"); 
    
  //* Создание Ajax запроса
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail', true);
    xhr.responseType = 'json';
    xhr.send(data);
    
    //* Обработчик ответа от сервера
    xhr.addEventListener('load', () => {
      if (xhr.status >= 400) {
        overlay.setContentModal('Ошибка');
      } else {
        overlay.setContentModal(xhr.response.message);
      }
    });
  } 
});

})()