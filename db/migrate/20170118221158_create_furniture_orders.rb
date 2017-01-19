class CreateFurnitureOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :furniture_orders do |t|
      t.references :furniture, index: true
      t.references :order, index: true

      t.references :paint, index: true
      t.references :wood, index: true
      t.references :size, index: true

      t.timestamps
    end
  end
end
