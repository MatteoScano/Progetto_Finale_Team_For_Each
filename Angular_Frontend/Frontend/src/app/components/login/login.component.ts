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
  username: string;
  password: string;
  message:any;
  invalidLogin = false;

  userFound: UserDataInterface;

  ngOnInit(){
  }

  doLogin(){
    if(this.username != null && this.password !=null){
      this.letsLogIn(this.username);
  }
}

letsLogIn(username : string){

  this.loginService.getUserByUsername(username,"admin","admin").subscribe(
    (response : any) => {
      this.userFound = response;
        console.log("L'utente ha i seguenti dati:");  //test
        console.log(this.userFound);

        if(this.userFound){

          sessionStorage.setItem('username',this.username);
          this.router.navigate(['/dashboard']);}

        else{
            console.log("autenticazione fallita");  //test
        }
    });

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
