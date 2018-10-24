import { Component, OnInit } from '@angular/core';
import { RestaurantDataService } from './restaurant-data.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurantList = [];
  searchTerm = '';
  itemsToDisplay = 100;

  constructor(private restaurantDataService: RestaurantDataService) { }

  ngOnInit() {
    this.restaurantDataService.getRestaurantData()
      .subscribe((response: any[]) => {
        this.restaurantList = response;
      });
  }

  restaurantArray() {
    return this.restaurantList
      .filter((restaurant) => {
        return containsMatch(restaurant.dba_name, this.searchTerm);
      })
      .slice(0, this.itemsToDisplay)
      .map((restaurant) => {
        return {
          name: restaurant.dba_name,
          address: restaurant.address,
          zip: restaurant.zip,
        };
      });
  }

  onScrollDown() {
    this.itemsToDisplay = this.itemsToDisplay < this.restaurantList.length
      ? this.itemsToDisplay = this.itemsToDisplay + 20
      : this.restaurantList.length;
  }
}

function containsMatch(searchItem, searchValue) {
  if (!searchValue) { return true; }
  return searchItem.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
}
