class ReceivedItemSerializer < ActiveModel::Serializer
  attributes :id, :received, :payment_status, :stocked, :spoilt


  belongs_to :product
end
