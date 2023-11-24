import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Observable, distinctUntilChanged, tap } from "rxjs";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  nb = 0;
  cv$: Observable<Cv>;
  constructor(private cvService: CvService) {
    this.cv$ = this.cvService.selectCv$.pipe(
      distinctUntilChanged(),
      tap(() => this.nb++)
    );
  }
  cvs: Cv[] = [
    new Cv(1, "sellaouti", "aymen", "as.jpg"),
    new Cv(2, "sellaouti", "skander", "cv.png"),
    new Cv(2, "Dhaouadi", "yassine", ""),
    new Cv(2, "Mourali", "sandra", "              "),
  ];
}
