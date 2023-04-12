class Product < ApplicationRecord
  belongs_to :admin
  belongs_to :clerk
end
