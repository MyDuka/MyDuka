require_relative '../../app/controllers/stores_controller'


RSpec.describe StoresController, type: :controller do

    let(:merchant) { create(:merchant) } # assuming you have a Merchant factory
    let(:store) { create(:store, merchant: merchant) } # assuming you have a Store factory
  
    describe "GET index" do
      before { get :index }
  
      it "returns http success" do
        expect(response).to have_http_status(:ok)
      end
  
      it "returns all stores as json" do
        stores = JSON.parse(response.body)
        expect(stores.size).to eq(Store.count)
      end
    end
  
    describe "GET show" do
      context "when the store exists" do
        before { get :show, params: { id: store.id } }
  
        it "returns http success" do
          expect(response).to have_http_status(:ok)
        end
  
        it "returns the store as json" do
          store_json = JSON.parse(response.body)
          expect(store_json["id"]).to eq(store.id)
        end
      end
  
      context "when the store does not exist" do
        before { get :show, params: { id: -1 } }
  
        it "returns http not_found" do
          expect(response).to have_http_status(:not_found)
        end
  
        it "returns an error message as json" do
          error = JSON.parse(response.body)
          expect(error["message"]).to eq("not found")
        end
      end
    end
  
    describe "POST add_store" do
      context "when the merchant is authenticated" do
        before { allow(controller).to receive(:authenticate_merchant!).and_return(true) }
  
        context "with valid params" do
          let(:valid_params) { { name: "New Store" } }
  
          it "creates a new store" do
            expect {
              post :add_store, params: valid_params
            }.to change(Store, :count).by(1)
          end
  
          it "returns http created" do
            post :add_store, params: valid_params
            expect(response).to have_http_status(:created)
          end
  
          it "returns the new store as json" do
            post :add_store, params: valid_params
            store_json = JSON.parse(response.body)
            expect(store_json["name"]).to eq("New Store")
          end
        end
  
        context "with invalid params" do
          let(:invalid_params) { { name: "" } }
  
          it "does not create a new store" do
            expect {
              post :add_store, params: invalid_params
            }.not_to change(Store, :count)
          end
  
          it "returns http unprocessable_entity" do
            post :add_store, params: invalid_params
            expect(response).to have_http_status(:unprocessable_entity)
          end
  
          it "returns an error message as json" do
            post :add_store, params: invalid_params
            error = JSON.parse(response.body)
            expect(error["message"]).to eq("Not Created")
          end
        end
      end
  
      context "when the merchant is not authenticated" do
        before { allow(controller).to receive(:authenticate_merchant!).and_raise(Pundit::NotAuthorizedError) }
  
        it "returns http unauthorized" do
          post :add_store
          expect(response).to have_http_status(:unauthorized)
        end
      end
    end
  


end
       
  