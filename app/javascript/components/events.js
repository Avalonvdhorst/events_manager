import React from 'react'
import Event from './event'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {far} from "@fortawesome/free-regular-svg-icons"
import {fas} from "@fortawesome/free-solid-svg-icons"
import {fab} from "@fortawesome/free-brands-svg-icons"
import {library} from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-free"
library.add(far, fas, fab)

const Events = ({events}) => {
  return React.createElement(
    'div',
    {className: 'events-list'},
    React.createElement('div', {className: "heading"},
      React.createElement(
        'h1',
        {className: 'header mt-3 mb-5'},
        'Your upcoming events:',
      ),
      React.createElement('div', {className: 'create-event mt-3 mb-5'},
        React.createElement(
          'a',
          {className: 'new-btn', href: `/events/new`},
          React.createElement(FontAwesomeIcon, {icon: faPlus})
        ),
      )
    ),
    events.map(event => {
      return React.createElement(Event, {key: event.id, event: event})
    })
  )
};

export default Events
