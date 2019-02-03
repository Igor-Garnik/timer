import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {
  counter: number = 0;
  coundownTimerRef: any = null;

  @Input() init: number = 0;
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.cleanTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.coundownTimerRef = setTimeout(() => {
      this.counter -= 1;
      this.processCount();
    }, 1000);
  }

  processCount() {
    this.onDecrease.emit(this.counter);
    this.counter == 0 ? this.onComplete.emit() : this.doCountdown();
  }

  private cleanTimeout(): void {
    this.coundownTimerRef && clearTimeout(this.coundownTimerRef);
    this.coundownTimerRef = null;
  }

  ngOnDestroy(): void {
    this.cleanTimeout();
  }

  ngOnChanges(changes): void {
    console.log(`init value update to :  ${changes.init.currentValue}`);
    this.startCountdown();
  }
}
