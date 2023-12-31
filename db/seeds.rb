# frozen_string_literal: true
Event.destroy_all

Event.create(title: 'Final project Factorial',
  description: 'Finish the project for the technical interview with Factorial',
  start_date: Date.new(2023, 8, 22),
  end_date: Date.new(2023, 8, 22))

Event.create(title: 'Housewarming',
  description: 'Housewarming of Dianas new flat in Gracia',
  start_date: Date.new(2023, 8, 29),
  end_date: Date.new(2023, 8, 29))

Event.create(title: 'Birthday',
  description: 'My own 35th birthday party, a picnic on the beach',
  start_date: Date.new(2023, 9, 2),
  end_date: Date.new(2023, 9, 2))
