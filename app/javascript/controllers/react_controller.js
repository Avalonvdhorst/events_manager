import { Controller } from "@hotwired/stimulus"
import React from "react";
import ReactDOM from "react-dom";

import EventsContainer from "../components/eventsContainer"

export default class extends Controller {
  static values = {
    events: Array
  }

  connect() {
    const events = this.eventsValue

    ReactDOM.render(
      React.createElement(EventsContainer, {events: events}),
      document.getElementById('root')
    )
  }
}
