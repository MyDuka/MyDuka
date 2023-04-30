class AdminMailer < ApplicationMailer


    def clerk_registration(clerk, admin)
        @admin = admin
        @clerk = clerk
        mail to: clerk.email, subject: "Registration"
    end

    def clerk_deactivation(clerk)
        @clerk = clerk
        # @admin = admin
        mail to: clerk.email, subject: "Deactivation"
    end

    def clerk_activation(clerk)
        @clerk = clerk
        # @admin = admin
        mail to: clerk.email, subject: "Activation"

    end


end
