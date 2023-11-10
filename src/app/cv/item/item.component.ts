import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";

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
  constructor(private cvService: CvService) {}
  onSelectCv() {
    if (this.cv) this.cvService.selectCv(this.cv);
  }
}
