import { LoginService } from './../../services/login/login.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router) { }

  //variabili per l'input
  username: string;
  password: string;
  message:any;


  ngOnInit(){
  }

  doLogin(){
    //this.router.navigate["http://localhost:8080/login"];
    if(this.username != null && this.password !=null){
    let resp = this.loginService.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      console.log(data);
     //this.router.navigate(["/dashboard"])
    });
  }
}
/*
  submitButton(){
    if(this.usernameInput != null && this.passwordInput !=null){
      let found = this.searchInsideArray(this.usernameInput, this.passwordInput);
      if(found){
        this.router.navigate(['/dashboard']);
      }
    }
  }

  searchInsideArray(username: string, password: string): boolean{
    for(let i=0;i<this.users.length;i++){
      if(username==this.users[i].username && password == this.users[i].password){
        return true;
      }
    }
    return false;
  }
  */

}
