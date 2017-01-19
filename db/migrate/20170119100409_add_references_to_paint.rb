class AddReferencesToPaint < ActiveRecord::Migration[5.0]
  def change
    add_reference :paints, :paint_type, index: true
    add_reference :paints, :paint_colour, index: true
  end
end
