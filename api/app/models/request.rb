class Request < ApplicationRecord

    enum state: ["ACCEPT", "DECLINE"]


end
