import React from 'react'

const Link = ({ href, icon, confirmMessage, method, className }) => {
  const props = { className: className, href: href }
  if (method === "delete") {
    props["data-turbo-confirm"] = confirmMessage
    props["data-turbo-method"] = method
  }
  return React.createElement(
    "a", props, icon
  )
}

export default Link;
