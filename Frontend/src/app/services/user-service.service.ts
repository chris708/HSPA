import { Injectable } from '@angular/core';
import { IUser } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  public addUser(user: IUser) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users')!);
      users = [user, ...users];
    }
    else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
