class ClerksController < ApplicationController
  before_action :authenticate_admin!, except: [:new, :create]
  before_action :authenticate_clerk!, only: [:new, :create]
  before_action :set_admin, only: [:new, :create]
  before_action :set_clerk, only: [:show, :edit, :update, :destroy]

  def index
    clerks = Clerk.all
  end

  def new
    clerk = @admin.clerks.build
  end

  def create
    clerk = @admin.clerks.build(clerk_params)

    if clerk.save
      # send an email invitation to the newly created clerk
      #ClerkMailer.with(clerk: @clerk).invitation_email.deliver_now
      
      redirect_to @admin, notice: 'Clerk was successfully created.'
    else
      render 'new'
    end
  end

  def update
    if clerk.update(clerk_params)
      redirect_to @admin, notice: 'Clerk was successfully updated.'
    else
      render 'edit'
    end
  end

  def destroy
    clerk.destroy
    redirect_to @admin, notice: 'Clerk was successfully destroyed.'
  end

  private
    def set_admin
      @admin = Admin.find(params[:admin_id])
    end

    def set_clerk
      clerk = Clerk.find(params[:id])
    end

    def clerk_params
      params.require(:clerk).permit(:email, :password, :password_confirmation, :full_name)
    end
end
