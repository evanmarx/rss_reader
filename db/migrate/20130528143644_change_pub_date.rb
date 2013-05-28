class ChangePubDate < ActiveRecord::Migration
  def change
    rename_column :entries, :pub_date, :pubDate
  end
end
