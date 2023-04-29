class RequestSerializer < ActiveModel::Serializer
  attributes :id, :product, :quantity, :state, :created_at

  belongs_to :product
end
