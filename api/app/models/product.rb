class Product < ApplicationRecord
    enum payment: [PAID, UNPAID]
end
