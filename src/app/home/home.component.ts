import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `<h2>templateURL</h2> <div class="container"> this is container tag </div>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: any;
  constructor() {}

}
