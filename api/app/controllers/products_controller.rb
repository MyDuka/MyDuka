class ProductsController < ApplicationController



    def index 
        products = Product.all

        render json: products, status: :ok
    end


    def add_product 
        store = Store.find_by(id: params[:id])
        
        if store
            product = store.products.create(product_params) 
            render json: product, status: :created
        else 
            render json: {message: "Product not created"}, status: :unprocessable_entity
        end
    end


    def show
        product = Product.find_by(id: params[:id])
        if product
            render json: product, status: :ok
        else 
            render json: {message: "Not Found", product.errors}, status: :unprocessable_entity
        end
    end


    def update
        clerk = Clerk.find_by(id: session(:clerk))
        # product = Product.find_by(id: params[:id])
        if product
            product = Product.update(product_params)
            render json: {product, info: "Updated succesfully"},status: :ok

        else  
            render json: {message: "Not updated"}, status: :unprocessable_entity
        end

    end

    def destroy
        product = Product.find(params[:id])
        product.destroy
        header :no_content

    end



end
