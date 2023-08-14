import React from 'react'

const Event = ({event}) => React.createElement(
  'div',
  {className: 'event'},
  React.createElement('h2', null, event.title),
  React.createElement('p', null, event.description)
);

export default Event
