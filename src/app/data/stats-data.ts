export class StatsData {
  totalWeight: number;
  totalReps: number;
  totalDays: number;

  constructor(objectModel: {}) {
    // @ts-ignore
    this.totalWeight = objectModel['total_weight'];

    // @ts-ignore
    this.totalReps = objectModel['total_reps'];

    // @ts-ignore
    this.totalDays = objectModel['total_days'];
  }
}
