class RecievedItem < ApplicationRecord
  belongs_to :product

  enum :payment_status [:PAYED, :UNPAID]
end
