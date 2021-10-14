import { Router } from '@angular/router';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: LoginService,  private router: Router) { }

  ngOnInit(){
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

}
