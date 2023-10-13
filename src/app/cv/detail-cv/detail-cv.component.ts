import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
  cv!:Cv;
}
