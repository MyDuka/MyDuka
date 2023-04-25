class ReceivedItemsSerializer < ActiveModel::Serializer
  attributes :id, :received, :payment_status, :spoilt, :stocked

belongs_to :product
end
