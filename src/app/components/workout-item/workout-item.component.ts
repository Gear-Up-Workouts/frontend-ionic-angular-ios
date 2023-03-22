import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkoutData } from '../../data/workout-data';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.scss'],
})
export class WorkoutItemComponent implements OnInit {
  @Output() rateWorkoutEventComponent = new EventEmitter<WorkoutData>();

  @Input()
  workout?: WorkoutData;

  constructor() {}

  activateWorkoutRatingModalComponent() {
    this.rateWorkoutEventComponent.emit(this.workout);
  }

  ngOnInit() {}
}
