import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cv/cv/cv.component";
import { TestPureComponent } from "./test-pure/test-pure.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cv", component: CvComponent },
  { path: "pipe", component: TestPureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
