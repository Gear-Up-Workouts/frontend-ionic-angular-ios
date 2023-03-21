import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StatsData } from '../../data/stats-data';

@Component({
  selector: 'app-stats',
  templateUrl: 'stats.page.html',
  styleUrls: ['stats.page.scss'],
})
export class StatsPage {
  encouragingMessage: string = "You're doing amazing!";
  stats: StatsData = new StatsData({});

  constructor(private apiService: ApiService) {
    // Check if local user, then get stats
    this.apiService.hasLocalUser().then((bool) => {
      if (bool) {
        this.apiService.getLocalUser().then((user) => {
          this.apiService.getUserStats(user).then((stats) => {
            this.stats = stats;
          });
        });
      }
    });
  }
}
