# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "💤..seed ninja...🥷"

6.times do 
    product = Product.create(
        "name": Faker::Beer.name ,
        "category": Faker::Beer.brand,
        "supplier": "Brew Masters 254",
        "buying_price":  rand(3894.37..6562.37),
        "selling_price":  rand(6563.98..7846.78),
        "store_id": 3
    )

    rand(3..7).times do
        ReceivedItem.create(
        "received":  rand(56..258),
        "payment_status": rand(0..1),
        "stocked":  rand(678..789),
        "spoilt": rand(67..832),
        "product_id": product.id
    )
    end

    3.times do 
        Request.create(
            "product": Faker::Beer.name,
            "supplier": "EABL",
            "quantity": rand(67..367),
            "state": rand(0..1)
        )
    end

end


puts "🤾 . dusted. . 😅"