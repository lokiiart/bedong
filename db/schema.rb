# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160724122737) do

  create_table "babies", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.string   "avatar"
    t.integer  "price"
    t.integer  "star_id"
    t.string   "banner"
    t.string   "intro"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "commets", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "customer_name"
    t.string   "customer_avatar"
    t.string   "star_name"
    t.integer  "virtual_time"
    t.text     "content",         limit: 65535
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  create_table "fools", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "ip"
    t.string   "page"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "phone"
    t.string   "customer"
    t.integer  "price"
    t.string   "payment"
    t.string   "address"
    t.boolean  "payoff"
    t.string   "flow"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "baby"
  end

  create_table "stars", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.string   "avatar"
    t.text     "summart",     limit: 65535
    t.integer  "favorite"
    t.float    "score",       limit: 24
    t.string   "intro_image"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "tags"
    t.string   "tagid"
    t.integer  "baby_id"
    t.index ["baby_id"], name: "index_stars_on_baby_id", using: :btree
  end

  create_table "students", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "title"
    t.integer  "stock"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "girl"
    t.string   "ip"
  end

  create_table "tagmaps", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "star_id"
    t.integer  "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["star_id"], name: "index_tagmaps_on_star_id", using: :btree
    t.index ["tag_id"], name: "index_tagmaps_on_tag_id", using: :btree
  end

  create_table "tags", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "tagname"
    t.integer  "num"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "stars", "babies"
  add_foreign_key "tagmaps", "stars"
  add_foreign_key "tagmaps", "tags"
end
