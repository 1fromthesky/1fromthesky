const $left = document.querySelector("#left");
const $right = document.querySelector("#right");
const $itemFilm = document.querySelector(".price__list");

const $step = 100;
const $maxRight = 400;
const $minRight = 0;
let $currentRight = 0;

$itemFilm.style.right = $currentRight;

const $sliderStepRight = function(e) {
  e.preventDefault();
  if ($currentRight < $maxRight) {
    $currentRight += $step;
    $itemFilm.style.right = $currentRight + "%";
  }
};

$right.addEventListener("click", $sliderStepRight);

const $sliderStepLeft = function(e) {
  e.preventDefault();
  if ($currentRight > $minRight) {
    $currentRight -= $step;
    $itemFilm.style.right = $currentRight + "%";
  }
};

$left.addEventListener("click", $sliderStepLeft);
