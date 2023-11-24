import { Component, Input } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input({ required: true }) cv!: Cv;
  constructor() {}
}
