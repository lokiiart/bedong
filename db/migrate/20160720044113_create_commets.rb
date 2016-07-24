class CreateCommets < ActiveRecord::Migration[5.0]
  def change
    create_table :commets do |t|
      t.string :customer_name
      t.string :customer_avatar
      t.string :star_name
      t.integer :virtual_time
      t.text :content

      t.timestamps
    end
  end
end
