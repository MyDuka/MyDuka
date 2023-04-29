class ReceivedItemsController < ApplicationController

    def index 
        ri = ReceivedItem.all 
    
        render json: ri, status: :ok
    end

    def show 
        ri = ReceivedItem.find_by(id: params[:id])
        if ri 
            render json: ri, status: :ok
        else  
            render json: {message: "not found"}, status: :not_found
        end
    end

    def ri_add
        product = Product.find_by(id: params[:id])
        if product 
            ri = product.received_items.create(ri_params)
            render json: ri, status: :created
        else  
            render json: {message: "not succesfull"}, status: :unprocessable_entity
        end
    end

    def update 
        ri = ReceivedItem.find_by(id: params[:id])
        if ri 
            ri = ReceivedItem.update(ri_params)
            render json: ri, status: :created
        else  
            render json: {message: "not succesfull"}, status: :unprocessable_entity
        end
    end

    def payment_status 
        ri = ReceivedItem.find_by(id: params[:id])
        if ri
            ri = ReceivedItem.update(ri_params)
            render json: ri, status: :created
        else  
            render json: {message: "not succesfull"}, status: :unprocessable_entity
        end
    end

    private 

    def ri_params
        params.permit(:received, :payment_status, :stocked, :spoilt) 
    end




end
