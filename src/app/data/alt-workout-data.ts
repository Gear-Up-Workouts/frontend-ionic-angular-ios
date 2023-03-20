export class AltWorkoutData {
  workoutName: string;
  address: string;
  rating: number;
  mapsLink: string;
  constructor(objectModel: {}) {
    // @ts-ignore
    this.workoutName = objectModel['name'];

    // @ts-ignore
    this.address = objectModel['address'];

    // @ts-ignore
    this.rating = objectModel['rating'];

    // @ts-ignore
    this.mapsLink = objectModel['maps_link'];
  }
}
