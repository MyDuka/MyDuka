class AdminMailer < ApplicationMailer


    def clerk_registration(clerk, admin)
        @admin = admin
        @clerk = clerk
        mail to: clerk.email, subject: "Registration"
    end

    def clerk_deactivation(clerk)
        @clerk = clerk
        mail to: clerk.email, subject: "Deacti"
    end


end
