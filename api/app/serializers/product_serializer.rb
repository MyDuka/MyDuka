class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :image, :supplier, :buying_price, :selling_price

  belongs_to :store
end
