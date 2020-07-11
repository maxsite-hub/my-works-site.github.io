'use strict'

// Video animate - Start
let
  closeId,
  arrow_video = document.querySelector('.arrow_video'),
  video_container = document.querySelector('.video-container'),
  videoClose = document.querySelector('.videoClose'),
  video_WatchOurStory = document.querySelector('.video_WatchOurStory');

arrow_video.addEventListener('click', function(){
  clearTimeout(closeId);
  video_container.classList.remove('remove');
  setTimeout(function(){
    video_container.style.marginLeft = '0';
    arrow_video.style.left = '-200px';
  }, 100);
});
videoClose.addEventListener('click', function() {
  closeId = setTimeout(() => {
    video_container.classList.add('remove');
  }, 1500);
  video_container.style.marginLeft = '200%';
  arrow_video.style.left = 'calc(50% - 80px)';
  video_WatchOurStory.pause();
})
// Video animate - End


let exp = document.querySelector('.expertise');
console.log(exp.getBoundingClientRect() + window.pageYOffset());
