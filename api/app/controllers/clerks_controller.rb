class ClerksController < ApplicationController
before_action :admin_authorize


def index 
    admin = Admin.find_by(id: session[:admin_id])
    clerks = admin.clerks.all
    render json: clerks, status: :ok
end


def add_clerk
    admin = Admin.find_by(id: session[:admin_id])
    if admin
    clerk = admin.clerks.create(clerk_params)
    render json: clerk, status: :created
    else  
        render json: {message:"unprocessible"}, status: :unprocessable_entity
    end
end

def update 
    admin = Admin.find_by(id: session[:admin_id])
    if admin
        clerk = admin.clerks.update(clerk_params)
        render json: {message:"updated succesffuly", clerk}, status: :ok 
    else  
        render json: {message: "failed to update"}, status: :unprocessable_entity
    end
end

def show  
    admin = Admin.find_by(id: session[:admin_id])
    if admin 
        clerk = admin.clerks.find_by(id: params[:id])
        render json: clerk, status: :ok
    else  
        render json: {message: "Clerk not found."}, status: :not_found
    end
end  

def destroy  
    admin = Admin.find_by(id: session[:admin_id])
    admin.clerks.find(id).destroy
    head :no_content
end

private 

def clerk_params 
    params.permit(:username, :email, :password, :status)
end


end
