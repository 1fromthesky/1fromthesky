const $orderForm = document.forms.orderForm;
const $phoneInput = $orderForm.phone;
// $orderForm.phone форма ссылается на элемент
// phone.$orderForm элемент ссылается на форму
// alert(phone.$orderForm);
// !почему не ссылается?

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

$phoneInput.addEventListener("keydown", checkNumber);
// $phoneInput.removeEventListener('keydown', checkNumber);

const $nameInput = $orderForm.name;
$nameInput.addEventListener("keydown", function(e) {
  let isDigit = false;
  let isControl = false;

  if (e.key >= 0 || e.key <= 9) {
    isDigit = true;
  }

  if (isDigit) {
    e.preventDefault();
  }
});

const $btnForm = document.querySelector("#btnForm");
$btnForm.addEventListener("click", function(e) {
  e.preventDefault();

  console.log(orderForm.elements.name.value);
  console.log(orderForm.elements.phone.value);
  console.log(orderForm.elements.street.value);
  console.log(orderForm.elements.bild.value);
  console.log(orderForm.elements.bildNumber.value);
  console.log(orderForm.elements.flat.value);
  console.log(orderForm.elements.story.value);
  console.log(orderForm.elements.comment.value);
  console.log(orderForm.elements.pay.value);
  console.log(orderForm.elements.call.checked);
});
