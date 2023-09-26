import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Cv } from "../model/cv";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  // Before input item()
  // After input item(cv: Cv)
  @Input({
    required: true,
  })
  cv: Cv | null = null;
  @Output()
  selectCv = new EventEmitter<Cv>();

  onSelectCv() {
    if (this.cv) this.selectCv.emit(this.cv);
  }
}
