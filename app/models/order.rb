class Order < ApplicationRecord
  has_many :furniture_orders
  has_many :furnitures, through: :furniture_orders
  belongs_to :user
end
