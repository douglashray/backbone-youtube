var VideoCollection = Backbone.Collection.extend({
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=AIzaSyADSKbyZhQ9S8rj3F3G_3Ihz0L2BRcqQLQ&q=",
  // url: "/",
  // api: AIzaSyADSKbyZhQ9S8rj3F3G_3Ihz0L2BRcqQLQ,
  model: VideoModel,

  parse: function (response) {
    var array = response.items
    return array.map(function (issues) {
      return {
        videoId: issues.id.videoId,
        thumbnail: issues.snippet.thumbnails.default.url,
        title: issues.snippet.title,
        description: issues.snippet.description
      }
    });
  },

  addVideos: function (videoId, thumbnail, title, description) {
    this.add({
          videoId:  videoId,
          thumbnail: thumbnail,
          title: title,
          description: description
    });
  },

  initialize: function () {
    // this.on('add', function (){
    //   this.fetch();
    // });
    //this.on('add', function () { console.log(this.toJSON()); })
  }

});
