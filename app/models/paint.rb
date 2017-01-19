class Paint < ApplicationRecord
  has_many :furniture_orders
  belongs_to :paint_type
  belongs_to :paint_colour
end
