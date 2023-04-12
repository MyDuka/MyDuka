class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.belongs_to :merchant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
