import { Component } from '@angular/core';
import { WorkoutSetData } from '../../data/workout-set-data';

@Component({
  selector: 'app-past-workouts',
  templateUrl: 'past-workouts.page.html',
  styleUrls: ['past-workouts.page.scss'],
})
export class PastWorkoutsPage {
  pastWorkouts: WorkoutSetData[] = [];
  todayDate: string = '';
  yesterdayDate: string = '';

  constructor() {
    this.updateDay();

    this.addFakeData();

    this.pastWorkouts.sort((a, b) => {
      // @ts-ignore
      return b.date - a.date;
    });
  }

  updateDay() {
    let date = new Date();
    this.todayDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

    date.setDate(date.getDate() - 1);

    this.yesterdayDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
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
      new WorkoutSetData(
        {
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
        },
        new Date('March 8, 2023 01:03:00')
      ),
      new WorkoutSetData(
        {
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
        },
        new Date('February 18, 2021 01:03:00')
      ),
      new WorkoutSetData(
        {
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
        },
        new Date('February 19, 2021 14:38:00')
      ),
      new WorkoutSetData(
        {
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
            {
              bodyGroup: 'legs',
              workoutName: 'squat',
              workoutWeight: 125,
              workoutReps: 4,
            },
            {
              bodyGroup: 'arms',
              workoutName: 'tri pull downs',
              workoutWeight: 35,
              workoutReps: 10,
            },
            {
              bodyGroup: 'back',
              workoutName: 'rows',
              workoutWeight: 55,
              workoutReps: 7,
            },
          ],
        },
        new Date('February 20, 2021 23:11:00')
      ),
    ];
  }
}
