import React from 'react'

const Header = ({ tag, className, text }) => {
  const props = {
    className: className
  }

  return React.createElement(
    tag, props, text
  )
}

export default Header;
