Rails.application.routes.draw do
  resources :products
  resources :clerks
  resources :admins
  resources :merchants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/merchants/:id', to: 'merchants#update'

  # Defines the root path route ("/")
  # root "articles#index"
end
