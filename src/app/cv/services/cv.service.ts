import { Cv } from "../model/cv";


export class CvService {
  cvs: Cv[] = [];
  constructor(){
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
}
