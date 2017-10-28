angular.module('video-player')

.component('search', {
  bindings: {
    getsearch: '<',
    query: '<'
  },

  templateUrl: 'src/templates/search.html'
});
