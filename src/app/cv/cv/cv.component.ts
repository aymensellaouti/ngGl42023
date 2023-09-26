import { Component } from "@angular/core";
import { Cv } from "../model/cv";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(1, "sellaouti", "aymen", "as.jpg"),
    new Cv(2, "sellaouti", "skander", "cv.png"),
    new Cv(2, "Dhaouadi", "yassine", ""),
    new Cv(2, "Mourali", "sandra", "              "),
  ];
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    console.log(cv);
  }
}
