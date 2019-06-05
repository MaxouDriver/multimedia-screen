import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.sass']
})
export class ClockComponent implements OnInit {
  date: Date = new Date();
  suscription;

  constructor() {
    this.suscription = timer(0,1000);
  }

  ngOnInit() {
    this.suscription.subscribe(() => {
      this.date = new Date();
    });
  }
  ngOnDestroy(){
    this.suscription.unsubscribe();
  }
}