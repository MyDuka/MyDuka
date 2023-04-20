class StoresController < ApplicationController


    def index 
        merchant = Merchant.find(session[:merchant_id])
        store = merchant.stores.all 
        render json: store, status: :ok
    end

    def show 
        merchant = Merchant.find(session[:merchant_id])
        store = merchant.stores.find_by(id: params[:id])
        if store 
            render json: store, status: :ok 
        else   
            render json: {message: "not found"}, status: :not_found
        end
    end

    def add_store
        merchant = Merchant.find_by(id: session[:merchant_id])

        if merchant
            store = merchant.stores.create(store_params)
            render json: store, status: :created
        else  
            render json:{message: "Not Created"}, status: :unprocessable_entity
        end
    end


    def update 
        merchant = Merchant.find_by(id: session[:merchant_id])
        if merchant  
            store = merchant.store.update(store_params)
            render json: store, status: :ok
        else  
            render json: {message: "not updated"}, status: :unprocessable_entity
        end
    end

    def destroy
        Store.find(params[id]).destroy
        head :no_content
    end



end
