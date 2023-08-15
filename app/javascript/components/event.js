import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
// import {far} from "@fortawesome/free-regular-svg-icons"
// import {fas} from "@fortawesome/free-solid-svg-icons"
// import {fab} from "@fortawesome/free-brands-svg-icons"
// import {library} from "@fortawesome/fontawesome-svg-core"
// import "@fortawesome/fontawesome-free"
// library.add(far, fas, fab)

const Event = ({event}) => {
  const date = new Date(event.start_date); // use start_date

  const weekday = date.toLocaleString('en-US', {weekday: 'short'}).toUpperCase();;

  const day = date.getDate();

  return React.createElement(
    'div',
    {className: 'event-card'},
    React.createElement('div', {className: 'start-day'},
      React.createElement(
        'div', {key: 'weekday', className: 'weekday'}, weekday
      ),
      React.createElement(
        'div', {key: 'day', className: 'month-day'}, day
      )
    ),

    React.createElement('div', {className: 'event-content'},
      React.createElement('h2', {className: 'event-title'}, event.title),
      React.createElement('p', {className: 'event-descr'}, event.description)
    ),

    React.createElement(
      'div',
      {className: 'actions'},
      React.createElement(
        'a', {className: 'edit-btn', href: `/events/${event.id}/edit`},
        React.createElement(FontAwesomeIcon, {icon: faPencilAlt})
      ),
      React.createElement(
        'a', {className: 'delete-btn', href: `/events/${event.id}/delete`},
        React.createElement(FontAwesomeIcon, {icon: faTrash})
      )
    )
  )
};

export default Event
