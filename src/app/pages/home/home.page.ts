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

  // User onboarding
  hasOnboarded: boolean = true;
  username: string = '';
  hasGymAccess: string = 'false';
  userProficiency: string = 'intermediate';
  userGoal: string = '';

  constructor(
    private apiService: ApiService,
    private toastController: ToastController
  ) {
    // Test call to backend
    // this.apiService.helloWorld();

    // Add fake data
    this.addFakeData();

    this.date = new Date();
    this.updateDay();
    this.setAutoUpdateDate();

    // Check if user exists and add welcome toast
    this.apiService.hasLocalUser().then((bool) => {
      if (bool) {
        this.apiService.getLocalUser('username').then((user) => {
          this.apiService.hasOnboarded(user).then((bool) => {
            if (bool) {
              this.hasOnboarded = true;
              this.welcomeBackUser(user);
            } else {
              this.hasOnboarded = false;
            }
          });
        });
      }
    });
  }

  async welcomeBackUser(username: string) {
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
    // Set local user data
    this.apiService.setLocalUser('username', this.username);

    this.apiService.createNewUser(this.username).then((ignore) => {
      // Set gym access
      this.apiService
        .setGymAccess(this.username, this.hasGymAccess)
        .then((ignore) => {
          // Set proficiency
          this.apiService
            .setProficiency(this.username, this.userProficiency)
            .then((ignore) => {
              // Set goal
              this.apiService
                .setGoal(this.username, this.userGoal)
                .then((ignore) => {
                  // Check onboarded
                  this.apiService.hasOnboarded(this.username).then((bool) => {
                    if (bool) {
                      this.hasOnboarded = true;
                    } else {
                      this.hasOnboarded = false;
                      console.log('An error has occurred with onboarding.');
                    }
                  });
                });
            });
        });
    });
  }

  logOut() {
    this.hasOnboarded = false;

    this.apiService.clearLocalUser();
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
