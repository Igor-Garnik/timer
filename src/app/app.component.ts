import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  couterProgress: number = 0;
  totalCountdown: number = 5;

  constructor() { }

  updateProgress($event): void {
    this.couterProgress = (this.totalCountdown - $event) / this.totalCountdown * 100;
  }

  countdownFinished(): void {
    console.log('conutdown finished')
  }
}
