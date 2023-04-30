Rails.application.routes.draw do
  resources :requests, only: [:index, :create, :show]
  resources :received_items, only: [:index, :show, :update, :delete]
  resources :product_clerks, only: [:index, :create, :show, :delete]
  resources :store_admins
  resources :stores, only: [:index, :show, :update, :delete]
  resources :products, only: [:index, :update, :show]
  resources :clerks, only: [:index, :update, :show]
  resources :admins, only: [:index,:show, :update]
  resources :merchants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # Admin routes

  post '/admin/register/:id', to: "admins#register"
  
  post '/admin/login', to: "sessions#admin_login"

  put '/admin/activation/:id', to: "admins#admin_activation"

  delete '/admins/:id', to: "admins#destroy"

  # merchant routes

  post '/merchant/login', to: "sessions#merchant_login"



  # clerk routes

  post 'clerk/login', to: "sessions#clerk_login"

  get "/admin/clerks/:id", to: "clerks#all_clerks"

  delete "clerk/:id", to: "clerks#remove"


  # logout

  delete '/admin/logout', to: "sessions#admin_logout"

  delete '/merchant/logout', to: "sessions#merchant_logout"

  delete '/clerk/logout', to: "sessions#clerk_logout"

  get '/login/status', to: "sessions#login_status"

  # product routes

  post 'add/product/:id', to: "products#add_product"

  delete '/products/:id', to: "products#destroy"


  # revieved item routes

  post '/received/items/:id', to: "received_items#ri_add"

  put '/payment/status/:id', to: "received_items#payment_status"

  #  store routes

  post '/add/store/:id', to: "stores#add_store"

  #  clerk routes 

  post '/clerk/register/:id', to: "clerks#add_clerk"

  put '/clerk/activation/:id', to: "clerks#clerk_activation"

  #  request routes

  put 'request/decision/:id', to: "requests#request_state"







end
