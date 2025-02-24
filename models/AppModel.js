var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videos: new VideoCollection(),

      current_video: null
    };
  },

 updateCurrentVideo: function (id) {
    var allVideos = this.get('videos');
  
    if (this.get('current_video' === null)) {
      var currentVideo = allVideos.findWhere({ videoId: id });
      this.set('current_video', currentVideo);
    } else {
    var currentVideo = allVideos.findWhere({ videoId: id });
    this.set('current_video', currentVideo);
    }
  },

});