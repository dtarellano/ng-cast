angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    onclick: '<'
  },
  controller: function() {

  },
  templateUrl: 'src/templates/videoListEntry.html'
});
