import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Extremely Sophisticated Angular App";

  count = 0;

  incrementValue() {
    this.count++;
  }
}
