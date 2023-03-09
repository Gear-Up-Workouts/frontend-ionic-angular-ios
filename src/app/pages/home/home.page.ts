import { Component } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  date: Date;
  day: string = '';
  dailyMessage:string;

  constructor() {
    this.date = new Date();
    this.updateDay();
    this.setAutoUpdateDate();

    this.dailyMessage = "Pump some iron!!";
  }

  updateDay() {
    this.date = new Date();
    this.day = this.date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  }

  setAutoUpdateDate() {
    const secondCounter = interval(60 * 1000);
    secondCounter.subscribe(() => {
      this.updateDay();
    });
  }
}
