import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedInUser!: string;

  constructor(
    private router: Router,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
  }

  public loggedIn() {
    this.loggedInUser = localStorage.getItem('token')!;
    return this.loggedInUser;
  }

  public onLogout() {
    this.router.navigate(['/user/login']);
    localStorage.removeItem('token');
    this.alertify.success('Logout Successful');
  }

}
