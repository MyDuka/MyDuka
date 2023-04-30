class Admin < ApplicationRecord
  has_secure_password

  enum access: [:ACTIVE, :DEACTIVATED]

  belongs_to :merchant
  has_many :clerks
  has_many :store_admins

  validates :email, presence: true


end
