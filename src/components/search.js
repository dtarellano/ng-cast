angular.module('video-player')

.component('search', {
  bindings: {
    getsearch: '<'
  },
  controller: function() {
    let data = {
      key: 'AIzaSyCE3Yh9-RTnlZ4CtoEdxr62mR26Cz_em0U',
      q: 'dogs',
      maxResults: 5,
      part: 'snippet',
      type: 'video'
    };
    console.log(this);
    this.query = data;
  },

  templateUrl: 'src/templates/search.html'
});
