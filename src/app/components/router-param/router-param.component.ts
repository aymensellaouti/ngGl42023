import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-param',
  templateUrl: './router-param.component.html',
  styleUrls: ['./router-param.component.css'],
})
export class RouterParamComponent implements OnInit {
  // @Input('quelquechose') quelquechose = '';
  acr = inject(ActivatedRoute);
  constructor() {
    console.log(this.acr.snapshot.params['quelquechose']);
  }
  ngOnInit() {
    // console.log({ fromInput: this.quelquechose });
  }
}
