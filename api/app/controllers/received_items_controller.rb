class ReceivedItemsController < ApplicationController

    def index 
        ri = RecievedItem.all 
        render json: ri, status: :ok
    end

    def show 
        ri = ReceivedItem.find_by(id: params[:id])
        if ri 
            render json: ri, status: :ok
        else  
            render json: {message: "not found", ri.errors}, status: :not_found
        end
    end

    def ri_add
        product = Product.find_by(:id params[:id])
        if product 
            ri = product.recieved_items.create(ri_params)
            render json: ri, status: :created
        else  
            render json: {message: "not succesfull"}, status: :unprocessable_entity
        end
    end

    def update 
        product = Product.find_by(:id params[:id])
        if product 
            ri = product.recieved_items.update(ri_params)
            render json: ri, status: :created
        else  
            render json: {message: "not succesfull"}, status: :unprocessable_entity
        end

    end




end
