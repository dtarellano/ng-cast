angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.vid = exampleVideoData[0];
    this.handleClick = (event) => {
      console.log(event);
      this.vid = event;
    };
    this.getYoutube = youTube;
    
  },


  templateUrl: 'src/templates/app.html'
});
