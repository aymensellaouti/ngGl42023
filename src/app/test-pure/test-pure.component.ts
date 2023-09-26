import { Component, Inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { loggerToken } from '../injection tokens/logger.token';

@Component({
  selector: 'app-test-pure',
  templateUrl: './test-pure.component.html',
  styleUrls: ['./test-pure.component.css'],
})
export class TestPureComponent {
  elements: number[] = [];
  message = ''
  constructor(
    @Inject(loggerToken) private loggerService: LoggerService
  ) {
    this.loggerService.logger('cc');
    for (let i = 0; i < 30; i++) {
      this.elements[i] = this.getRandomValBetween(20, 30);
    }
  }
  private getRandomValBetween(min: number, max: number): number {
    return Math.ceil(Math.random() * min) + (max - min);
  }


}
