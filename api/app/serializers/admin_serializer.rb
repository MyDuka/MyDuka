class AdminSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :status
  belongs_to :merchant
  has_many :clerks, dependent: :destroy 
  has_many :admin_store, dependent: :destroy
end
