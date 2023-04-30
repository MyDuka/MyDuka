class CreateMerchants < ActiveRecord::Migration[7.0]
  def change
    create_table :merchants do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :image
      t.string :contact
      t.string :address

      t.timestamps
    end
  end
end
