import { Controller } from "@hotwired/stimulus"
import React from "react";
import ReactDOM from "react-dom";
import EventsContainer from "../components/eventsContainer"

export default class extends Controller {
  static targets = ["day", "events"]

  load(event) {
    const fullDate = event.currentTarget.dataset.fullDate
    this.dayTargets.forEach((day => {
      day.classList.remove("current-day-marked")
    }))
    event.currentTarget.classList.add("current-day-marked")

    const url = `/events?date=${fullDate}`
    fetch(url, {headers: {"Accept": "text/plain"}})
      .then(response => response.text())
      .then((data) => {
        const newEvents = JSON.parse(data)
        const eventsArray = Array.isArray(newEvents) ? newEvents : [newEvents]
        ReactDOM.render(
          React.createElement(EventsContainer, {events: eventsArray}),
          document.getElementById('root')
        )
      })
  }
}
