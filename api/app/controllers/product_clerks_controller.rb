class ProductClerksController < ApplicationController

    def create 
        productClerk = ProductClerk.create(productC_params)
        render json: ProductClerk, status: :created
    end

    def index 
        prodC = ProductClerk.all  
        render json: prodC, status: :ok
    end

    def destroy 
        ProductClerk.find(param[:id]).destroy
        head :no_content
    end

    def show 
        prodC = ProductClerk.find_by(id: params[id])
        if prodC 
            render json: prodC, status: :ok
        else 
            render json: {message: "Not found"}, status: :not_found
        end
    end



    private  

    def productC_params 
        params.permit(:product_id, :clerk_id) 
    end

end
