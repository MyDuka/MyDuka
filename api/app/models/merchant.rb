class Merchant < ApplicationRecord
    has_secure_password

    has_many :admins
    has_many :stores

    validates :email, presence: true

end
