class AddSeriesIdToEvent < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :series_id, :integer, null: true
  end
end
