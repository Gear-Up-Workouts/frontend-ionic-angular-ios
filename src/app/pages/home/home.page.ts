import { Component } from '@angular/core';
import {interval} from "rxjs";
import {WorkoutData} from "../../data/workout-data";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  date: Date;
  day: string = '';
  dailyMessage:string;

  workoutItems:WorkoutData[];

  constructor() {

    // Fake data
    this.workoutItems = [
      new WorkoutData({bodyGroup: "arms", workoutName: "bicep curls", workoutWeight: 25, workoutReps: 10}),
      new WorkoutData({bodyGroup: "back", workoutName: "lat pull down", workoutWeight: 65, workoutReps: 8}),
      new WorkoutData({bodyGroup: "legs", workoutName: "squat", workoutWeight: 125, workoutReps: 4}),
      new WorkoutData({bodyGroup: "arms", workoutName: "tri pull downs", workoutWeight: 35, workoutReps: 10}),
      new WorkoutData({bodyGroup: "back", workoutName: "rows", workoutWeight: 55, workoutReps: 7}),
    ];

    this.date = new Date();
    this.updateDay();
    this.setAutoUpdateDate();

    this.dailyMessage = "Pump some iron!";
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
}
