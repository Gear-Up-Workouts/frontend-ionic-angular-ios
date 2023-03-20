export class AltWorkoutData {
  workoutType: string;
  workoutName: string;
  address: string;
  rating: number;
  mapsLink: string;
  time: Date;

  constructor(objectModel: {}) {
    // @ts-ignore
    this.workoutType = objectModel['workout_type'];

    // @ts-ignore
    this.workoutName = objectModel['name'];

    // @ts-ignore
    this.address = objectModel['address'];

    // @ts-ignore
    this.rating = objectModel['rating'];

    // @ts-ignore
    this.mapsLink = objectModel['maps_link'];

    // @ts-ignore
    this.time = new Date(objectModel['time']);
  }
}
