import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeeklyLogPage } from './weekly-log.page';

import { WeeklyLogPageRoutingModule } from './weekly-log-routing.module';
import {WeeklyStatItemComponentModule} from "../../components/weekly-stat-item/weekly-stat-item.module";
import {WeeklyStatItemListComponentModule} from "../../components/weekly-stat-item-list/weekly-stat-item-list.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    WeeklyLogPageRoutingModule,
    WeeklyStatItemComponentModule,
    WeeklyStatItemListComponentModule,
  ],
  declarations: [WeeklyLogPage],
})
export class Tab2PageModule {}
