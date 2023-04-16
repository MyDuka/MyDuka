class CreateRecievedItems < ActiveRecord::Migration[7.0]
  def change
    create_table :recieved_items do |t|
      t.integer :recieved
      t.integer :payment_status
      t.integer :stocked
      t.integer :spoilt
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
