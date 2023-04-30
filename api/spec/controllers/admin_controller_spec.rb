require_relative '../../app/controllers/admins_controller'

RSpec.describe AdminsController, type: :request do
  let(:merchant) { FactoryBot.create(:merchant) }
  let(:admin) { FactoryBot.create(:admin, merchant: merchant) }

  describe "GET index" do
    it "returns a success response" do
      get :index, session: { merchant_id: merchant.id }
      expect(response).to be_successful
    end
  end

  describe "GET show" do
    it "returns a success response" do
      get :show, params: { id: admin.to_param }
      expect(response).to be_successful
    end

    it "returns a not found response when admin is not found" do
      get :show, params: { id: -1 }
      expect(response).to have_http_status(:not_found)
    end
  end

  describe "PATCH update" do
    let(:new_attributes) { { status: "DEACTIVATED" } }

    it "updates the requested admin" do
      patch :update, params: { id: admin.to_param, admin: new_attributes }
      admin.reload
      expect(admin.status).to eq("DEACTIVATED")
    end

    it "returns a success response" do
      patch :update, params: { id: admin.to_param, admin: new_attributes }
      expect(response).to have_http_status(:success)
    end

    it "returns an unprocessable entity response when admin is not found" do
      patch :update, params: { id: -1, admin: new_attributes }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe "PATCH admin_activation" do
    let(:new_attributes) { { status: "DEACTIVATED" } }

    it "updates the requested admin's status" do
      patch :admin_activation, params: { id: admin.to_param, status: "DEACTIVATED" }
      admin.reload
      expect(admin.status).to eq("DEACTIVATED")
    end

    it "sends an admin deactivation email when status is changed to DEACTIVATED" do
      allow(MerchantMailer).to receive(:admin_deactivation).and_return(double("mailer", deliver_now: nil))
      patch :admin_activation, params: { id: admin.to_param, status: "DEACTIVATED" }
      expect(MerchantMailer).to have_received(:admin_deactivation).with(merchant, admin)
    end

    it "sends an admin activation email when status is changed to ACTIVATED" do
      allow(MerchantMailer).to receive(:admin_activation).and_return(double("mailer", deliver_now: nil))
      patch :admin_activation, params: { id: admin.to_param, status: "ACTIVATED" }
      expect(MerchantMailer).to have_received(:admin_activation).with(merchant, admin)
    end

    it "returns a success response" do
      patch :admin_activation, params: { id: admin.to_param, status: "DEACTIVATED" }
      expect(response).to have_http_status(:success)
    end

    it "returns an unprocessable entity response when merchant is not found" do
      patch :admin_activation, params: { id: -1, status: "DEACTIVATED" }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

    describe "DELETE #destroy" do
      let(:merchant) { FactoryBot.create(:merchant) }
      let(:admin) { FactoryBot.create(:admin, merchant: merchant) }
  
      before do
        # Authenticate the merchant
        session[:merchant_id] = merchant.id
  
        # Set the admin to be deleted
        allow(Admin).to receive(:find_by).with(id: admin.id.to_s).and_return(admin)
      end
  
      it "deletes the admin" do
        expect(admin).to receive(:destroy)
  
        delete :destroy, params: { id: admin.id }
      end
  
      it "returns a 204 status code" do
        delete :destroy, params: { id: admin.id }
  
        expect(response).to have_http_status(204)
      end
    end
  
  

end