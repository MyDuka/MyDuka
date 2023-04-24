class ClerksController < ApplicationController
# before_action :admin_authorize

def index 

        clerks = Clerk.all
        render json: clerks, status: :ok
  
end

def all_clerks 
    admin = Admin.find_by(id: params[:id])
    if admin
        clerks = admin.clerks.all
        render json: clerks, status: :ok
    else
        render json: {message: "No clerks found"}, status: :not_found
    end
end


def add_clerk
    admin = Admin.find_by(id: params[:id])
    if admin
    clerk = admin.clerks.create(clerk_params)
    AdminMailer.clerk_registration(clerk, admin).deliver_now
    render json: clerk, status: :created
    else  
        render json: {message:"unprocessible"}, status: :unprocessable_entity
    end
end

def update 
    admin = Admin.find_by(id: session[:admin_id])
    if admin
        clerk = admin.clerks.update(clerk_params)
        render json: {message:"updated succesffuly",data: clerk}, status: :ok 
    else  
        render json: {message: "failed to update"}, status: :unprocessable_entity
    end
end 


   # deactivates a clerk, done by admin
   def clerk_activation 
    admin = Admin.find_by(id: session[:admin_id]) 
    if admin
        clerk = admin.clerks.find_by(id: params[:id])
        clerk.update(clerk_params)
        if clerk.status == "DEACTIVATED"
            AdminMailer.clerk_deactivation(clerk,admin).deliver_now
        elsif clerk.status == "ACTIVATED"
            AdminMailer.clerk_activation(clerk,admin).deliver_now
        end
        render json: clerk, status: :ok
    else  
        render json: {message: "clerk not found"}, status: :unprocessable_entity
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
