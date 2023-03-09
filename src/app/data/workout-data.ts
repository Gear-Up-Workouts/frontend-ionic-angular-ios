export class WorkoutData {
  bodyGroup:string;
  workoutName:string;
  workoutWeight:number;
  workoutReps:number;

  constructor(objectModel:{}) {
    // @ts-ignore
    this.bodyGroup = objectModel['bodyGroup'];

    // @ts-ignore
    this.workoutName = objectModel['workoutName'];

    // @ts-ignore
    this.workoutWeight = objectModel['workoutWeight'];

    // @ts-ignore
    this.workoutReps = objectModel['workoutReps'];
  }

  // constructor(bodyGroup:string, workoutName:string, workoutWeight:number, workoutReps:number) {
  //   this.bodyGroup = bodyGroup;
  //
  //   this.workoutName = workoutName;
  //
  //   this.workoutWeight = workoutWeight;
  //
  //   this.workoutReps = workoutReps;
  // }
}
