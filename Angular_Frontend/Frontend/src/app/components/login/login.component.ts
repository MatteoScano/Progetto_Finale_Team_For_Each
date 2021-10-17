import { UserDataInterface } from './../../models/user.model';
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
  usernameInput: string;
  passwordInput: string;
  //variabile per il logged in
  invalidLogin = false;

  userFound: UserDataInterface;

  ngOnInit(){
  }

submitButton(){
  if(this.usernameInput != null && this.passwordInput !=null){

    this.loginService.getUserByUsername(this.usernameInput,"admin","admin").subscribe(
      (data : any)=> {
        this.userFound = data;

        if(this.passwordInput===this.userFound.password){

            sessionStorage.setItem('username',this.usernameInput);
            this.invalidLogin = false;
            this.router.navigate(['/dashboard']);

        }
        else{
            console.log("Autenticazione fallita");  //test
        }
      },
      error => console.log(error)
    );
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
