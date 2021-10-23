import { Router } from '@angular/router';
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
  userId:number;
  userFoundById:any=[];

  constructor( private userService : LoginService, private router : Router) { }

  ngOnInit() : void{
    this.getUsersList();
  }

  //aggiorna pagina

  exit() {
    window.location.reload();
  }

//Visualizza tutti gli utenti
  getUsersList(){
    this.userService.getUsers("admin","admin").subscribe(
      response => {
        this.data = response;
      },
      error => console.log(error)
    )
  }

  //Visualizza l'utente con lo username passato
  getUserByUsername(form :NgForm){ //funziona
    this.username = form.form.value.username;
  this.userService.getUserByUsername(this.username,"admin","admin").subscribe(
    (response : any) => {
      this.userFound = response;
        console.log("L'utente ha i seguenti dati:");  //test
        console.log(this.userFound);
    });
  }
//visualizza l'utente con l'id passato
  getUserById(form :NgForm){  //BETA, ancora non funzionante (da rivedere metodo nel backend-springboot)
    this.userId = form.form.value.userId;
    console.log("dato inserito:"+this.userId);
  this.userService.getUsersById(this.userId,"admin","admin").subscribe(
    (response : any) => {
      this.userFoundById = response;
        console.log("L'utente ha i seguenti dati:");  //test
        console.log(this.userFoundById);
    });
  }

  deleteUserById(form :NgForm){
    this.userId = form.form.value.userId;
    console.log("dato inserito:"+this.userId);
  this.userService.deleteUser(this.userId,"admin","admin").subscribe(
    (response : any) => {
      this.userFoundById = response;
        console.log("L'utente ha i seguenti dati:");  //test
        console.log(this.userFoundById);
        this.router.navigate(['/users']);
    });
  }

}

