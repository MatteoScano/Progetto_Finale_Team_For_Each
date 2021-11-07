import { Router } from '@angular/router';
import { UserDataInterface } from './../../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseURL = 'http://localhost:8080/utenti';
  //variabili per eseguire l'accesso al database gestito da Springboot
  private usernameAuth="admin";
  private passwordAuth="admin";

  constructor(private http : HttpClient) { }

  //aggiunge l'utente passato
  addUser =(newUser : UserDataInterface) => {

    const headers=new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(this.usernameAuth+":"+this.passwordAuth)});  //btoa= binari to ask
    return this.http.post<UserDataInterface>(this.baseURL +"/", JSON.stringify({
    "name": newUser.name,
    "surname": newUser.surname,
    "email": newUser.email,
    "username": newUser.username,
    "password": newUser.password,
    "enabled": newUser.enabled,
    }),{headers})

  }

}
