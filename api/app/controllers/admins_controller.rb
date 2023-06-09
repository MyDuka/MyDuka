class AdminsController < ApplicationController
# before_action :merchant_authorize




    def index 
        # merchant = Merchant.find_by(id: session[:merchant_id])
        admins = Admin.all
        render json: admins, status: :ok
    end


    def merchant_admins
        merchant = Merchant.find_by(id: params[:id])
        admins = merchant.admins.all
        render json: admins, status: :ok
    end


    def register 
        merchant = Merchant.find(params[:id])
        admin = merchant.admins.create(admin_params)
        if admin.valid?
            # MerchantMailer.admin_registration(admin,merchant).deliver_now
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
            render json: {message: "admin not found"}, status: :not_found
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
        admin = Admin.find_by(id: params[:id])
        if admin
            admin.update(admin_params)
            if admin.access == "DEACTIVATED"
                MerchantMailer.admin_deactivation(admin).deliver_now
            elsif admin.access == "ACTIVATED"
                MerchantMailer.admin_activation(admin).deliver_now
            end
            render json: admin, status: :ok
        else  
            render json: {message: "admin not found"}, status: :unprocessable_entity
        end
    end

    def destroy 
        admin = Admin.find_by(id: params[:id])
        admin.destroy
        head :no_content
        # render json: {message: "success"}, status: 204
    end




    private

    def admin_params 
        params.permit(:username, :email, :password, :access)
    end


end
