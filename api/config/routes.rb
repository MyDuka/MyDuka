Rails.application.routes.draw do
  resources :product_clerks
  resources :store_admins
  resources :recieved_items
  resources :stores
  resources :products
  resources :clerks
  resources :admins, only: [:show, :update, :delete]
  resources :merchants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # Admin routes

  post '/register', to: "products#register"
  
  post '/admins/login', to: "sessions#admin_login"

  # merchant routes

  post '/merchants/login', to: "sessions#merchant_login"

  # clerk routes

  post 'clerks/login', to: "sessions#clerk_login"


  # logout

  delete '/logout', to: "sessions#logout"

  get '/login/status', to: "sessions#login_status"







end
