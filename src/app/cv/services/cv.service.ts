import { Subject } from "rxjs";
import { Cv } from "../model/cv";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CvService {
  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
  cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, "sellaouti", "aymen", "as.jpg"),
      new Cv(2, "sellaouti", "skander", "cv.png"),
      new Cv(2, "Dhaouadi", "yassine", ""),
      new Cv(2, "Mourali", "sandra", "              "),
    ];
  }
  getCvs() {
    return this.cvs;
  }

  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
