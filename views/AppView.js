var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchYoutube'
  },

  searchYoutube: function () {
    console.log('click');
  }


});