import { Component } from '@angular/core';
import { WorkoutSetData } from '../../data/workout-set-data';

@Component({
  selector: 'app-past-workouts',
  templateUrl: 'past-workouts.page.html',
  styleUrls: ['past-workouts.page.scss'],
})
export class PastWorkoutsPage {
  pastWorkouts: WorkoutSetData[];

  constructor() {
    this.pastWorkouts = [];
    this.addFakeData();
  }

  addFakeData() {
    // Fake data
    this.pastWorkouts = [
      new WorkoutSetData({
        workouts: [
          {
            bodyGroup: 'arms',
            workoutName: 'bicep curls',
            workoutWeight: 25,
            workoutReps: 10,
          },
          {
            bodyGroup: 'back',
            workoutName: 'lat pull down',
            workoutWeight: 65,
            workoutReps: 8,
          },
        ],
      }),
      new WorkoutSetData({
        workouts: [
          {
            bodyGroup: 'arms',
            workoutName: 'bicep curls',
            workoutWeight: 25,
            workoutReps: 10,
          },
          {
            bodyGroup: 'back',
            workoutName: 'lat pull down',
            workoutWeight: 65,
            workoutReps: 8,
          },
        ],
      }),
    ];
  }
}
