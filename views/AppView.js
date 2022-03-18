var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchYoutube',
    'click .view-video': 'selectVideo'
  },

  initialize: function () {
    this.$searchQuery = this.$('#search-query');
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
    //this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    //this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:current_video', this.renderVideo);
    //this.model.get('videos').add({'Marvel Avengers'});
    this.renderVideos();
  },

  searchYoutube: function () {
    var query = this.$searchQuery.val();

    this.model.get('videos').add({
      query
    });
  }, 

  selectVideo: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;
  
    this.model.updateCurrentVideo(clickedVideoId);
  },

  renderSearchResults: function (video) {
    var sideBarView = new SideBarView({ model: video });    
    this.$('.video-results').append(sideBarView.render().el);
  }, 

  renderVideo: function (video) {
    // var videoView = new VideoView({model: video});
    // this.$('.main-display').append(videoView.render().el);

    if (this.mainView) {
      this.mainView.remove();
    }
  
    this.mainView = new VideoView({ model: this.model.get('current_video')});
    this.$('.main-display').append(this.mainView.render().el);  
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderSearchResults(m);
    }, this);
  //   this.model.get('videos').each(function (m) {
  //     this.renderVideo(m);
  //   }, this);
  }


});