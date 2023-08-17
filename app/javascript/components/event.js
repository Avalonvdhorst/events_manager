import React from 'react'
import Link from './link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import {far} from "@fortawesome/free-regular-svg-icons"
import {fas} from "@fortawesome/free-solid-svg-icons"
import {fab} from "@fortawesome/free-brands-svg-icons"
import {library} from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-free"
library.add(far, fas, fab)

const Event = ({event}) => {
  const date = new Date(event.start_date);
  const weekday = date.toLocaleString('en-US', {weekday: 'short'}).toUpperCase();;
  const day = date.getDate();

  const endDate = new Date(event.end_date)
  const endDay = endDate.getDate()
  const endMonth = endDate.toLocaleString('en-US', { month: 'short' });

  return React.createElement(
    'div',
    {className: 'event-card'},
    React.createElement('div', {className: 'start-day'},
      React.createElement('div', null,
        React.createElement(
          'div', {key: 'weekday', className: 'weekday'}, weekday
        ),
        React.createElement(
          'div', {key: 'day', className: 'month-day'}, day
        )
      )
    ),

    React.createElement('div', {className: 'event-content'},
      React.createElement('h3', {className: 'event-title'}, event.title),
      React.createElement('p', {className: 'event-descr'}, event.description),
      React.createElement('p', {className: 'end-date'}, `- Ends on: ${endMonth} ${endDay}`)
    ),

    React.createElement( 'div', {className: 'actions'},
      React.createElement(Link, {
        href: `/events/${event.id}/edit`,
        className: 'edit-btn',
        icon: React.createElement(FontAwesomeIcon, {icon: faPencilAlt})
      }),
      React.createElement(Link, {
        href: `/events/${event.id}`,
        className: 'delete-btn',
        icon: React.createElement(FontAwesomeIcon, {icon: faTrash}),
        method: "delete",
        confirmMessage: "Are you sure?"
      })
    )
  )
};

export default Event
