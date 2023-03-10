import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeeklyLogPage } from './weekly-log.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { WeeklyLogPageRoutingModule } from './weekly-log-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    WeeklyLogPageRoutingModule
  ],
  declarations: [WeeklyLogPage]
})
export class Tab2PageModule {}
