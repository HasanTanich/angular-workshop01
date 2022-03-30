import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  users = [
    {
      id: 1,
      name: 'Hasan'
    },
    {
      id: 2,
      name: 'Ibrahim'
    },
    {
      id: 3,
      name: 'Barza'
    }
  ];
  ngOnInit(): void {
  }

}
