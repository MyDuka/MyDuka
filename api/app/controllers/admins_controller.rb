class AdminsController < ApplicationController
# before_action :merchant_authorize




    def index 
        merchant = Merchant.find_by(id: session[:merchant_id])
        admins = merchant.admins.all
        render json: admins, status: :ok
    end


    def register 
        merchant = Merchant.find(params[:id])
        admin = merchant.admins.create(admin_params)
        if admin.valid?
            MerchantMailer.admin_registration(admin,merchant).deliver_now
            render json: admin, status: :created
        else 
            render json: { message: "registration failed", data: admin.errors}, status: :unprocessable_entity
        end  
    end


    def show
        admin = Admin.find_by(id: params[:id])
        if admin
            render json: admin, status: :ok 
        else 
            render json: {message: "admin not found", data: admin.errors}, status: :not_found
        end
    end


    def update
        admin = Admin.find_by(id: session[:admin_id])
        if admin
            admin.update(admin_params)
            render json: {message: "updated successfully"}
        else  
            render json: {message: "failed"}, status: :unprocessable_entity
        end
    end

    # deactivates an admin, done by merchant
    def admin_activation
        merchant = Merchant.find_by(id: session[:merchant_id])
        if merchant
            admin = merchant.admins.find_by(id: params[:id])
            admin.update(admin_params[:status])
            if admin.status == "DEACTIVATED"
                MerchantMailer.admin_deactivation(merchant, admin).deliver_now
            elsif clerk.status == "ACTIVATED"
                MerchantMailer.admin_activation(merchant, admin).deliver_now
            end
            render json: admin, status: :ok
        else  
            render json: {message: "admin not found"}, status: :unprocessable_entity
        end
    end

    def destroy 
        admin = merchant.admins.find_by(id: params[:id])
        admin.destroy
        render json: {message: "success"}, status: 204
    end




    private

    def admin_params 
        params.permit(:username, :email, :password, :status)
    end


end
