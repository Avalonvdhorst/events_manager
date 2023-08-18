class AddRecurrenceBooleanToEvent < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :recurring, :boolean, default: false
  end
end
