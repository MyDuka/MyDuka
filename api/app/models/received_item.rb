class ReceivedItem < ApplicationRecord


  enum :payment_status [:PAYED, :UNPAID]
  
  belongs_to :product


end
