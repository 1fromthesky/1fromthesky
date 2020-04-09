// (function() {
   
// const sections = $('.slide');
// const display = $('.fullpage');
// let inScroll = false; 

// const countSectionPosition = (sectionEq) => {

//   const position = sectionEq * -100;
//   if (isNaN(position))

//   return position;
// };

// const resetActiveClass = (item, eq) => {
//   item.eq(eq).addClass("active").siblings().removeClass("active");
// };

// const performTransition = (sectionEq) => {
//   if (inScroll) return;

//   inScroll = true;

//   const position = countSectionPosition(sectionEq);
//   const trasitionOver = 1000;
//   const mouseInertionOver = 300;

//   resetActiveClass(sections, sectionEq);

//   display.css({
//     transform: `translateY(${position}%)`,
//   });

//   setTimeout(() => {
//     resetActiveClass($(".fixed-menu__item"), sectionEq);
//     inScroll = false;
//   }, trasitionOver + mouseInertionOver);
// };

// const scroller = () => {
//   const activeSection = sections.filter(".active");
//   const nextSection = activeSection.next();
//   const prevSection = activeSection.prev();

//   return {
//     next() {
//       if (nextSection.length) {
//         performTransition(nextSection.index());
//       }
//     },
//     prev() {
//       if (prevSection.length) {
//         performTransition(prevSection.index());
//       }
//     },
//   };
// };

// $(window).on("wheel", (e) => {
//   const deltaY = e.originalEvent.deltaY;
//   const windowScroller = scroller();

//   if (deltaY > 0) {
//     windowScroller.next();
//   }

//   if (deltaY < 0) {
//     windowScroller.prev();
//   }
// });


// $("[data-scroll-to]").on("click", (e) => {
//   e.preventDefault();

//   const $this = $(e.currentTarget);
//   const target = $this.attr("data-scroll-to");

//   performTransition(target);
// });
// })()

