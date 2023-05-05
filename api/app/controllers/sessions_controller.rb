class SessionsController < ApplicationController


    # admin, merchant and clerk login

    def admin_login

        sql = "username = :username OR email = :email "

        admin = Admin.where(sql, {username: admin_param[:username], email: admin_param[:email]}).first

        if admin.access == "ACTIVE"
            if admin&.authenticate(admin_param[:password])
                session[:admin_id] = admin.id
                render json: admin, status: :no_content
            else  
                render json: {message: "Invalid username or password"}, status: :unprocessable_entity
            end
        elsif admin.access == "DEACTIVATED"
            render json: {message: "Account deactivated"}, status: :not_found
        end
  
    end

    def merchant_login

        sql = "username = :username OR email = :email "

        merchant = Merchant.where(sql, {username: merchant_params[:username], email: merchant_params[:email]}).first

        

        if merchant&.authenticate(merchant_params[:password])
            session[:merchant_id] = merchant.id
            render json: merchant, status: :ok
        else  
            render json: {message: "Invalid username or password"}, status: :unprocessable_entity
        end
  
    end


    #  clerk login, check for status is 

    def clerk_login 

        sql = "username = :username OR email = :email "

        clerk = Clerk.where(sql, {username: clerk_params[:username], email: clerk_params[:email]}).first
        if clerk.access == "ACTIVE"
            if clerk&.authenticate(clerk_params[:password])
                session[:clerk_id] = clerk.id
                render json: clerk, status: :ok
            else  
                render json: {message: "Invalid username or password"}, status: :unprocessable_entity
            end
        elsif clerk.access == "DEACTIVATED"
            render json: {message: "Account Deactivated"}, status: :not_found
        end
  
    end


    # merchant, admin and clerk logout

  

    def clerk_logout 
        # clerk = Clerk.find_by(id: session[:clerk_id])

        if session.present?
            session.delete :clerk_id
            render json: {message: "clerk logout" }
        else  
            render json: {message: "Please login first"}
        end

    end


    def admin_logout 
        # admin = Admin.find_by(id: session[:admin_id] )

        if session.present?
            session.delete :admin_id
            render json: {message: "admin logout"}
        else  
            render json: {message: "Please login first"}
        end
    end


    def merchant_logout 
        # merchant = Merchant.find_by(id: session[:merchant_id])         
        if session.present?
            session.delete :merchant_id
            render json: {message: "merchant logout"}
            head :no_content
        # else  
        #     render json: {message: "Please login first"}
        end
    end


    # check login session
    
    def login_status

        admin = Admin.find_by(id: session[:admin_id])
        merchant = Merchant.find_by(id: session[:merchant_id])
        clerk = Clerk.find_by(id: session[:clerk_id])

        users = [[{type: "Administrator"} ,admin],[{type: "merchant"}, merchant], [{type: "clerk"}, clerk] ]

        # if admin
        #     render json: {message: "An admin logged", data: admin}
        # elsif merchant
        #     render json: {message: "A merchant logged", data: merchant}
        # elsif clerk 
        #     render json: {message: "A clerk logged", data: clerk}
        # else  
        #     render json: { message: "No one is logged in"}
        # end

        render json: {message:"Logged users", data: users}


    end


    private 

    def merchant_params
        params.require(:session).permit(:username, :password, :email)
    end

    def admin_param
        params.require(:session).permit(:username, :password, :email)
    end


end
