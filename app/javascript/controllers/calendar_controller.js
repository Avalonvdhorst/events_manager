import { Controller } from "@hotwired/stimulus"
import React from "react";
import ReactDOM from "react-dom";
import EventsContainer from "../components/eventsContainer"

export default class extends Controller {
  static targets = ["day"]

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
        const { events, monthly } = JSON.parse(data)
        const eventsArray = Array.isArray(events) ? events : [events]
        const monthlyArray = Array.isArray(monthly) ? monthly : [monthly]
        this.renderEvents(eventsArray, monthlyArray)
      })
  }

  renderEvents(eventsArray, monthlyArray) {
    ReactDOM.render(
      React.createElement(EventsContainer, {events: eventsArray, monthlyEvents: monthlyArray}),
      document.getElementById('root')
    )
  }
}
