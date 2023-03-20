import { AltWorkoutData } from './alt-workout-data';

export class AltWorkoutSetData {
  workouts: AltWorkoutData[];

  isAltWorkout: boolean = false;

  workoutType: string = '';

  time: Date = new Date();

  constructor(objectModel: {}) {
    // @ts-ignore
    this.workouts = objectModel['LiveWorkouts'].map((w) => {
      this.workoutType = w['workout_type'];
      this.time = new Date(w['time'].replace('T', ' '));

      return new AltWorkoutData(w);
    });

    this.isAltWorkout = this.workouts.length >= 1;
  }
}
