class Clerk < ApplicationRecord
    has_secure_password

    enum access: [:ACTIVE, :DEACTIVATED]

    belongs_to :admin
    has_many :product_clerks 

    # validates :email, presence: true

end
