import { AfterViewChecked, Component, DoCheck } from '@angular/core';
import { WorkoutSetData } from '../../data/workout-set-data';
import { interval } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-past-workouts',
  templateUrl: 'past-workouts.page.html',
  styleUrls: ['past-workouts.page.scss'],
})
export class PastWorkoutsPage {
  pastWorkouts: WorkoutSetData[] = [];
  todayDate: string = '';
  yesterdayDate: string = '';

  constructor(private apiService: ApiService, private router: Router) {
    // Add fake data
    // this.addFakeData();

    this.updateDay();
    this.setAutoUpdateDate();

    this.updatePastWorkouts();

    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.updatePastWorkouts();
      }
    });
  }

  updatePastWorkouts() {
    // Get local user and display past workouts
    this.apiService.getLocalUser().then((user) => {
      this.apiService.getWorkoutHistory(user).then((data) => {
        this.pastWorkouts = data;

        this.pastWorkouts.sort((a, b) => {
          // @ts-ignore
          return b.date - a.date;
        });
      });
    });
  }

  updateDay() {
    let date = new Date();
    this.todayDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

    date.setDate(date.getDate() - 1);

    this.yesterdayDate = date.toLocaleDateString('en-US', {
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
    this.pastWorkouts = [
      new WorkoutSetData({
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
        ],
      }),
      new WorkoutSetData(
        {
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
          ],
        },
        new Date('March 8, 2023 01:03:00')
      ),
      new WorkoutSetData(
        {
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
          ],
        },
        new Date('February 18, 2021 01:03:00')
      ),
      new WorkoutSetData(
        {
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
          ],
        },
        new Date('February 19, 2021 14:38:00')
      ),
      new WorkoutSetData(
        {
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
        },
        new Date('February 20, 2021 23:11:00')
      ),
    ];
  }
}
