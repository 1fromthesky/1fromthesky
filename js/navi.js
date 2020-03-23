const $header = document.querySelector('.header');
const $btnNavi = document.querySelector('.btn-navi-link');
const $naviBlock = document.querySelector('.navi');

$btnNavi.addEventListener('click', function(e) {
   $header.classList.toggle('header_popup-navi');
   $naviBlock.classList.toggle('navi_block');
})

