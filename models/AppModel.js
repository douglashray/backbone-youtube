var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videos: new VideoCollection(),

      current_video: null
    };
  },

 

  // query: 'Marvel Avengers',

  // initialize: function (query) {
  //   console.log(query);
  //   this.on('change', function () {
  //     console.log('changed');
  //   })
  // }

  



});