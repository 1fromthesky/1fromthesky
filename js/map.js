document.addEventListener('DOMContentLoaded', function() {
   ymaps.ready(init);
});

function init() {
   let myMap = new ymaps.Map("map", {
      center: [55.636279, 37.752716],
      zoom: 13,
      controls: []
   });

   const coords = [
      [55.648581, 37.739224],
      [55.639173, 37.759327],
      [55.618451, 37.740217]
  ];

   const myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false, // и их можно перемещать
      iconLayout: 'default#image',
      iconImageHref: './../img/icons-svg/map-marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
   });
   
   for (var i = 0; i < coords.length; i++) {
      myCollection.add(new ymaps.Placemark(coords[i]));
   }
   
   myMap.geoObjects.add(myCollection);

   myMap.behaviors.disable('scrollZoom');
   
};

