import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weekly-stat-item-list',
  templateUrl: './weekly-stat-item-list.component.html',
  styleUrls: ['./weekly-stat-item-list.component.scss'],
})
export class WeeklyStatItemListComponent  implements OnInit {

  @Input() stats:string[] = [];
  constructor() { }

  ngOnInit() {}

}
