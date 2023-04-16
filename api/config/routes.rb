Rails.application.routes.draw do
  resources :received_items, only: [:index, :show, :update, :delete]
  resources :product_clerks
  resources :store_admins
  resources :stores
  resources :products, only: [:index, :update, :show, :delete]
  resources :clerks
  resources :admins, only: [:index,:show, :update, :delete]
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

  # product routes

  post 'add/product/:id', to: "products#add_product"

  # post 'update/product/:id', to "products#update_product"

  # revieved item routes

  post '/received/items/:id', to: "received_items#ri_add"







end
