class ReceivedItemSerializer < ActiveModel::Serializer
  attributes :id, :received, :payment_status, :stocked, :spoilt, :created_at


  belongs_to :product
end
