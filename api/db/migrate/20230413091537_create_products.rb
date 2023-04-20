class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :type
      t.string :image
      t.string :supplier
      t.integer :stocked
      t.integer :received
      t.integer :spoilt
      t.integer  :payment
      t.decimal :buying_price
      t.decimal :selling_price

      t.timestamps
    end
  end
end
