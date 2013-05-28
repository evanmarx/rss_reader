NR.Collections.Entries = Backbone.Collection.extend({
  model: NR.Models.Entry,

  initialize: function (models, options) {
    this.feedId = options.feedId;
  },

  url: function () {
    return "/feeds/" + this.feedId + "/entries";
  }
});