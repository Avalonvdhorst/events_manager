class RemoveTimesFromFrequency < ActiveRecord::Migration[7.0]
  def change
    remove_column :frequencies, :times, :integer
  end
end
