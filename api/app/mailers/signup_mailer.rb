class SignupMailer < ApplicationMailer


    def merchant_signup(merchant)
        @merchant = merchant

        mail to: merchant.email, subject: "Sign up"
    end

end
