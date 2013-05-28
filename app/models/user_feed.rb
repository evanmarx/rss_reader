class UserFeed < ActiveRecord::Base
  attr_accessible :user_id, :feed_id

  belongs_to :feed
  belongs_to :user
end