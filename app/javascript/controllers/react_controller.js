import { Controller } from "@hotwired/stimulus"
import React from "react";
import ReactDOM from "react-dom";

import EventsContainer from "../components/eventsContainer"

export default class extends Controller {
  static values = {
    events: Array,
    monthly: Array
  }

  connect() {
    ReactDOM.render(
      React.createElement(EventsContainer, {events: this.eventsValue, monthlyEvents: this.monthlyValue}),
      document.getElementById('root')
    )
  }
}
