class RequestSerializer < ActiveModel::Serializer
  attributes :id, :product, :quantity, :state

  belongs_to :product
end
