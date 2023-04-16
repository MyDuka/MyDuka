class Product < ApplicationRecord

    belongs_to :store
    has_many :recieved_items
    has_many :product_clerks
 
end
