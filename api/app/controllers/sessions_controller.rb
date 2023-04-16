class SessionsController < ApplicationController


    # admin, merchant and clerk login

    def admin_login

        sql = "username = :username OR email = :email "

        admin = Admin.where(sql, {username: admin_params[:username], email: admin_params[:email]}).first

        if admin&.authenticate(admin_params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :ok
        else  
            render json: {message: "Invalid username or password"}, status: :unprocessable_entity
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


    def clerk_login 

        sql = "username = :username OR email = :email "

        clerk = Clerk.where(sql, {username: clerk_params[:username], email: clerk_params[:email]}).first

        if clerk&.authenticate(clerk_params[:password])
            session[:clerk_id] = clerk.id
            render json: clerk, status: :ok
        else  
            render json: {message: "Invalid username or password"}, status: :unprocessable_entity
        end
  
    end


    # merchant, admin and clerk logout

    def logout
        admin = Admin.find_by(id: session[:admin_id] )
        merchant = Merchant.find_by(id: session[:merchant_id])
        clerk = Clerk.find_by(id: session[:clerk_id])

        if admin 
            session.delete :admin_id
            render json: {message: "admin logout"}, head :no_content
        elsif merchant
            session.delete :merchant_id
            render json: {message: "merchant logout"}, head :no_content
        elsif clerk
            session.delete :clerk_id
            render json: {message: "clerk logout" }, head :no_content
        else  
            render json: {message: "Please login first"}
        end

    end


    # check login session
    
    def login_status

        admin = Admin.find_by(id: session[:admin_id].to_i )
        merchant = Merchant.find_by(id: session[:merchant_id].to_i)
        clerk = Clerk.find_by(id: session[:clerk_id].to_i)

        if admin
            render json: {message: "An admin logged", data: admin}
        elsif merchant
            render json: {message: "A merchant logged", data: merchant}
        elsif clerk 
            render json: {message: "A clerk logged", data: clerk}
        else  
            render json: { message: "No one is logged in"}
        end


    end


end
