var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videos: new VideoCollection(),

      current_video: null
    };
  },

 initialize: function () {
  // this.on('add', this.set('current_video', this.get('videos')));
  // this.on('add', console.log(this.get('videos')));
  
  this.updateCurrentVideo();
 },

 updateCurrentVideo: function (id) {
    var allVideos = this.get('videos');
  
    if (this.get('current_video' === null)) {
      var currentVideo = allVideos.findWhere({ cid: 0 });
      this.set('current_video', currentVideo);
    } else {
    var currentVideo = allVideos.findWhere({ videoId: id });
    this.set('current_video', currentVideo);
    }
  },


});