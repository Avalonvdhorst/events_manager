class ChangeDescriptionToString < ActiveRecord::Migration[7.0]
  def change
    change_column :events, :description, :string
  end
end
