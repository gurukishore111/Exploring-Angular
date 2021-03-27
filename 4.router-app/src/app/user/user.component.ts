import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/Users';
import { UserService } from '../services/user.service';

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
  data: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getData().subscribe((data) => {
      console.log(data);
    });

    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });

    this.loading = false;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Not valid');
    } else {
      value.isActive = true;
      value.registerd = new Date();
      value.hide = true;

      this.userService.addUser(value);

      this.form.reset();
    }
  }

  fireEvent(e) {
    console.log(e.target.value);
    console.log(e.type);
  }
}
