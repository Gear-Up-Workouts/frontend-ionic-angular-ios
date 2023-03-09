import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutItemListComponent } from './workout-item-list.component';
import {WorkoutItemComponent} from "../workout-item/workout-item.component";

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [WorkoutItemListComponent, WorkoutItemComponent],
  exports: [WorkoutItemListComponent]
})
export class WorkoutItemListComponentModule {}
