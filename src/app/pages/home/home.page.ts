import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { WorkoutSetData } from '../../data/workout-set-data';
import { ToastController } from '@ionic/angular';
import { AltWorkoutSetData } from '../../data/alt-workout-set-data';
import { WorkoutData } from '../../data/workout-data';

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

  // Workout Rating Moda
  ratingWorkoutData?: WorkoutData;
  ratingWorkoutRating: number = 1;
  ratingWorkoutDifficulty: string = 'medium';

  constructor(
    private apiService: ApiService,
    private toastController: ToastController
  ) {
    // Get and auto update date
    this.date = new Date();
    this.updateDay();
    this.setAutoUpdateDate();

    // Check if user exists and add welcome toast
    this.apiService.hasLocalUser().then((bool) => {
      if (bool) {
        this.apiService.getLocalUser().then((user) => {
          this.username = user;
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
              let currentDate = new Date();
              let futureDate = data.time;
              let millisecondsToWait =
                futureDate.getTime() - currentDate.getTime();

              console.log(
                'Waiting for: ',
                millisecondsToWait,
                'ms to activate alt workout'
              );

              setTimeout(() => {
                this.altWorkoutSet = data;
                console.log(this.altWorkoutSet);
              }, millisecondsToWait);
            });
          });
        });
      } else {
        this.hasOnboarded = false;
      }
    });
  }

  doWorkoutRating() {
    this.sendWorkoutRating();
    this.sendWorkoutDifficulty();
    if (this.ratingWorkoutData) {
      this.ratingSaved(this.ratingWorkoutData?.workoutName);
    }
  }

  sendWorkoutRating() {
    this.apiService.hasLocalUser().then((bool) => {
      if (bool) {
        this.apiService.getLocalUser().then((user) => {
          if (this.ratingWorkoutData) {
            this.apiService.sendWorkoutRating(
              user,
              this.ratingWorkoutData.workoutName,
              this.ratingWorkoutRating
            );
          }
        });
      }
    });
  }

  sendWorkoutDifficulty() {
    this.apiService.hasLocalUser().then((bool) => {
      if (bool) {
        this.apiService.getLocalUser().then((user) => {
          if (this.ratingWorkoutData) {
            this.apiService.sendWorkoutDifficulty(
              user,
              this.ratingWorkoutData.workoutName,
              this.ratingWorkoutDifficulty
            );
          }
        });
      }
    });
  }

  activateWorkoutRatingModal(workoutData: WorkoutData) {
    this.ratingWorkoutData = workoutData;
    console.log(this.ratingWorkoutData);
  }

  async ratingSaved(workoutName: string) {
    let workout = workoutName.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

    const toast = await this.toastController.create({
      message: 'Your rating for ' + workout + ' has been saved!',
      duration: 3000,
      position: 'top',
      icon: 'save-outline',
      cssClass: 'text-center',
    });

    await toast.present();
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
}
