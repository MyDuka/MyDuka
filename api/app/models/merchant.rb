class Merchant < ApplicationRecord
  enum role: { merchant: 0, other: 1 }

  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, on: :create
  
  # Add the name attribute
  attribute :name, :string
end
