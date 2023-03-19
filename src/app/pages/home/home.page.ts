import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { WorkoutData } from '../../data/workout-data';
import { ApiService } from '../../services/api.service';
import { WorkoutSetData } from '../../data/workout-set-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  date: Date;
  day: string = '';
  dailyMessage: string = 'Rise and Grind!';
  workoutSet: WorkoutSetData = new WorkoutSetData({workouts : []});

  constructor(private apiService: ApiService) {
    //test api calls
    //this.apiService.test();


    this.addFakeData();

    this.date = new Date();
    this.updateDay();
    this.setAutoUpdateDate();

    // this.apiService.test().then((data) => {
    //   this.dailyMessage = data;
    //   console.log(data);
    // });
  }

  updateDay() {
    this.date = new Date();
    this.day = this.date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  }

  setAutoUpdateDate() {
    const secondCounter = interval(60 * 1000);
    secondCounter.subscribe(() => {
      this.updateDay();
    });
  }

  addFakeData() {
    // Fake data
    this.workoutSet = new WorkoutSetData({
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
    });
  }
}
