

// const navElem = document.getElementsByClassName('navi__item');
// // console.log(navElem);
// for (let i = 0; i < navElem.length; i++) {
//    const element = navElem[i];
//    element.addEventListener('click', function(event) {
//       event.preventDefault();
//       console.log(event.currentTarget);
      
      
//    })
// }



// const slides = $('.slide');
// const containerOnePage = $('.one-page-scroll');
// let inScroll = false; 

// const performTransition = sectionEq => {
//    if (inScroll == false) {

//       inScroll = true;
//       const position = sectionEq * -100;

//       slides.eq(sectionEq).addClass('target-section').siblings().removeClass('target-section');
//       containerOnePage.css({
//          transform: `translateY(${position}%)`
//       });

//       setTimeout(() => {
//          inScroll = false;
//       }, 1300);
//    }
// }

// const scrollSection = direction => {
//    const activeSection = slides.filter('.target-section');
//    const nextSection = activeSection.next();
//    const prevSection = activeSection.prev();

//    if (nextSection.length && direction == 'next') {
//       performTransition(nextSection.index())
//    }
//    if (prevSection.length &&direction == 'prev') {
//       performTransition(prevSection.index())

//    }
// }

// $(window).on('wheel', e => {
//    const deltaY = e.originalEvent.deltaY;

;
//    if (deltaY > 0) {
//       scrollSection('next')
//    }
//    if (deltaY < 0) {
//       scrollSection('prev')

//    }
   
// })