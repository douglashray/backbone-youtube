var VideoCollection = Backbone.Collection.extend({

  model: VideoModel,

  initialize: function () {
    this.on('add', function (model){
      model.fetch(); 
    });
  }

});
