class CreatePaintTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :paint_types do |t|
      t.string :kind

      t.timestamps
    end
  end
end
