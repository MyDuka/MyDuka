class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.string :product
      t.string :supplier
      t.integer :quantity
      t.integer :state, default: 0

      t.timestamps
    end
  end
end
