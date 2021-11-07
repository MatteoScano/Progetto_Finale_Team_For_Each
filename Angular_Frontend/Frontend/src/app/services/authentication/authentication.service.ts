import { Router } from '@angular/router';
import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router, private loginservice: LoginService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.login().subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }
}
