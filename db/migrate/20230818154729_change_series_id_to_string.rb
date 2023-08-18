class ChangeSeriesIdToString < ActiveRecord::Migration[7.0]
  def change
    change_column :events, :series_id, :string
  end
end
