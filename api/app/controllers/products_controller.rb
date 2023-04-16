class ProductsController < ApplicationController



    def index 
        products = Product.all

        render json: products, status: :ok
    end


    def create 
        product = Product.create(product_params)
        if product.valid? 
            render json: product, status: :created
        else 
            render json: {message: "Product not created"}, status: :unprocessable_entity
        end
    end



end
