class EntriesController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

  def index
    if params[:feed_id]
      @entries = Entry.where(:feed_id => params[:feed_id])
    else
      @entries = Entry.all
    end

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @entries }
    end
  end

  def create
    @entry = Entry.new(params[:entry])

    if @entry.save
      render :json => @entry
    else
      render :json => @entry.errors, :status => 422
    end
  end
end
