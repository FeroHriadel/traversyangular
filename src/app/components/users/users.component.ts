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
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};

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
          },
          image: 'https://source.unsplash.com/random',
          isActive: true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00')
        },
        {
          firstName: 'Betty',
          lastName: 'Doe',
          age: 32,
          address: {
              state: 'state',
              city: 'city',
              street: 'street'
          },
          image: 'https://source.unsplash.com/random',
          balance: 200,
          registered: new Date('03/11/2017 06:20:00')
        },
        {
          firstName: 'Cecil',
          lastName: 'Doe',
          age: 33,
          address: {
              state: 'state',
              city: 'city',
              street: 'street'
          },
          image: 'https://source.unsplash.com/random',
          balance: 300,
          registered: new Date('01/02/2018 08:30:00')
        }
      ];

      this.loaded = true;
    }, 2000);

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '30px'
    }
  }

}
