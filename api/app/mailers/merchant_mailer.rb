class MerchantMailer < ApplicationMailer


    def admin_registration(admin,merchant)
        @admin = admin
        @merchant = merchant
        mail to: admin.email, subject: "Registration"

    end

    def admin_deactivation(admin)
        @admin = admin
        # @merchant = merchant
        mail to: admin.email, subject: "Deactivation"
    end

    def admin_activation(admin)
        @admin = admin
        # @merchant = merchant
        mail to: admin.email, subject: "Activation"
    end

end
