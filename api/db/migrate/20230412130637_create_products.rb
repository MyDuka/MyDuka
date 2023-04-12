class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :type
      t.string :image
      t.integer :quantity
      t.decimal :buying_price
      t.string :selling_price_decimal
      t.string :supplier
      t.belongs_to :admin, null: false, foreign_key: true
      t.belongs_to :clerk, null: false, foreign_key: true

      t.timestamps
    end
  end
end
