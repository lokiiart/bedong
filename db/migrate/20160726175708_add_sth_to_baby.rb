class AddSthToBaby < ActiveRecord::Migration[5.0]
  def change
    add_column :babies, :originalPrice, :integer
    add_column :babies, :selled, :integer
    add_column :babies, :longname, :string
  end
end
