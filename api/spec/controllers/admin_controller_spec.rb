require_relative '../../app/controllers/admins_controller'

RSpec.describe AdminsController, type: :controller do
    let(:merchant) { create(:merchant) }
    let(:admin) { create(:admin, merchant: merchant) }
  
    before do
      allow(controller).to receive(:merchant_authorize)
    end
  
    describe 'POST #register' do
      context 'with valid parameters' do
        let(:valid_params) do
          {
            admin: {
              username: 'test_admin',
              email: 'test_admin@example.com',
              password: 'test_password',
              status: 'active'
            }
          }
        end
  
        it 'creates a new admin' do
          expect do
            post :register, params: valid_params, session: { merchant_id: merchant.id }
          end.to change(Admin, :count).by(1)
        end
  
        it 'sends an email to the merchant' do
          expect do
            post :register, params: valid_params, session: { merchant_id: merchant.id }
          end.to change { ActionMailer::Base.deliveries.count }.by(1)
  
          expect(ActionMailer::Base.deliveries.last.to).to eq([merchant.email])
          expect(ActionMailer::Base.deliveries.last.subject).to eq('New admin registration')
        end
  
        it 'returns status code 201' do
          post :register, params: valid_params, session: { merchant_id: merchant.id }
          expect(response).to have_http_status(:created)
        end
  
        it 'returns the created admin as JSON' do
          post :register, params: valid_params, session: { merchant_id: merchant.id }
          expect(response.body).to eq(Admin.last.to_json)
        end
      end
  
      context 'with invalid parameters' do
        let(:invalid_params) do
          {
            admin: {
              username: nil,
              email: 'test_admin@example.com',
              password: 'test_password',
              status: 'active'
            }
          }
        end
  
        it 'does not create a new admin' do
          expect do
            post :register, params: invalid_params, session: { merchant_id: merchant.id }
          end.not_to change(Admin, :count)
        end
  
        it 'returns status code 422' do
          post :register, params: invalid_params, session: { merchant_id: merchant.id }
          expect(response).to have_http_status(:unprocessable_entity)
        end
  
        it 'returns an error message as JSON' do
          post :register, params: invalid_params, session: { merchant_id: merchant.id }
          expect(response.body).to eq({ message: 'registration failed', data: { username: ["can't be blank"] } }.to_json)
        end
      end
    end
  
    describe 'GET #show' do
      context 'when the admin exists' do
        it 'returns status code 200' do
          get :show, params: { id: admin.id }
          expect(response).to have_http_status(:ok)
        end
  
        it 'returns the admin as JSON' do
          get :show, params: { id: admin.id }
          expect(response.body).to eq(admin.to_json)
        end
      end
  
      context 'when the admin does not exist' do
        it 'returns status code 404' do
          get :show, params: { id: 'invalid_id' }
          expect(response).to have_http_status(:not_found)
        end
        end
    end
end