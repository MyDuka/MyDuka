class Product < ApplicationRecord

    belongs_to :store
    has_many :received_items
    has_many :product_clerks
    has_many :requests
end
