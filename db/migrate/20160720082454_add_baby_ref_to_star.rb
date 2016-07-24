class AddBabyRefToStar < ActiveRecord::Migration[5.0]
  def change
    add_reference :stars, :baby, foreign_key: true
  end
end
