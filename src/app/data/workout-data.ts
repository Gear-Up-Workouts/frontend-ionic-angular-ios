export class WorkoutData {
  bodyGroup: string;
  workoutName: string;
  workoutWeight: number;
  workoutReps: number;
  workoutGuide?: string;

  constructor(objectModel: {}) {
    // @ts-ignore
    this.bodyGroup = objectModel['bodyGroup'];

    // @ts-ignore
    this.workoutName = objectModel['workoutName'];

    // @ts-ignore
    this.workoutWeight = objectModel['workoutWeight'];

    // @ts-ignore
    this.workoutReps = objectModel['workoutReps'];

    // @ts-ignore
    this.workoutGuide = objectModel['workoutGuide'];
  }
}
