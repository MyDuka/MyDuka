Rails.application.routes.draw do
  resources :received_items, only: [:index, :show, :update, :delete]
  resources :product_clerks, only: [:index, :create, :show, :delete]
  resources :store_admins
  resources :stores, only: [:index, :show, :update, :delete]
  resources :products, only: [:index, :update, :show, :delete]
  resources :clerks, only: [:index, :update, :show, :delete]
  resources :admins, only: [:index,:show, :update, :delete]
  resources :merchants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # Admin routes

  post '/admin/register', to: "admins#register"
  
  post '/admin/login', to: "sessions#admin_login"

  post '/admin/activation', to: "admins#admin_activation"

  # merchant routes

  post '/merchant/login', to: "sessions#merchant_login"

  # clerk routes

  post 'clerk/login', to: "sessions#clerk_login"


  # logout

  delete '/logout', to: "sessions#logout"

  get '/login/status', to: "sessions#login_status"

  # product routes

  post 'add/product/:id', to: "products#add_product"


  # revieved item routes

  post '/received/items/:id', to: "received_items#ri_add"

  #  store routes

  post '/add/store', to: "stores#add_store"

  #  clerk routes 

  post '/clerk/register', to: "clerks#add_clerk"

  post '/clerk/activation', to: "clerks#clerk_activation"







end
