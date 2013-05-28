class Feed < ActiveRecord::Base
  attr_accessible :url

  validates :url, :presence => true

  has_many :entries
  has_many :user_feeds
  has_many :users, :through => :user_feeds
end