class CreateBabies < ActiveRecord::Migration[5.0]
  def change
    create_table :babies do |t|
      t.string :name
      t.string :avatar
      t.integer :price
      t.integer :star_id
      t.string :banner
      t.string :intro

      t.timestamps
    end
  end
end
