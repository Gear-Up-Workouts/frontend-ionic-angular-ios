import {Injectable} from '@angular/core';
import {lastValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl: string = "http://127.0.0.1:5000";

  constructor(private http: HttpClient) {
  }

  // Send request to server
  private sendRequestToApi(endpoint: string): Promise<any> {
    return lastValueFrom(this.http.get(this.apiBaseUrl + endpoint)).then(
      (resp) => {
        console.log("ApiServ: Resp: ", resp);
        return resp;
      },
      (err) => {
        console.log("ApiServ: Err: ", err);
        return err;
      }
    );
  }

  public getUser(username: string): Promise<any> {
    //creates new user with name "username"
    return this.sendRequestToApi('/newuser/' + username);
  }

  public setGoal(username: string, goal: string): Promise<any> {
    //goal can be "strength" or "weightloss"
    return this.sendRequestToApi('/setgoal/' + username + '/' + goal);
  }

  public setWeight(username: string, exercise: string, weight: string, difficulty: string): Promise<any> {
    /*sets the weight and difficulty of an exercise, user must set this before using the next endpoint of recommending a weight
    exercise field is the exercise name with spaces removed
    difficulty can be "easy" "medium" or "hard"*/

    return this.sendRequestToApi('/setweight/' + username + '/' + exercise + '/' + weight + '/' + difficulty);
  }

  public getRecommendedWeight(username: string, exercise: string): Promise<any> {
    /*recommends weight based on the previous endpoint
    exercise field is the exercise name with spaces removed
    returns a weight as a string, ex: "150"*/

    return this.sendRequestToApi("/recommendweight/" + username + "/" + exercise);
  }

  public setGymAccess(username: string, has_access: boolean): Promise<any> {
    //sets gym access for a specific user
    return this.sendRequestToApi("/setgymaccess/" + username + "/" + has_access);
  }

  public setProficiency(username: string, proficiency: number): Promise<any> {
    //sets proficiency for a given user
    return this.sendRequestToApi('/setproficiency/' + username + '/' + proficiency);
  }

  public getWorkoutHistory(username: string): Promise<any> {
    /*gets workout history for a given user
    Key is day and value is the workout recommendation*/

    return this.sendRequestToApi('/getworkouthistory/' + username);
  }

  public setWorkoutRating(username: string, exercise: string, rating: number): Promise<any> {
    /*allows user to rate a specific exercise.
    exercise field is the exercise name with spaces removed
    rating is either 0 or 1, 0 being bad and 1 being good, exercises rated 0 will not be shown again*/

    return this.sendRequestToApi('/setworkoutrating/' + username + '/' + exercise + '/' + rating);
  }

  public recommend(username: string, numexercises: number): Promise<any> {
    //returns the daily workout recommendation for the user
    return this.sendRequestToApi('/recommend/' + username + '/' + numexercises);
  }

  public randomTimeAlternativeWorkout(): Promise<any> {
    //Sets a random time between 9 am and 9 pm to recommend the user an alternative workout
    // based on their current live location
    return this.sendRequestToApi('/randomTimeAlternativeWorkout');
  }

  public findNearbyAlternativeWorkouts(username: string): Promise<any> {
    //Returns 3 destinations within a 5 mile radius for random alternative workouts (e.g. hiking, yoga, martial arts).
    // The return value includes the destinations workout type, name, address, google rating, and google maps link
    return this.sendRequestToApi('/findNearbyAlternativeWorkouts/' + username);
  }


  // aboutMe(): Promise<> {
  //   //This line is sending a request to express, which returns a promise with some data. We're then parsing the data
  //   return this.sendRequestToApi("/").then((data) => {
  //     return new ProfileData(data);
  //   });
  // }

  test() {
    return this.sendRequestToApi("/");
  }

}
