import { Component, Input, OnInit } from '@angular/core';
import { WorkoutData } from '../../data/workout-data';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-workout-item-list',
  templateUrl: './workout-item-list.component.html',
  styleUrls: ['./workout-item-list.component.scss'],
})
export class WorkoutItemListComponent implements OnInit {
  @Input() workouts?: WorkoutData[];

  constructor() {}

  ngOnInit() {}
}
