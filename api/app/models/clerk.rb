class Clerk < ApplicationRecord
    enum status: { active: 0, inactive: 1 }

    belongs_to :admin
  
    has_many :received_items, dependent: :destroy
  
    validates :name, presence: true
    #validates :email, presence: true, uniqueness: true
end
