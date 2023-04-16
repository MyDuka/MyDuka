class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.text :username
      t.text :email
      t.text :password_digest
      t.string :status

      t.timestamps
    end
  end
end
