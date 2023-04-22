class MerchantMailer < ApplicationMailer


    def admin_registration(admin,merchant)
        @admin = admin
        @merchant = merchant
        mail to: admin.email, subject: "Registration"

    end

end
