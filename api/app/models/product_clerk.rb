class ProductClerk < ApplicationRecord

  belongs_to :product
  belongs_to :clerk
  
end
