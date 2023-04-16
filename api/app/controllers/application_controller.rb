class ApplicationController < ActionController::API
    include ActionController::Cookies


    # merchants methods

    def merchant 
        merchant.find(session[:merchant_id].to_i)
    end

    def merchant_params
        params.permit(:username, :password, :email)
    end

    # clerk methods

    def clerk_params 
        params.permit(:username, :password, :email)
    end

    # admin methods

    def admin_params
        params.permit(:username, :password, :email) 
    end


end
