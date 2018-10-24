import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestaurantDataService {
  restaurantUrl = 'https://data.cityofchicago.org/resource/cwig-ma7x.json';

  constructor(private http: HttpClient) { }

  getRestaurantData() {
    return this.http.get(this.restaurantUrl);
  }
}
