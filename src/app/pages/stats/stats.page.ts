import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: 'stats.page.html',
  styleUrls: ['stats.page.scss'],
})
export class StatsPage {
  date: Date;
  isSunday: boolean = true;
  encouragingMessage: string = "You're doing amazing!";
  stats: string[] = [];

  constructor() {
    this.date = new Date();

    this.addFakeData();
  }

  addFakeData() {
    this.stats = ['a', 'b', 'c', 'd', 'e'];
  }
}
