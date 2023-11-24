import { Component } from "@angular/core";

@Component({
  selector: "app-test-cd",
  templateUrl: "./test-cd.component.html",
  styleUrls: ["./test-cd.component.css"],
})
export class TestCDComponent {
  name = "test";
  add(x: number) {
    this.data = [...this.data, x];
  }
  data = [1, 2, 3, 4, 5, 6, 7, 8];
}
