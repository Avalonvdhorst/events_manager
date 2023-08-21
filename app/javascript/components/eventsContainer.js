import React from 'react'
import Events from './events'
import Link from './link'
import Header from './header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {far} from "@fortawesome/free-regular-svg-icons"
import {fas} from "@fortawesome/free-solid-svg-icons"
import {fab} from "@fortawesome/free-brands-svg-icons"
import {library} from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-free"
library.add(far, fas, fab)

const EventsContainer = ({events, monthlyEvents}) => {

  return React.createElement(
    'div',
    {className: 'events-list'},
    React.createElement('div', {className: "heading"},
      React.createElement(
        Header, {tag: 'h1', className: 'header mt-3 mb-4', text: 'Your upcoming events:'}
      ),
      React.createElement('div', {className: 'create-event mt-3 mb-4'},
        React.createElement(Link, {
          href: '/events/new',
          className: 'new-btn',
          icon: React.createElement(FontAwesomeIcon, {icon: faPlus})
        })
      )
    ),
    React.createElement(
      Events,
      {events: events},
    ),
    React.createElement(
      'div',
      {className: 'monthly-events'},
        React.createElement(
          Header, {
            tag: 'h2', className: 'header my-4', text: 'All events this month:'
          }
        ),
        React.createElement(
          Events,
          {events: monthlyEvents},
        ),
      ),
    )

}

export default EventsContainer
