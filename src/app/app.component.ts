import {
  ApplicationRef,
  Component,
  ElementRef,
  NgZone,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { User } from "./model/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("bigDiv", { static: true }) div!: ElementRef;
  test() {
    console.log("cc");
  }
  name = "ngGl42023";
  constructor(
    public ar: ApplicationRef,
    private renderer: Renderer2,
    private zone: NgZone
  ) {}

  user: User = { name: "test", age: 10 };

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.renderer.listen(this.div.nativeElement, "mousemove", () =>
        this.test()
      );
    });
  }
}
