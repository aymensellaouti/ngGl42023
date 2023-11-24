import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-list-elements",
  templateUrl: "./list-elements.component.html",
  styleUrls: ["./list-elements.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListElementsComponent {
  @Input() data!: number[];
  process(x: number) {
    console.log(x);
    return x * x;
  }
}
