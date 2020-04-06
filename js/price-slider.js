
document.addEventListener('DOMContentLoaded', function() {
  initPriceSlider()
})


function initPriceSlider() {

  const prevToggle = document.getElementById('prev-toggle');
  const nextToggle = document.getElementById('next-toggle');
  const priceContainer = document.getElementById('price-container');
  const priceList = document.getElementById('price-list');
  const priceAllItems = priceContainer.querySelectorAll('.price__item');

  let currentWidth = 0;
  let currentIndex = 0;

  function slideToCurrent() {
    priceList.style.marginLeft = -currentIndex * currentWidth + "px";
  }

  function render() {
    currentWidth = priceContainer.offsetWidth;
    for (let i = 0; i < priceAllItems.length; i++) {
      let priceItem = priceAllItems[i];
      priceItem.style.width = currentWidth + "px"; 
    }
    priceList.style.width = (priceAllItems.length * currentWidth) + "px";
    slideToCurrent()
  }
  render()
  
  prevToggle.addEventListener('click', function(event) {
    event.preventDefault();  
    if (currentIndex > 0) {
    --currentIndex;
    } else {
      currentIndex = priceAllItems.length - 1;
    }
    slideToCurrent()
  })

  nextToggle.addEventListener('click', function(event) {
    event.preventDefault();  
    if (currentIndex < priceAllItems.length - 1) {
    ++currentIndex;
    } else {
      currentIndex = 0;
    }
    slideToCurrent()
  })

  window.addEventListener('resize', function() {
    render()
  })
}
