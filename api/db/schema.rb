# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_16_182601) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest", default: "12345"
    t.integer "status", default: 0
    t.bigint "merchant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["merchant_id"], name: "index_admins_on_merchant_id"
  end

  create_table "clerks", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest", default: "12345"
    t.integer "status", default: 0
    t.bigint "admin_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["admin_id"], name: "index_clerks_on_admin_id"
  end

  create_table "merchants", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "product_clerks", force: :cascade do |t|
    t.bigint "product_id"
    t.bigint "clerk_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clerk_id"], name: "index_product_clerks_on_clerk_id"
    t.index ["product_id"], name: "index_product_clerks_on_product_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "type"
    t.string "image"
    t.string "supplier"
    t.decimal "buying_price"
    t.decimal "selling_price"
    t.integer "store_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "received_items", force: :cascade do |t|
    t.integer "received"
    t.integer "payment_status"
    t.integer "stocked"
    t.integer "spoilt"
    t.bigint "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_received_items_on_product_id"
  end

  create_table "store_admins", force: :cascade do |t|
    t.bigint "admin_id"
    t.bigint "store_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["admin_id"], name: "index_store_admins_on_admin_id"
    t.index ["store_id"], name: "index_store_admins_on_store_id"
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.bigint "merchant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["merchant_id"], name: "index_stores_on_merchant_id"
  end

  add_foreign_key "admins", "merchants"
  add_foreign_key "clerks", "admins"
  add_foreign_key "product_clerks", "clerks"
  add_foreign_key "product_clerks", "products"
  add_foreign_key "received_items", "products"
  add_foreign_key "store_admins", "admins"
  add_foreign_key "store_admins", "stores"
  add_foreign_key "stores", "merchants"
end
