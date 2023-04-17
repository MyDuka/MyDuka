class Clerk < ApplicationRecord
    # Associations
    belongs_to :admin
    has_many :received_items
  
    # Devise modules
    #devise :database_authenticatable, :recoverable, :rememberable, :validatable
  
    # Validations
    validates :email, presence: true, uniqueness: true, format: { with: Devise.email_regexp }
  
    # Methods
    #def name
      # You can define a method to return the name of the clerk based on the attributes in the model.
      # For example, if you have a "first_name" and "last_name" attribute, you can do:
     # "#{first_name} #{last_name}"
    #end
  end
  