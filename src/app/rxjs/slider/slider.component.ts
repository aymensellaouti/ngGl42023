import { Component, Input } from "@angular/core";
import { Observable, map, timer } from "rxjs";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent {
  @Input() time = 1000;
  @Input() size = 150;
  @Input() images: string[] = [
    "404.png",
    "as.jpg",
    "cv.png",
    "rotating_card_profile.png",
    "rotating_card_profile2.png",
    "rotating_card_profile3.png",
  ];

  slider$: Observable<string>;
  constructor() {
    this.slider$ = timer(0, this.time)
      // 0 1 2 3 4 5 6
      .pipe(map((index) => this.images[index % this.images.length]));
    //
  }
}
