require 'rails_helper'

RSpec.describe Event, type: :model do
  describe "recurring events" do
    it "generates weekly recurring events" do
      event = Event.create(
        title: "Test Event",
        description: "Very detailed description for this test event",
        start_date: Date.new(2023, 12, 11),
        end_date: Date.new(2023, 12, 11),
        recurring: true,
        series_id: "NUM-#{Time.current.to_i}",
        frequency: Frequency.new(period: "Weekly")
      )

      expect(Event.where(series_id: event.series_id).count).to eq(9)

      dates = (0..8).map { |week| event.start_date + week.weeks }
      expect(Event.pluck(:start_date)).to eq(dates)
    end
  end
end
