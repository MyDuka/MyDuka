class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :address

  belongs_to :merchant
end
