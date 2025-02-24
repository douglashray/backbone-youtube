var AppView = Backbone.View.extend({
  el: $('.container'),

  events: {
    'click .search': 'searchYoutube',
    'click .view-video': 'selectVideo'
  },

  initialize: function () {
    this.$searchQuery = this.$('#search-query');
    this.$videoResults = this.$('.video-results');
    this.listenTo(this.model, 'change:current_video', this.renderVideo);
    this.initSearch();
    this.listenTo(this.model.get('videos'), 'change', this.renderVideos);
  },

  searchYoutube: function () {
    var query = this.$searchQuery.val();
    this.model.get('videos').add({
      id: query
    });
  }, 

  initSearch: function () {
    this.model.get('videos').add({
      id: 'Marvel Avengers'
    });
  },

  selectVideo: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.updateCurrentVideo(clickedVideoId);
  },

  renderSearchResults: function (video) {
    var sideBarView = new SideBarView({ model: video });    
    this.$videoResults.append(sideBarView.render().el);
  }, 

  renderVideo: function (video) {
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
  }


});