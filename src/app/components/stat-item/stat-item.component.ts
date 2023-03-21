import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-item',
  templateUrl: './stat-item.component.html',
  styleUrls: ['./stat-item.component.scss'],
})
export class StatItemComponent implements OnInit {
  @Input() stat?: string;

  constructor() {}

  ngOnInit() {}
}
