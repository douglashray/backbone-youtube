var VideoCollection = Backbone.Collection.extend({
  // urlRoot: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=AIzaSyADSKbyZhQ9S8rj3F3G_3Ihz0L2BRcqQLQ&q=",
  // api: AIzaSyADSKbyZhQ9S8rj3F3G_3Ihz0L2BRcqQLQ,
  model: VideoModel,

  parse: function (response) {
    return {
      id: response.items.id.videoId,
      thumbnail: response.items.snippet.thumbnails.default.url,
      title: response.items.snippet.title,
      description: response.items.snippet.description
    }
    
    // console.log(response);
  },

  // videoResults: function (response) {
  //   this.add({
  //       id:  response.id.videoId,
  //       thumbnail: response.snippet.thumbnails.default.url,
  //       title: response.snippet.title,
  //       description: response.snippet.description
  //   });
    
    
  // },

  initialize: function () {
    this.on('add', function (model){
      model.fetch();
    this.on('change', this.parse)
    });
  }

});
