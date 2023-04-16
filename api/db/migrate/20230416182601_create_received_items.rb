class CreateReceivedItems < ActiveRecord::Migration[7.0]
  def change
    create_table :received_items do |t|
      t.integer :received
      t.integer :payment_status
      t.integer :stocked
      t.integer :spoilt
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
