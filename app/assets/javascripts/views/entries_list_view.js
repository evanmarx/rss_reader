NR.Views.EntriesListView = Backbone.View.extend({
  render: function () {
    var that = this;

    var renderedContent = JST["entries/list"]({
      entries: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
});