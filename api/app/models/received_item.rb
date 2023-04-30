class ReceivedItem < ApplicationRecord


  enum payment_status: [:PAID, :UNPAID]

  belongs_to :product


end
