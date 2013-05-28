class Entry < ActiveRecord::Base
  attr_accessible :title, :link, :description,
                  :comments, :pub_date, :guid,
                  :feed_id

  validates :guid, :presence => true

  belongs_to :feed
end