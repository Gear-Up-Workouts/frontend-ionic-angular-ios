import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

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

  // aboutMe(): Promise<> {
  //   //This line is sending a request to express, which returns a promise with some data. We're then parsing the data
  //   return this.sendRequestToApi("/").then((data) => {
  //     return new ProfileData(data);
  //   });
  // }

  public helloWorld(): Promise<any> {
    return this.sendRequestToApi('/');
  }

  public hasOnboarded(username: string): Promise<any> {
    return this.sendRequestToApi('/hasonboarded/' + username);
  }

  public createNewUser(username: string): Promise<any> {
    return this.sendRequestToApi('/newuser/' + username);
  }

  public setGymAccess(username: string, hasGymAccess: boolean): Promise<any> {
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
}
