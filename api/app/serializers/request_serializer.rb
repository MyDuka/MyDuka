class RequestSerializer < ActiveModel::Serializer
  attributes :id, :product, :supplier, :quantity, :state, :created_at


end
