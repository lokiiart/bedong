class CreateTagmaps < ActiveRecord::Migration[5.0]
  def change
    create_table :tagmaps do |t|
      t.references :star, foreign_key: true
      t.references :tag, foreign_key: true

      t.timestamps
    end
  end
end
