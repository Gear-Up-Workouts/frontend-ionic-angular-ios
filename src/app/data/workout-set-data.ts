import { WorkoutData } from './workout-data';

export class WorkoutSetData {
  workouts: WorkoutData[];

  date: Date;

  dateString: string;

  constructor(objectModel: {}) {
    this.date = new Date();
    this.dateString = this.date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

    // @ts-ignore
    this.workouts = objectModel['workouts'].map((w) => {
      return new WorkoutData(w);
    });
  }
}
