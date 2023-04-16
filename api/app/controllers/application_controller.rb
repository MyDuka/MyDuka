class ApplicationController < ActionController::API
    include ActionController::Cookies


    # merchants methods

    def merchant 
        merchant.find(session[:merchant_id].to_i)
    end

    def merchant_params
        params.permit(:username, :password, :email)
    end

    def merchant_authorization 
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :merchant_id
    end

    # clerk methods

    def clerk_params 
        params.permit(:username, :password, :email)
    end

    def clerk_authorize 
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :clerk_id
    end

    # admin methods

    def admin_params
        params.permit(:username, :password, :email) 
    end

    def admin_authorize 
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :admin_id

    end

    # products methods

    def products_params
        params.permit(:name, :type, :buying_price, :selling_price, :supplier, :image)
    end


    # store methods

    def store_params
        params.permit(:name, :address)
    end

    #  received items

    def ri_params
        params.permit(:received, :payment_status, :stocked, :spoilt) 
    end


end
