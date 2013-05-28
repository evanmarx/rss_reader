

NR.Models.Feed = Backbone.RelationalModel.extend({
  urlRoot: "/feeds",

  relations: [{
    type: Backbone.HasMany,
    key: "entries",
    relatedModel: "NR.Models.Entry",
    collectionType: "NR.Collections.Entries",

    collectionOptions: function (feed) {
      return { feedId: feed.id };
    },

    includeInJSON: false,
    reverseRelation: {
      key: "feed_id",
      includeInJSON: "id"
    }
  }]
});