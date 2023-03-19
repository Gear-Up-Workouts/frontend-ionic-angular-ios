import { WorkoutData } from './workout-data';

export class WorkoutSetData {
  workouts: WorkoutData[];

  date: Date;

  dateString: string;

  constructor(objectModel: {}, date = new Date()) {
    this.date = date;

    this.dateString = this.date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

    // @ts-ignore
    this.workouts = objectModel['exercises'].map((w) => {
      return new WorkoutData(w);
    });
  }
}
