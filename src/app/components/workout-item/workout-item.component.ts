import {Component, Input, OnInit} from '@angular/core';
import {WorkoutData} from "../../data/workout-data";

@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.scss'],
})
export class WorkoutItemComponent implements OnInit {
  @Input()
  workout?: WorkoutData;

  constructor() {
    // this.bodyGroup = "arms";
    // this.workoutName = "bicep curl";
    // this.workoutWeight = 25;
    // this.workoutReps = 10;
    // this.workoutInstructions = "Start with carrying the weight above your head. Then, push it up. Next, eat a donut to give yourself energy..."
  }

  ngOnInit() {}
}
