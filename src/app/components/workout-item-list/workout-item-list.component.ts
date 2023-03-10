import {Component, Input, OnInit} from '@angular/core';
import {WorkoutData} from "../../data/workout-data";

@Component({
  selector: 'app-workout-item-list',
  templateUrl: './workout-item-list.component.html',
  styleUrls: ['./workout-item-list.component.scss'],
})
export class WorkoutItemListComponent implements OnInit {

  @Input() workoutItems?: WorkoutData[];

  constructor() {
  }

  ngOnInit() {
  }

}
