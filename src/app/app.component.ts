import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Revisionproject';
  pageTitle: String = 'Data binding in Angular Application';
  imageUrl = 'assets/zero_front.jpg';
  username= 'dragonBallZ';
  arr:any=['saitama','goku',185,'chainsaw',66,'yagami'];
  age=9 ;
  users=[
    {
      name:'Anurag',
      age:25
    },
    {
      name:'Abhishek',
      age:33
    },
    {
      name:'Lucky',
      age:18
    }
  ]

  hello() {
    alert('you clicked me.');
  }
}
