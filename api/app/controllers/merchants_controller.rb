class MerchantsController < ApplicationController


    def index 
        merchant = Merchant.all 
        render json: merchant, status: :ok
    end

    def create 
        merchant = Merchant.create(merchant_param)
        if merchant.valid?
            # SignupMailer.merchant_signup(merchant).deliver_now
            render json: merchant, status: :created 
        else   
            render json: {message: "unprocessable"}, status: :unprocessable_entity
        end
        
    end

   

    def show 
        merchant = Merchant.find_by(id: params[:id])
        if merchant 
            render json: merchant, status: :ok 
        else  
            render json: {message: "not found"}, status: :not_found
        end
    end 


    def update 
        
        if session.present?
            merchant = Merchant.find_by(id: sessions[:merchant_id])
            merchant.update(merchant_params) 
            render json: merchant, status: :ok
        else  
            render json: {message: "unprocessable"}, status: :unprocessable_entity
        end
    end


    def destroy 
        Merchant.find(sessions[:params[id]])
    end

    private 

    def merchant_param
        params.permit(:username, :password, :email, :contact, :address, :image)
    end


end
