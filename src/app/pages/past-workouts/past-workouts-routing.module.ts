import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastWorkoutsPage } from './past-workouts.page';

const routes: Routes = [
  {
    path: '',
    component: PastWorkoutsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastWorkoutsPageRoutingModule {}
