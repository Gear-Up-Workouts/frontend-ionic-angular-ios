import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {WorkoutItemListComponent} from "../../components/workout-item-list/workout-item-list.component";
import {WorkoutItemComponentModule} from "../../components/workout-item/workout-item.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    WorkoutItemComponentModule
  ],
  declarations: [HomePage, WorkoutItemListComponent]
})
export class HomePageModule {}
