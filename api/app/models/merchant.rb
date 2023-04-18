class Merchant < ApplicationRecord
    has_secure_password

    has_many :admins

    validates :email, presence: true

end
