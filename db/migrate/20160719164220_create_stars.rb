class CreateStars < ActiveRecord::Migration[5.0]
  def change
    create_table :stars do |t|
      t.string :name
      t.string :avatar
      t.text :summart
      t.integer :favorite
      t.float :score
      t.string :intro_image

      t.timestamps
    end
  end
end
