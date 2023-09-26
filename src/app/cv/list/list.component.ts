import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Cv } from "../model/cv";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() cvs: Cv[] = [];
  isHidden = true;
  @Output()
  forwardCv = new EventEmitter();
  constructor() {}
  showHide() {
    this.isHidden = !this.isHidden;
  }

  onSelectCv(cv: Cv): void {
    console.log(cv);

    this.forwardCv.emit(cv);
  }
}
