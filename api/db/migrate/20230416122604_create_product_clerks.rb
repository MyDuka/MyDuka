class CreateProductClerks < ActiveRecord::Migration[7.0]
  def change
    create_table :product_clerks do |t|
      t.belongs_to :product, foreign_key: true
      t.belongs_to :clerk, foreign_key: true

      t.timestamps
    end
  end
end
