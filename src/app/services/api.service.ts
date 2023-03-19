import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { WorkoutSetData } from '../data/workout-set-data';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiBaseUrl: string = 'http://localhost:4200/api';

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
  }

  // STORAGE
  public setLocalUser(key: string, value: any) {
    this.storage.set(key, value);
  }

  public async getLocalUser(key: string) {
    return await this.storage.get(key);
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
  ): Promise<any> {
    return this.sendRequestToApi(
      '/recommend/' + username + '/' + numWorkouts
    ).then((data) => {
      return new WorkoutSetData(data);
    });
  }
}
