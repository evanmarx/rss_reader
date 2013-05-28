NR.Views.FeedView = Backbone.View.extend({
  events: {
    "click .refresh-feed" : "refresh"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["feeds/view"]({
      feed: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  refresh: function () {
    var feedId = this.model.escape("id");
    var feeds = new Backbone.Collection;
    feeds.url = "/feeds";

    feeds.fetch({
      success: function () {
        Backbone.history.navigate("#/feeds/" + feedId);
      }
    });

  }
});




