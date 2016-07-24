class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :phone
      t.string :customer
      t.integer :price
      t.string :payment
      t.string :address
      t.boolean :payoff
      t.string :flow

      t.timestamps
    end
  end
end
