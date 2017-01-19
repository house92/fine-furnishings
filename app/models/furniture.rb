class Furniture < ApplicationRecord
  has_many :furniture_orders
  has_many :orders, through: :furniture_orders
end
