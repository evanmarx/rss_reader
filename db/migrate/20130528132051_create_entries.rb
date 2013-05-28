class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title
      t.string :link
      t.string :description
      t.string :comments
      t.date   :pub_date
      t.string :guid
      t.integer :feed_id

      t.timestamps
    end
  end
end
