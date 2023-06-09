class ApplicationController < ActionController::API
    include ActionController::Cookies


    # merchants methods

    # def merchant 
    #     merchant.find(session[:merchant_id])
    # end

    def merchant_params
        params.permit(:username, :password, :email, :contact, :address, :image )
    end

    def merchant_authorize 
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :merchant_id
    end

    # clerk methods

    def clerk_params 
        params.permit(:username, :password, :email, :contact, :address, :image, :access)
    end

    def clerk_authorize 
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :clerk_id
    end

    # admin methods

    def admin_params
        params.permit(:username, :password, :email, :contact, :address, :image, :access) 
    end

    def admin_authorize 
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :admin_id

    end

    # products methods

    def products_params
        params.permit(:name, :category, :buying_price, :selling_price, :supplier, :image)
    end


    # store methods

    def store_params
        params.permit(:name, :address, :location)
    end

    #  received items methods

    # def ri_params
    #     params.permit(:received, :payment_status, :stocked, :spoilt) 
    # end

    # store admin methods

    def storeA_params 
        params.permit(:store_id, :admin_id)
    end

    #  store params

    def store_params 
        params.permit(:name, :address)
    end


end
