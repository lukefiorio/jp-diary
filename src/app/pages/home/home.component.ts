import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // users: object[] = [
  users: {
    username: string;
    age: number;
  }[] = [
    {
      username: 'user1',
      age: 20,
    },
    {
      username: 'user2',
      age: 25,
    },
    {
      username: 'user3',
      age: 30,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
