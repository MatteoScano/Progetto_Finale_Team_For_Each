import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, NgForm } from '@angular/forms';

export interface UserInterface{
  username: string, 
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  //variabili per l'input
  usernameInput: string;
  passwordInput: string;  

  //utenti
  root: UserInterface={
    username: "root",
    password: "root"
  }
  pippo: UserInterface={
    username: "pippo",
    password: "pippo2"
  }

  //array di UserInterface
  users: UserInterface[]=[this.root, this.pippo];

  ngOnInit(): void {
  }

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

}
