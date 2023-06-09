class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.string :image
      t.string :supplier
      t.decimal :buying_price
      t.decimal :selling_price
      t.integer :store_id, null: false, foreign_key: true


      t.timestamps
    end
  end
end
