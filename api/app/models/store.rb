class Store < ApplicationRecord

  belongs_to :merchant
  has_many :products
end
