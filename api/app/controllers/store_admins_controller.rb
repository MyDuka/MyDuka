class StoreAdminsController < ApplicationController


    def create 
        storeAdmn = StoreAdmin.create(storeA_params)
        render json: storeAdmn, status: :created
    end

    def index 
        StoreA = StoreAdmin.all  
        render json: storeA, status: :ok
    end

    def destroy 
        StoreAdmin.find(param[:id]).destroy
        head :no_content
    end

    def show 
        storeA = StoreAdmin.find_by(id: params[id])
        if storeA 
            render json: storeA, status: :ok
        else 
            render json: {message: "Not found"}, status: :not_found
        end
    end

    def update 
        merchant = Merchant.find(session[:merchant_id]) 
        store = merchant.stores.find_by(id: params[:id])
        if store 
            render json: {message: "updated"}, status: :ok 
        else  
            renser json: {message: unprocessable_entity}
        end
    end
    


end
