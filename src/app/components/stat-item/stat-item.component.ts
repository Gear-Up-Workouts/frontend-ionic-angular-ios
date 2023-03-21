import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-item',
  templateUrl: './stat-item.component.html',
  styleUrls: ['./stat-item.component.scss'],
})
export class StatItemComponent implements OnInit {
  @Input() stat: number = 0;
  @Input() icon: string = '';
  @Input() prefix: string = '';
  @Input() suffix: string = '';

  constructor() {}

  ngOnInit() {}
}
