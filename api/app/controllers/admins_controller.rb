class AdminsController < ApplicationController    
    before_action :authentitate_admin!, except:[:index, :show, :update, :destroy]

    #GET/admin
    def index
        admin = Admin.All 
        render json: admins
    end
    #GET/admin/:id
        def show
      admin = Admin.find_by(id: params[:id])
      if admin
        render json: admin
      end
    end
  
    # POST /admins
    def create
      admin = Admin.new(admin_params)
      if admin.save
        render json: admin
      else



         render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # DELETE /admin/:id
    def destroy
      admin = Admin.find(params[:id])
      admin.destroy
      render json: { message: "Admin deleted" }
    end
