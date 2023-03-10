import { Component } from '@angular/core';

@Component({
  selector: 'app-weekly-log',
  templateUrl: 'weekly-log.page.html',
  styleUrls: ['weekly-log.page.scss'],
})
export class WeeklyLogPage {
  date: Date;
  isSunday: boolean = true;
  encouragingMessage: string = "You're doing amazing!";
  stats:string[] = [];

  constructor() {
    this.date = new Date();
    // Log weight on Sundays
    if (this.date.getDay() === 0) {
      this.isSunday = true;
    }

    this.addFakeData();
  }




  addFakeData() {
    this.stats = ['a', 'b', 'c', 'd', 'e'];
  }
}
