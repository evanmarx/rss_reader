NR.Routers.EntriesRouter = Backbone.Router.extend({
  initialize: function ($entriesList, entries) {
    this.$entriesList = $entriesList,
    this.entries = entries
  },

  routes: {
    "" : "index"
  },

  index: function () {
    var that = this;

    var entriesListView = new NR.Views.EntriesListView({
      collection: that.entries
    });

    this.$entriesList.html(entriesListView.render().$el);
  }
});