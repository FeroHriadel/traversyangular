import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';



@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    user: User;

    constructor() {}

    ngOnInit(): void {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            address: {
                state: 'state',
                city: 'city',
                street: 'street'
            }
        }
    }

}