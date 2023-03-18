import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { WorkoutSetData } from '../../data/workout-set-data';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  date: Date;
  day: string = '';
  dailyMessage: string = 'Rise and Grind!';
  workoutSet: WorkoutSetData = new WorkoutSetData({ workouts: [] });
  hasOnboarded: boolean = false;
  username: string = '';
  hasGymAccess: boolean = false;
  userProficiency: number = 1;

  constructor(
    private apiService: ApiService,
    private toastController: ToastController
  ) {
    // this.apiService.clearUser();

    this.addFakeData();

    this.date = new Date();
    this.updateDay();
    this.setAutoUpdateDate();

    // Check if user exists and add welcome toast
    this.apiService.hasUser().then((bool) => {
      this.hasOnboarded = bool;

      if (bool) {
        this.apiService.getUser('username').then((user) => {
          this.presentToast(user);
        });
      }
    });
  }

  async presentToast(username: string) {
    const toast = await this.toastController.create({
      message: 'Welcome back ' + username + '!',
      duration: 1500,
      position: 'top',
      icon: 'happy-outline',
      cssClass: 'text-center',
    });

    await toast.present();
  }

  setOnboarding() {
    this.hasOnboarded = true;

    // Set user data
    this.apiService.setUser('username', this.username);
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
