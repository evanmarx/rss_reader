NR.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function ($feedsList, feeds) {
    this.$feedsList = $feedsList,
    this.feeds = feeds
  },

  routes: {
    "" : "index",
    "feeds/:id" : "show"
  },

  index: function () {
    var that = this;

    var feedsListView = new NR.Views.FeedsListView({
      collection: that.feeds
    });

    this.$feedsList.html(feedsListView.render().$el);
  },

  show: function (id) {
    var that = this;

    var feed = that.feeds.get(id);
    var feedView = new NR.Views.FeedView({
      model: feed
    });

    this.$feedsList.html(feedView.render().$el);
  }
});