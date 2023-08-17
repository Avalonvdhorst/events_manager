import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

export default class extends Controller {
  static targets = [ "startDate", "endDate" ]

  connect() {
    flatpickr(this.startDateTarget, {})
    flatpickr(this.endDateTarget, {})
  }
}
