angular.module('video-player')
.service('youTube', function($http) {
  let data = {
    key: 'AIzaSyCE3Yh9-RTnlZ4CtoEdxr62mR26Cz_em0U',
    q: 'dogs',
    maxResults: 5,
    part: 'snippet',
    type: 'video'
  };
  this.getYoutube = function(data) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: data
    }).then(function(response) {
      this.video = response.item;
      this.vid = response.item[0];
    });
  };
});


    // $.ajax({
    //   url: 'https://www.googleapis.com/youtube/v3/search',
    //   data: data,
    //   success: function(data) {
    //     this.setState({
    //       data: data.items,
    //       videoDisplay: data.items[0]
    //     });
    //   }.bind(this),
    //   dataType: 'json'
    // });