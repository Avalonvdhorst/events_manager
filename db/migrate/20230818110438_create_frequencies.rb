class CreateFrequencies < ActiveRecord::Migration[7.0]
  def change
    create_table :frequencies do |t|
      t.integer :times
      t.string :period
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
