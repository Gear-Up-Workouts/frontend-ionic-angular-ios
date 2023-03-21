import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatItemListComponent } from './stat-item-list.component';
import { StatItemComponentModule } from '../stat-item/stat-item.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, StatItemComponentModule],
  declarations: [StatItemListComponent],
  exports: [StatItemListComponent],
})
export class StatItemListComponentModule {}
