import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, map } from "rxjs";
import { Cv } from "../../cv/model/cv";

@Component({
  selector: "app-observable",
  templateUrl: "./observable.component.html",
  styleUrls: ["./observable.component.css"],
})
export class ObservableComponent {
  myObservable: Observable<number>;
  toastr = inject(ToastrService);
  cvs$: Observable<Cv[]>;
  http = inject(HttpClient);
  constructor() {
    this.cvs$ = this.http.get<Cv[]>("https://apilb.tridevs.net/api/personnes");
    this.myObservable = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    setTimeout(() => {
      this.myObservable.subscribe((val) => {
        console.log(val);
      });
    }, 3000);
    this.myObservable.pipe(map((valeur) => valeur * 3)).subscribe({
      next: (myData) => {
        this.toastr.info("" + myData);
      },
      complete: () => {
        this.toastr.warning("Fin du flux");
      },
      error: (e) => {},
    });
  }
}
