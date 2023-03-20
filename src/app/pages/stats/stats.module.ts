import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatsPage } from './stats.page';

import { StatsPageRoutingModule } from './stats-routing.module';
import { WeeklyStatItemComponentModule } from '../../components/weekly-stat-item/weekly-stat-item.module';
import { WeeklyStatItemListComponentModule } from '../../components/weekly-stat-item-list/weekly-stat-item-list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StatsPageRoutingModule,
    WeeklyStatItemComponentModule,
    WeeklyStatItemListComponentModule,
  ],
  declarations: [StatsPage],
})
export class StatsPageModule {}
