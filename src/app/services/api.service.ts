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
