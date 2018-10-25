import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  {
    path: 'restaurants',
    component: RestaurantListComponent,
    data: { title: 'Restaurants List' }
  },
  { path: '',
    redirectTo: '/restaurants',
    pathMatch: 'full'
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
