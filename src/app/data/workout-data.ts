export class WorkoutData {
  bodyGroup: string;
  workoutName: string;
  workoutWeight: number;
  workoutReps: number;
  workoutGuide?: string;

  constructor(objectModel: {}) {
    // @ts-ignore
    this.bodyGroup = objectModel['muscle']
      .toLowerCase()
      .split('_')
      .map((s: string) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

    // @ts-ignore
    this.workoutName = objectModel['name'];

    // @ts-ignore
    this.workoutWeight = objectModel['weight'];

    // @ts-ignore
    this.workoutReps = objectModel['reps'];

    // @ts-ignore
    this.workoutGuide = objectModel['workoutGuide'];
  }
}
