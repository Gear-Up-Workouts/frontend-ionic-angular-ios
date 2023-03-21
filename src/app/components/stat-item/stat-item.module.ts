import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatItemComponent } from './stat-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [StatItemComponent],
  exports: [StatItemComponent],
})
export class StatItemComponentModule {}
