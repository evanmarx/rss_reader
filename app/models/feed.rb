require 'open-uri'

class Feed < ActiveRecord::Base
  attr_accessible :url

  validates :url, :presence => true

  has_many :entries
  has_many :user_feeds
  has_many :users, :through => :user_feeds

  def pull
    new_entries = SimpleRSS.parse(open(self.url))

    new_entries.entries.each do |entry|
      entry['feed_id'] = self.id
      Entry.create(entry)
    end
  end
end