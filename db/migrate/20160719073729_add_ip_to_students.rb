class AddIpToStudents < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :ip, :string
  end
end
