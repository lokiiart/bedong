class AddGirlToStudent < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :girl, :string
  end
end
