import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public authUser(user: any){
    console.log('user', user);
    let UserArray = [];
    if(localStorage.getItem('Users')){
      UserArray = JSON.parse(localStorage.getItem('Users')!);
      console.log('Users', UserArray);
    }
    return UserArray.find((p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password);
  }

}
