import { Component, Input, OnInit } from '@angular/core';
import { WorkoutData } from '../../data/workout-data';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.scss'],
})
export class WorkoutItemComponent implements OnInit {
  @Input()
  workout?: WorkoutData;

  constructor() {}

  ngOnInit() {}
}
