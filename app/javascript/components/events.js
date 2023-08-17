import React from 'react'
import Event from './event'

const Events = ({events}) => {
  return React.createElement(
    'div',
    {className: 'events'},
    events.map(event => {
      return React.createElement(Event, {key: event.id, event: event})
    })
  )
};

export default Events
