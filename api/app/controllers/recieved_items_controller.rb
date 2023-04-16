class RecievedItemsController < ApplicationController


    def index 
        ri = RecievedItem.all 
        render json: ri, status: :ok
    end

    def create 
        product = Product.find_by(:name product_params[:name])
        ri = product.recieved_items.create(ri_params)
    end

end
