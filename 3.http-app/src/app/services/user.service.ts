import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/Users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  //Observable -> async
  data: Observable<any>;
  constructor() {
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
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
