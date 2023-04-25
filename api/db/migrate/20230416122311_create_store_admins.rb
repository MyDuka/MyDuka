class CreateStoreAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :store_admins do |t|
      t.belongs_to :admin, foreign_key: true
      t.belongs_to :store, foreign_key: true

      t.timestamps
    end
  end
end
