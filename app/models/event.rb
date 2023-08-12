class Event < ApplicationRecord
  validates :title, :description, :start_date, :end_date, presence: true
  validate :start_and_end_date_not_in_past

  def start_and_end_date_not_in_past
    errors.add(:start_date, "Can't be in the past") if start_date.present? && start_date < Date.today
    errors.add(:end_date, "Can't be in the past") if end_date.present? && end_date < Date.today
  end
end
