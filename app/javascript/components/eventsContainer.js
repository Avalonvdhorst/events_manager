import React, { useState, useEffect } from 'react'
import Events from './events'

const EventsContainer = ({events}) => {

  const [localEvents, setLocalEvents] = useState(events)
  console.log(events)
  console.log(localEvents)

  useEffect(() => {
    if (events !== localEvents) {
      setLocalEvents(events)
    }
  }, [events])

  return React.createElement(
    Events,
    {events: localEvents},
  )

}

export default EventsContainer
