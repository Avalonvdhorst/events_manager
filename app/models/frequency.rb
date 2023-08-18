class Frequency < ApplicationRecord
  belongs_to :event

  PERIODS = ['Weekly', 'Monthly', 'Yearly']
end
