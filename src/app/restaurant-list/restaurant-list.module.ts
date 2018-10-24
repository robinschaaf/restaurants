import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RestaurantDataService } from './restaurant-data.service';
import { RestaurantListComponent } from './restaurant-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    FormsModule,
  ],
  declarations: [
    RestaurantListComponent,
  ],
  providers: [RestaurantDataService],
})
export class RestaurantListModule {

}
