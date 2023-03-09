import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-workout-item-list',
  templateUrl: './workout-item-list.component.html',
  styleUrls: ['./workout-item-list.component.scss'],
})
export class WorkoutItemListComponent implements OnInit {

  workoutItems;

  constructor() {
    this.workoutItems = [
      {bodyGroup: "arms", workoutName: "bicep curls", workoutWeight: 25, workoutReps: 10},
      {bodyGroup: "back", workoutName: "lat pull down", workoutWeight: 65, workoutReps: 8},
      {bodyGroup: "legs", workoutName: "squat", workoutWeight: 125, workoutReps: 4},
      {bodyGroup: "arms", workoutName: "tri pull downs", workoutWeight: 35, workoutReps: 10},
      {bodyGroup: "back", workoutName: "rows", workoutWeight: 55, workoutReps: 7},
    ];
  }

  ngOnInit() {
  }

}
