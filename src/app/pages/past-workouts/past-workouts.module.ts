import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PastWorkoutsPage } from './past-workouts.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './past-workouts-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule
  ],
  declarations: [PastWorkoutsPage]
})
export class Tab3PageModule {}
