class AddTagsToStars < ActiveRecord::Migration[5.0]
  def change
    add_column :stars, :tags, :string
    add_column :stars, :tagid, :string
  end
end
