class CreateStores < ActiveRecord::Migration[7.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :address
      t.string :location
      t.belongs_to :merchant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
