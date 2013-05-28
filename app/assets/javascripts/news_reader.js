window.NR = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  // initialize: function ($entriesList, entriesData) {
  //   var entries = new NR.Collections.Entries(entriesData);
  //
  //   new NR.Routers.EntriesRouter($entriesList, entries);
  //   Backbone.history.start();
  // }
  initialize: function ($feedsList, feedsData) {
    var feeds = new NR.Collections.Feeds(feedsData);

    new NR.Routers.FeedsRouter($feedsList, feeds);
    Backbone.history.start();
  }
};