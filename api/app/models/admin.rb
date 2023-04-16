class Admin < ApplicationRecord
  has_secure_password

  enum :status [:ACTIVE, :DEACTIVATED]

  belongs_to :merchant

  validates :email, presence: true


end
