import {Injectable} from '@angular/core';
import {lastValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  apiBaseUrl: string = "http://localhost:8888";

  constructor(private http: HttpClient) {
  }

  private sendRequestToExpress(endpoint: string): Promise<any> {
    return lastValueFrom(this.http.get(this.apiBaseUrl + endpoint)).then(
      (resp) => {
        return resp;
      },
      (err) => {
        return err;
      }
    );
  }
}
