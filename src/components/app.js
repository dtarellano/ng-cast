angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.query = '';
    this.handleClick = (event) => {
      this.vid = event;
    };
    
    this.getYoutube = (query) => {
      youTube.getYoutube(this.returnData, query);
    };
    
    this.returnData = (data) => {
      this.videos = data.data.items;
      this.vid = data.data.items[0];
    };
    
    this.videos = this.getYoutube('dogs');
  },
  


  templateUrl: 'src/templates/app.html'
});
