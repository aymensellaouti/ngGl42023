import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import {
  EMPTY,
  Observable,
  catchError,
  debounceTime,
  filter,
  map,
  of,
  take,
  tap,
} from "rxjs";
import { Cv } from "../../cv/model/cv";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-observable",
  templateUrl: "./observable.component.html",
  styleUrls: ["./observable.component.css"],
})
export class ObservableComponent {
  myObservable: Observable<number>;
  form!: FormGroup;
  toastr = inject(ToastrService);
  cvs$: Observable<Cv[]>;
  http = inject(HttpClient);
  constructor() {
    this.cvs$ = this.http.get<Cv[]>("https://apilb.tridevs.net/api/personnes");
    this.form = new FormGroup({ name: new FormControl() });
    /* 5 4 3 2 1 */
    this.myObservable = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
      this.form.controls["name"].valueChanges
        .pipe(debounceTime(500))
        .subscribe((content) => {
          this.http
            .get("https://apilb.tridevs.net/api/personnes")
            .subscribe((data) => this.http.post("", data).subscribe());
        });
    });

    setTimeout(() => {
      this.myObservable.subscribe((val) => {
        console.log(val);
      });
    }, 3000);
    /* 5 4 3 2 1 */
    this.myObservable.pipe(
      map((valeur) => valeur * 3),
      filter((value) => !(value % 2)),
      take(1),
      tap((myData) => {
        this.toastr.info("" + myData);
      }),
      catchError((e) => EMPTY)
    );
  }
  show() {
    console.log("show");
  }
}
