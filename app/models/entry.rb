class Entry < ActiveRecord::Base
  attr_accessible :title, :link, :description,
                  :comments, :pubDate, :guid,
                  :feed_id

  validates :guid, :presence => true, :uniqueness => true

  belongs_to :feed
end