import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatsPage } from './stats.page';

import { StatsPageRoutingModule } from './stats-routing.module';
import { StatItemListComponentModule } from '../../components/stat-item-list/stat-item-list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StatsPageRoutingModule,
    StatItemListComponentModule,
  ],
  declarations: [StatsPage],
})
export class StatsPageModule {}
