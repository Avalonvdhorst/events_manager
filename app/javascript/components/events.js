import React from 'react'
import Event from './event'

const Events = ({events}) => {
  return React.createElement(
    'div',
    {className: 'events-list'},

    // Map over events and render Event component
    events.map(event => {
      return React.createElement(Event, {key: event.id, event: event})
    })
  )
};

export default Events
