class CreateFools < ActiveRecord::Migration[5.0]
  def change
    create_table :fools do |t|
      t.string :ip
      t.string :page

      t.timestamps
    end
  end
end
