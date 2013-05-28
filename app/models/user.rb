class User < ActiveRecord::Base
  attr_accessible :name

  validates :name, :presence => true

  has_many :user_feeds
  has_many :feeds, :through => :user_feeds
end