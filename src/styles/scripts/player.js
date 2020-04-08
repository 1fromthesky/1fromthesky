(function() {
let player;
const playerContainer = $('.player');
const muteOn = $('.player__mute');

// * вкл/выкл по кнопке старт (меняем классы)
let eventsInit = () => {
   $('.player__start').on('click', event => {
      event.preventDefault();

      if (playerContainer.hasClass('paused')) {
         player.pauseVideo()
      } else {
         player.playVideo()
      }
   });

   // * переключение по времени видео
   $('.player__time-line').on('click', event => {
      const bar = $(event.target);
      const clickedPosition = event.originalEvent.layerX; // * куда кликнули в px
      const newButtonPositionPercent = (clickedPosition / bar.width()) * 100; // * переводим из px в % длинну бара
      const newTogglePositionSec = (player.getDuration() / 100) * newButtonPositionPercent; // * время видео на длинну бара в % 

      // * двигаем кнопку
      $('.player__point-toggle').css({
         left: `${newButtonPositionPercent}%`
      });

      // * API
      player.seekTo(newTogglePositionSec);
   });
   // * старт по дисплею
   $('.player__splash').on('click', () => {
      player.playVideo()
   });

   // * работа со звуком
   muteOn.on('click', (event) => {
      event.preventDefault();
      if (muteOn.hasClass('voice-off')) {
         muteOn.removeClass('voice-off')
         player.unMute()
      } else {
         muteOn.addClass('voice-off')
         player.mute()
      }
   });
};

// * форматируем время (из секунд в мин:сек)
const formatTime = timeSec => {
   const roundTime = Math.round(timeSec);

   const minutes = addZero(Math.floor(roundTime / 60));
   const seconds = addZero(roundTime % 60);

   // * фнц. для добавления нуля в фрате 00:00
   function addZero(num) {
      if (num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   };
   return `${minutes} : ${seconds}`;
};

// // * управление звуком


// const formatMute = function() {

//    const voiceBar = $('.player__mute-bar'); 
//    const toggleVoiceBar = $('.player__mute-bar-toggle'); 
//    const durationVoice = player.getVolume();

//    // toggleVoiceBar.css({
//    //    'width': 
//    // })
// }

// * добавляем форматированное время в элемент
const onPlayerReady = () => {
   let interval;
   
   // * player.getDuration() api (время видео в сек)
   const durationSec = player.getDuration()

   $('.player__duration-estimate').text(formatTime(durationSec));

   // * берем счетчик времяни из youtube плеера
   if (typeof interval != 'undefined') {
      clearInterval(interval);
   }

   // * расчет времяни из плеера youtube(интервал) getCurrentTime api
   interval = setInterval(() => {
      const completedSec = player.getCurrentTime()
      const completedPercent = (completedSec / durationSec) * 100; // * % времени

      // * сдвигаем каждую секунду на кнопку
      $('.player__point-toggle').css({
         left: `${completedPercent}%`
      });
      // * счетчик пройденного времяни
      $('.player__duration-complete').text(formatTime(completedSec));

   }, 1000);
};

// * api контроль за состоянием в событиях
const onPlayerStateChange = event => {
   /*
      -1 – воспроизведение видео не началось
      0 – воспроизведение видео завершено
      1 – воспроизведение
      2 – пауза
      3 – буферизация
      5 – видео находится в очереди
   */
   switch (event.data) {
      case 1:
         playerContainer.addClass('paused');
         playerContainer.addClass('active');
         break;
         
      case 2:
         playerContainer.removeClass('paused');
         playerContainer.removeClass('active');
         break;   
   }
};

// * настройки API youtube player
function onYouTubeIframeAPIReady() {
   player = new YT.Player('yt-player', {
      height: '405',
      width: '660',
      videoId: 'SWjH8Nlfswg',
      events: {
         'onReady': onPlayerReady,
         'onStateChange': onPlayerStateChange
      },
      playerVars: {
         controls: 0,
         disablekb: 0,
         showinfo: 0,
         rel: 0,
         autoplay: 0,
         modestbranding: 0
      }
   });
};

eventsInit();

})()