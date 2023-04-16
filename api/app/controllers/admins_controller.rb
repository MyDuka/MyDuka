class AdminsController < ApplicationController


    def create 
        admin = merchant.admins.create(admin_params)
        if admin.valid?
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
        admin = merchant.admins.find_by(id: params[:id])
        if admin
            admin.update(admin_params)
            render json: {message: "updated successfully"}
        else  
            render json: {message: "failed"}, status: :unprocessable_entity
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
