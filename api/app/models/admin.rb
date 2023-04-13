class Admin < ApplicationRecord

  enum status: [ACTIVE, DEACTIVATED]

  belongs_to :merchant


end
