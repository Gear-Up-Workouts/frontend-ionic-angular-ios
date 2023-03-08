import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WorkoutItemComponent} from './workout-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [WorkoutItemComponent],
  exports: [WorkoutItemComponent]
})
export class WorkoutItemComponentModule {
}
