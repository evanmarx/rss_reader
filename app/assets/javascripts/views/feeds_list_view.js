NR.Views.FeedsListView = Backbone.View.extend({
  render: function () {
    var that = this;

    var renderedContent = JST["feeds/list"]({
      feeds: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
});