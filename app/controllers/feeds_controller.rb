class FeedsController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

  def index
    if params[:user_id]
      @user_feeds = UserFeed.where(:user_id => params[:user_id])
      feed_ids = @user_feeds.map { |user_feed| user_feed.feed_id }
      @feeds = Feed.find(feed_ids)
    else
      @feeds = Feed.all
    end

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @feeds }
    end
  end

  def create
    @feed = Feed.new(params[:feed])

    if @feed.save
      render :json => @feed
    else
      render :json => @feed.errors, :status => 422
    end
  end
end
