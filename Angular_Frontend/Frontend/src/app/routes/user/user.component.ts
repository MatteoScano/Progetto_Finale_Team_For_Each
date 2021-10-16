import { NgForm } from '@angular/forms';
import { UserDataInterface } from './../../models/user.model';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  users : UserDataInterface[];
  data:any;
  userFound:any=[];
  username:string;



  constructor( private userService : LoginService) { }

  ngOnInit() : void{
    this.getUsersList();
  }

  getUsersList(){
    this.userService.getUsers("admin","admin").subscribe(
      response => {
        this.data = response;             //Tutto l'oggetto
        console.log("I dati ottenuti sono:", this.data);
       // console.log("I dati strinfy:" + JSON.stringify(this.movies));
      },
      error => console.log(error)
    )
  }

  getUserByUsername(form :NgForm){ //funziona
    this.username = form.form.value.username;
  this.userService.getUserByUsername(this.username,"admin","admin").subscribe(
    (response : any) => {
      this.userFound = response;
        console.log("L'utente ha i seguenti dati:");  //test
        console.log(this.userFound);
    });
  }



}

