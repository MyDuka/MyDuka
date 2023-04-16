class Clerk < ApplicationRecord

    has_secure_password

    belongs_to :admin
    has_many :product_clerks
    has_many 

    validates :email, presence: true

end
