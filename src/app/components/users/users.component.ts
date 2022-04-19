import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})



export class UsersComponent implements OnInit {
  users: User[] = [];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'Adam',
          lastName: 'Doe',
          age: 31,
          address: {
              state: 'state',
              city: 'city',
              street: 'street'
          }
        },
        {
          firstName: 'Betty',
          lastName: 'Doe',
          age: 32,
          address: {
              state: 'state',
              city: 'city',
              street: 'street'
          }
        },
        {
          firstName: 'Cecil',
          lastName: 'Doe',
          age: 33,
          address: {
              state: 'state',
              city: 'city',
              street: 'street'
          }
        }
      ];

      this.loaded = true;
    }, 2000);
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
