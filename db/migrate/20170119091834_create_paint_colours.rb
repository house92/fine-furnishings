class CreatePaintColours < ActiveRecord::Migration[5.0]
  def change
    create_table :paint_colours do |t|
      t.string :colour

      t.timestamps
    end
  end
end
