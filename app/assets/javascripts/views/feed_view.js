NR.Views.FeedView = Backbone.View.extend({
  render: function () {
    var that = this;

    var renderedContent = JST["feeds/view"]({
      feed: that.model
    });

    that.$el.html(renderedContent);
    return that;
  }
});