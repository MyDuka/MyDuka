class ClerksController < ApplicationController
    before_action :authenticate_admin!
  
    def index
      @clerks = current_admin.clerks
    end
  
    def new
      @clerk = Clerk.new
    end
  
    def create
      @clerk = Clerk.new(clerk_params)
      if @clerk.save
        redirect_to clerks_path, notice: "Clerk was successfully created."
      else
        render :new
      end
    end
  
    def edit
      @clerk = current_admin.clerks.find(params[:id])
    end
  
    def update
      @clerk = current_admin.clerks.find(params[:id])
      if @clerk.update(clerk_params)
        redirect_to clerks_path, notice: "Clerk was successfully updated."
      else
        render :edit
      end
    end
  
    def destroy
      @clerk = current_admin.clerks.find(params[:id])
      @clerk.destroy
      redirect_to clerks_path, notice: "Clerk was successfully deleted."
    end
  
    private
  
    def clerk_params
      params.require(:clerk).permit(:name, :email, :password, :password_confirmation)
    end
  end
  