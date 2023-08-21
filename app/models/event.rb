class Event < ApplicationRecord
  has_one :frequency, dependent: :destroy
  accepts_nested_attributes_for :frequency, allow_destroy: true

  validates :title, :description, :start_date, :end_date, presence: true
  validate :start_and_end_date_not_in_past

  after_create :generate_recurring_events, if: :recurring?

  def start_and_end_date_not_in_past
    errors.add(:start_date, "Can't be in the past") if start_date.present? && start_date < Date.today
    errors.add(:end_date, "Can't be in the past") if end_date.present? && end_date < Date.today
  end

  def date_range
    (start_date..end_date).to_a
  end

  def generate_recurring_events
    case frequency.period
    when "Weekly"
      set_dates_recurring_events(8, 7.days)
    when "Monthly"
      set_dates_recurring_events(12, 1.month)
    when "Yearly"
      set_dates_recurring_events(5, 1.year)
    end
  end

  def set_dates_recurring_events(num, increment)
    start_date = self.start_date
    end_date = self.end_date

    num.times do
      new_start_date = start_date + increment
      new_end_date = end_date + increment
      create_recurring_event(new_start_date, new_end_date)
      start_date = new_start_date
      end_date = new_end_date
    end
  end

  def create_recurring_event(start_date, end_date)
    self.class.create(
      title: title,
      description: description,
      start_date: start_date,
      end_date: end_date,
      series_id: series_id
    )
  end
end
