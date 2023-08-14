// import { Controller } from "@hotwired/stimulus"
// import React from "react";
// import ReactDom from "react-dom";
// import Events from "../components/events"

// // Connects to data-controller="react"
// export default class extends Controller {
//   connect() {
//     console.log("connected")
//     const events = JSON.parse(this.data.get("events"))

//     ReactDOM.render(
//       React.createElement(Events, {events: events}),
//       document.getElementById('root')
//     )
//     // const element = React.createElement;
//     // const root = document.getElementById("root")
//     // root.render(React.createElement(e(Events,  {events: events}), root))
//   }
// }

import { Controller } from "@hotwired/stimulus"
import React from "react";
import ReactDOM from "react-dom";

import Events from "../components/events"

export default class extends Controller {
  static values = {
    events: Array
  }

  connect() {
    const events = this.eventsValue

    ReactDOM.render(
      React.createElement(Events, {events: events}),
      document.getElementById('root')
    )
  }
}
