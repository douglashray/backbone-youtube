var SideBarView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#sidebar-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
