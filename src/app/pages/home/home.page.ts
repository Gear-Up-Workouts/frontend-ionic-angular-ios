import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { WorkoutSetData } from '../../data/workout-set-data';
import { ToastController } from '@ionic/angular';
import { AltWorkoutSetData } from '../../data/alt-workout-set-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  date: Date;
  day: string = '';
  dailyMessage: string = 'Rise and Grind!';
  workoutSet: WorkoutSetData = new WorkoutSetData({ exercises: [] });
  altWorkoutSet: AltWorkoutSetData = new AltWorkoutSetData({
    LiveWorkouts: [],
  });

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
    // this.addFakeData();

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

              // Get daily workout
              this.apiService.getDailyWorkout(user).then((data) => {
                this.workoutSet = data;
              });
            } else {
              this.hasOnboarded = false;
            }

            // Get alt workout, delay for 5 sec
            this.apiService.getAltWorkouts().then((data) => {
              setTimeout(() => {
                this.altWorkoutSet = data;
                console.log(this.altWorkoutSet);
              }, 5000);
            });
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

                      // Get daily workout
                      this.apiService
                        .getDailyWorkout(this.username)
                        .then((data) => {
                          this.workoutSet = data;
                        });
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
      exercises: [
        {
          muscle: 'arms',
          name: 'bicep curls',
          weight: 25,
          reps: 10,
        },
        {
          muscle: 'back',
          name: 'lat pull down',
          weight: 65,
          reps: 8,
        },
        {
          muscle: 'legs',
          name: 'squat',
          weight: 125,
          reps: 4,
        },
        {
          muscle: 'arms',
          name: 'tri pull downs',
          weight: 35,
          reps: 10,
        },
        {
          muscle: 'back',
          name: 'rows',
          weight: 0,
          reps: 7,
        },
      ],
    });
  }
}
