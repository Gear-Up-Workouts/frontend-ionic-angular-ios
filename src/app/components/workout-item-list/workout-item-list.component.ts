import {Component, Input, OnInit} from '@angular/core';
import {WorkoutData} from "../../data/workout-data";

@Component({
  selector: 'app-workout-item-list',
  templateUrl: './workout-item-list.component.html',
  styleUrls: ['./workout-item-list.component.scss'],
})
export class WorkoutItemListComponent implements OnInit {

  workoutItems: WorkoutData[];

  constructor() {
    this.workoutItems = [
      new WorkoutData({bodyGroup: "arms", workoutName: "bicep curls", workoutWeight: 25, workoutReps: 10}),
      new WorkoutData({bodyGroup: "back", workoutName: "lat pull down", workoutWeight: 65, workoutReps: 8}),
      new WorkoutData({bodyGroup: "legs", workoutName: "squat", workoutWeight: 125, workoutReps: 4}),
      new WorkoutData({bodyGroup: "arms", workoutName: "tri pull downs", workoutWeight: 35, workoutReps: 10}),
      new WorkoutData({bodyGroup: "back", workoutName: "rows", workoutWeight: 55, workoutReps: 7}),
    ];
  }

  ngOnInit() {
  }

}
