import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["occurrenceField"]
  show(event) {
    if (event.currentTarget.checked) {
      this.occurrenceFieldTarget.classList.remove("d-none");
    } else {
      this.occurrenceFieldTarget.classList.add("d-none");
    }
  }
}
