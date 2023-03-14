import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WeeklyStatItemListComponent} from "./weekly-stat-item-list.component";
import {WeeklyStatItemComponentModule} from "../weekly-stat-item/weekly-stat-item.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyStatItemComponentModule,
  ],
  declarations: [WeeklyStatItemListComponent],
  exports: [WeeklyStatItemListComponent],
})
export class WeeklyStatItemListComponentModule {}
