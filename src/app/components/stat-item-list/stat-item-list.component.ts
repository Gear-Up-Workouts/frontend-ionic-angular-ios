import { Component, Input, OnInit } from '@angular/core';
import { StatsData } from '../../data/stats-data';

@Component({
  selector: 'app-stat-item-list',
  templateUrl: './stat-item-list.component.html',
  styleUrls: ['./stat-item-list.component.scss'],
})
export class StatItemListComponent implements OnInit {
  @Input() stats: StatsData = new StatsData({});
  constructor() {}

  ngOnInit() {}
}
