var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchYoutube'
  },

  initialize: function () {
    this.$searchQuery = this.$('#search-query');
    this.listenTo(this.model.get('videos'), 'change', this.renderSearch)
    //this.listenTo(this.model.get('videos'), 'add', this.renderSearch);
  },

  searchYoutube: function () {
    var query = this.$searchQuery.val();

    //new AppModel(query);
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

  

  renderSearch: function (videos) {
    console.log(videos);
  }


});