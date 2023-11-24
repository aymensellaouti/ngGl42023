import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../../model/user.model";

@Component({
  selector: "app-push",
  templateUrl: "./push.component.html",
  styleUrls: ["./push.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushComponent {
  @Input() user!: User;
  @Input() name = "";
}
