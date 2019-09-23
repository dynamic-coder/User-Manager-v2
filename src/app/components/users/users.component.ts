import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // Properties..
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = true;
  currentClasses = {};
  currentStyles = {};

  // Methodes..
  constructor() { }

  ngOnInit() {
      this.users = [{
        firstName: 'User',
        lastName: 'Num1',
        age: 27,
        address: {
          city: 'city1',
          country: 'country1',
          state: 'TN'
        },
        image: 'https://picsum.photos/id/233/250/250',
        isActive: true,
        balance: 100,
        registred: new Date('20/01/2019 06:30:04')
      },
      {
        firstName: 'User',
        lastName: 'Num2',
        age: 30,
        address: {
          city: 'city2',
          country: 'Scountry2',
          state: 'TN'
        },
        image: 'https://picsum.photos/id/234/250/250',
        isActive : false,
        balance: 200,
        registred: new Date('01/02/2017 06:20:10')
      },
      {
        firstName: 'User',
        lastName: 'Num3',
        age: 28,
        address: {
           city: 'city3',
           country: 'Scountry3',
           state: 'TN'
        },
        image: 'https://picsum.photos/id/235/250/250',
        isActive : true,
        balance: 50,
        registred: new Date('05/03/2019 05:10:10')

      },
      ];

      this.loaded = true;
      // this.showExtended = false;

      this.addUser({
      firstName: 'UserX',
      lastName: 'NumX',
      image: 'https://picsum.photos/id/237/250/250',
      isActive : true,
      balance: 150,
      registred: new Date('10/01/2018 08:30:40')
    });

      this.setCurrentClasses();
      this.setCurrentStyles();
  }
  addUser(user: User) {
    this.users.push(user);
  }
  setCurrentClasses(){
    this.currentClasses = {
      'btn-success' : this.enableAdd,
      'btn-warning' : !this.enableAdd,
      'big-text' : this.showExtended
    };
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top' : this.showExtended ? '0' : '40px',
      'font-size' : this.showExtended ? '' : '40px'
    };
  }
}
