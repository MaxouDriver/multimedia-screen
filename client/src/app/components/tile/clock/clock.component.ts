import { Component, AfterViewInit } from '@angular/core';
import { timer } from 'rxjs';
import {ClockService} from '../../../services/clock/clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.sass']
})
export class ClockComponent implements AfterViewInit {
  date: Date = new Date();
  suscription;

  constructor(private clockService: ClockService) {}

  ngAfterViewInit() {
    this.suscription = this.clockService.getCurrentTime().subscribe(time => {
      this.date = time;
    });
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }
}