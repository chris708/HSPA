import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public onLogin(form: NgForm) {
    console.log(form.value);
    const token = this.authService.authUser(form.value);
    if(token){
      localStorage.setItem('token', token.userName);
      this.alertify.success('Login Successful');
      this.router.navigate(['/']);
    } else {
      this.alertify.error('User Id or Password is incorrect');
    }
  }

}
