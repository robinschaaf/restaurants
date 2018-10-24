import { Component } from '@angular/core';

declare var device;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant List';
}
