angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onclick: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});
