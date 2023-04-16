class Clerk < ApplicationRecord

    has_secure_password

    validates :email, presence: true

end
