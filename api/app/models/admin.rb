class Admin < ApplicationRecord
    belongs_to :merchant
    has_many :clerks, dependent: :destroy 
    has_many :admin_store, dependent: :destroy
end
