class FurnitureOrder < ApplicationRecord
  belongs_to :furniture
  belongs_to :order
  belongs_to :paint
  belongs_to :wood
  belongs_to :size
end
