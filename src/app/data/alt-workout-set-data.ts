import { AltWorkoutData } from './alt-workout-data';

export class AltWorkoutSetData {
  workouts: AltWorkoutData[];

  isAltWorkout: boolean = false;

  constructor(objectModel: {}) {
    // @ts-ignore
    this.workouts = objectModel['LiveWorkouts'].map((w) => {
      return new AltWorkoutData(w);
    });

    this.isAltWorkout = this.workouts.length >= 1;
  }
}
