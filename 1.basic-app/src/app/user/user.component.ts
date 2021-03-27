import { Component, OnInit } from '@angular/core';
import { User } from './../components/models/Users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  //Properties
  // firstName: string = 'John';
  // lastName: string = 'Doe';
  // age: number = 20;
  // address = {
  //   street: '50 main steet',
  //   city: 'xxxx',
  //   state: 'yyyy',
  // };
  // number: number[];
  // word: string[];
  // mixed: any;
  // unused: void;
  // u: undefined;
  // n: null;

  users: User[];
  showExtends: boolean = true;
  loading: boolean = true;
  enabledAdd: boolean = true;
  currentClasess: {};
  currentStyles: {};
  constructor() {}

  ngOnInit(): void {
    //setTimeout(() => {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: 'xxxxxxx',
          city: 'yyyyy',
          state: 'zzz',
        },
        image: 'https://picsum.photos/300/300',
        isActive: true,
        balance: 100,
        registerd: new Date('01/02/2020 08:30:00'),
      },
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        age: 30,
        address: {
          street: 'xxxxxxx',
          city: 'yyyyy',
          state: 'zzz',
        },
        image: 'https://picsum.photos/300/300',
        isActive: true,
        balance: 100,
        registerd: new Date('12/02/2020 08:30:00'),
      },
      {
        firstName: 'Power',
        lastName: 'Doe',
        age: 30,
        address: {
          street: 'xxxxxxx',
          city: 'yyyyy',
          state: 'zzz',
        },
        image: 'https://picsum.photos/300/300',
        isActive: false,
        balance: 300,
        registerd: new Date('11/02/2020 08:30:00'),
      },
      {
        firstName: 'Marin',
        lastName: 'Doe',
        age: 30,
        address: {
          street: 'xxxxxxx',
          city: 'yyyyy',
          state: 'zzz',
        },
        image: 'https://picsum.photos/300/300',
        isActive: false,
        balance: 200,
        registerd: new Date('11/02/2020 08:30:00'),
      },
    ];

    this.loading = false;
    this.setCurrentClasses();
    this.setCurrentStyle();
    //  }, 2000);

    // this.showExtends = false;

    // this.addUser({
    //   firstName: 'Darvid',
    //   lastName: 'Jackson',
    //   // age: 30,
    //   // address: {
    //   //   street: 'xxxxxxx',
    //   //   city: 'yyyyy',
    //   //   state: 'zzz',
    //   // },
    // });
  }
  setCurrentClasses() {
    this.currentClasess = {
      'btn-success': this.enabledAdd,
    };
  }
  setCurrentStyle() {
    this.currentStyles = {
      'padding-top': this.showExtends ? '0' : '40px',
      'font-size': this.showExtends ? '' : '40px',
    };
  }
  addUser(user: User) {
    this.users.push(user);
  }
}
