var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchYoutube'
  },

  initialize: function () {
    this.$searchQuery = this.$('#search-query');
    // this.listenTo(this.model.get('videos'), 'change', this.renderSearchResults);
    this.listenTo(this.model.get('videos'), 'reset', this.renderSearchResults);
  },

  searchYoutube: function () {
    var query = this.$searchQuery.val();

    new AppModel(query);
    this.model.get('videos').add({
      id: query
    });
  }, 

  // runSearch: function (query) {
  //   $.ajax({
  //     method: "GET",
  //     url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + query + "&type=video&videoEmbeddable=true&key=AIzaSyADSKbyZhQ9S8rj3F3G_3Ihz0L2BRcqQLQ",
  //     dataType: "json",
  //     success: function (searchResults) {
  //       console.log(searchResults);
  //       //displayCurrent(dataCurrent);
  //     },
  //     error: function (jqXHR, textStatus, errorThrown) {
  //       console.log(textStatus);
  //     },
  //   });
  // },

  

  renderSearchResults: function (model) {
    console.log(model);
    var sideBarView = new SideBarView({ model: model });    
    this.$videos.append(sideBarView.render().el);
  }, 

  renderVideo: function (video) {
    var videoView = new VideoView({model: video});
    this.$('.main-video').append(videoView.render().el);
  }


});