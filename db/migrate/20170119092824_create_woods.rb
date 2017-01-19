class CreateWoods < ActiveRecord::Migration[5.0]
  def change
    create_table :woods do |t|
      t.string :kind

      t.timestamps
    end
  end
end
