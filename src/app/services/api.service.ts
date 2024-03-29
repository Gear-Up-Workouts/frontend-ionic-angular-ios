import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { WorkoutSetData } from '../data/workout-set-data';
import { AltWorkoutSetData } from '../data/alt-workout-set-data';
import { StatsData } from '../data/stats-data';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiBaseUrl: string = 'https://gear-up-workouts-backend-flask-r0lduekf6-radicitus.vercel.app/api';

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
  }

  // STORAGE
  public setLocalUser(key: string, value: any) {
    this.storage.set(key, value);
  }

  public async getLocalUser() {
    return await this.storage.get('username');
  }

  public async hasLocalUser() {
    return (await this.storage.length()) != 0;
  }

  public async clearLocalUser() {
    return await this.storage.clear();
  }

  // Send request to server
  private sendRequestToApi(endpoint: string): Promise<any> {
    return lastValueFrom(this.http.get(this.apiBaseUrl + endpoint)).then(
      (resp) => {
        console.log('ApiServ: Resp: ', resp);
        return resp;
      },
      (err) => {
        console.log('ApiServ: Err: ', err);
        return err;
      }
    );
  }

  public helloWorld(): Promise<any> {
    return this.sendRequestToApi('/');
  }

  //// ONBOARDING
  public hasOnboarded(username: string): Promise<any> {
    return this.sendRequestToApi('/hasonboarded/' + username).then((data) => {
      return data['onboarded'] === 'true';
    });
  }

  public createNewUser(username: string): Promise<any> {
    return this.sendRequestToApi('/newuser/' + username);
  }

  public setGymAccess(username: string, hasGymAccess: string): Promise<any> {
    return this.sendRequestToApi(
      '/setgymaccess/' + username + '/' + hasGymAccess
    );
  }

  public setProficiency(username: string, proficiency: string): Promise<any> {
    return this.sendRequestToApi(
      '/setproficiency/' + username + '/' + proficiency
    );
  }

  public setGoal(username: string, goal: string): Promise<any> {
    return this.sendRequestToApi('/setgoal/' + username + '/' + goal);
  }

  //// WORKOUTS
  public getDailyWorkout(
    username: string,
    numWorkouts: number = 5
  ): Promise<WorkoutSetData> {
    return this.sendRequestToApi(
      '/recommend/' + username + '/' + numWorkouts
    ).then((data) => {
      return new WorkoutSetData(data);
    });
  }

  public getWorkoutHistory(username: string): Promise<WorkoutSetData[]> {
    return this.sendRequestToApi('/getworkouthistory/' + username).then(
      (data) => {
        let pastWorkouts = [];

        for (let date in data) {
          let d = new Date(date.replace(/-/g, '/'));
          console.log(d);
          let workoutSet = JSON.parse(data[date]);

          pastWorkouts.push(new WorkoutSetData(workoutSet, d));
        }

        return pastWorkouts;
      }
    );
  }

  //// ALT WORKOUTS
  public getAltWorkouts() {
    return this.sendRequestToApi('/findNearbyAlternativeWorkouts').then(
      (data) => {
        return new AltWorkoutSetData(data);
      }
    );
  }

  //// STATS
  public getUserStats(username: string) {
    return this.sendRequestToApi('/getstats/' + username).then((data) => {
      console.log(data);
      return new StatsData(data);
    });
  }

  //// WORKOUT RATING
  public sendWorkoutRating(
    username: string,
    workoutName: string,
    workoutRating: number
  ) {
    return this.sendRequestToApi(
      '/setworkoutrating/' +
        username +
        '/' +
        workoutName.replace(' ', '') +
        '/' +
        workoutRating
    );
  }

  public sendWorkoutDifficulty(
    username: string,
    workoutName: string,
    workoutDifficulty: string
  ) {
    return this.sendRequestToApi(
      '/rateexercise/' +
        username +
        '/' +
        workoutName.replace(' ', '') +
        '/' +
        workoutDifficulty
    );
  }
}
