import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css'],
})
export class TestformComponent {
  processForm(monformulaire: NgForm) {
    console.log(monformulaire);

  }
}
