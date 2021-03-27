import { Component, OnInit, ViewChild } from '@angular/core';
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
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    email: '',
  };
  users: User[];
  showExtends: boolean = false;
  loading: boolean = true;
  enabledAdd: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  constructor() {}

  ngOnInit(): void {
    //setTimeout(() => {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        email: 'guru@gmail.com',
        isActive: true,
        registerd: new Date('01/02/2020 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        age: 30,
        email: 'guru@gmail.com',

        isActive: false,
        registerd: new Date('12/02/2020 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Power',
        lastName: 'Doe',
        age: 30,
        email: 'guru@gmail.com',

        isActive: false,

        registerd: new Date('11/02/2020 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Marin',
        lastName: 'Doe',
        age: 30,
        email: 'guru@gmail.com',

        isActive: false,
        registerd: new Date('11/02/2020 08:30:00'),
        hide: true,
      },
    ];

    this.loading = false;
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
  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registerd = new Date();
  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     age: null,
  //     email: '',
  //   };
  // }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Not valid');
    } else {
      value.isActive = true;
      value.registerd = new Date();
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    }
  }

  fireEvent(e) {
    console.log(e.target.value);
    console.log(e.type);
  }
}
