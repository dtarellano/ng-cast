angular.module('video-player')
.service('youTube', function($http) {

  this.getYoutube = function(returnData, query) {
    let data = {
      key: youtubekey,
      q: query,
      maxResults: 5,
      part: 'snippet',
      type: 'video'
    };
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: data
    }).then(function(response) {
      returnData(response);
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