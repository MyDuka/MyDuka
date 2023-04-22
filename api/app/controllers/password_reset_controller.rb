class PasswordResetController < ApplicationController


    def password_reset 
        merchant = Merchant.find_by(email: params[:email])
        admin = Admin.find_by(email: params[:email])
        clerk = Clerk.find_by(email: params[:email])

        if merchant
            @user = merchant

            # send email
            ResetMailer.reset(@user).deliver.deliver_now
        elsif admin
            @user = admin

            # send email
            ResetMailer.reset(@user).deliver.deliver_now
        elsif clerk
            @user = clerk

            # send email
            ResetMailer.reset(@user).deliver.deliver_now 
        else   
            render json: {message: "Email not found"}, status: :not_found

        end


    end

end
