import { UserDataInterface } from './../../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'http://localhost:8080/utenti';
  private usernameAuth="admin";
  private passwordAuth="admin";

  constructor(private http : HttpClient) { }

  public login(){
    const headers=new HttpHeaders({
      Authorization : 'Basic '+ btoa(this.usernameAuth+":"+this.passwordAuth)});  //btoa= binari to ask
    return this.http.get<any>(this.baseURL + "/", {headers, responseType:'text' as 'json'}).pipe(map(
        userData => {
         sessionStorage.setItem('username',this.usernameAuth);
         return userData;
        }
      )
      );
  }
//verifica se l'utente è loggato
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }
//Effettua il logout dell'utente dalla sessione
  logOut() {
    sessionStorage.removeItem('username')
  }
//visualizza la lista di tutti gli utenti presenti nel database
  public getUsers(){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(this.usernameAuth+":"+this.passwordAuth)});
    return this.http.get<Array<UserDataInterface>>(this.baseURL + "/", {headers});
    }
//Preleva l'utente con l'id passato
  public getUsersById(id: number){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(this.usernameAuth+":"+this.passwordAuth)});
      return this.http.get<UserDataInterface>(this.baseURL + "/" + id, {headers});
    }
//Preleva l'utente con lo username passato come parametro
    public getUserByUsername(username : string){
      const headers = new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization : 'Basic '+ btoa(this.usernameAuth+":"+this.passwordAuth)});
      return this.http.get<UserDataInterface>(this.baseURL + "/username/" + username, {headers});
    }
//Preleva gli utenti che contendono nello username la stringa passata
  public getUsersByPartialUsername(partialUsername: string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(this.usernameAuth+":"+this.passwordAuth)});
    return this.http.get<UserDataInterface>(this.baseURL + "/username/like/" + partialUsername, {headers});
  }
//Aggiorna tutti i dati dell'utente
  updateUser =(userId:number, newUser : UserDataInterface) => {
    const headers=new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(this.usernameAuth+":"+this.passwordAuth)});  //btoa= binari to ask
    return this.http.put<UserDataInterface>(this.baseURL +"/" +userId, JSON.stringify({
    "name": newUser.name,
    "surname": newUser.surname,
    "email": newUser.email,
    "username": newUser.username,
    "password": newUser.password,
    "enabled": newUser.enabled,
    }),{headers})
  }
//Elimina l'utente con l'id passato
  deleteUser(id: number){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(this.usernameAuth+":"+this.passwordAuth)});
    return this.http.delete(this.baseURL + "/"+id, {headers});
  }
}



/*
  ***----Funzione login Springboot! data 16.10.21

  doLogin(){

    if(this.username != null && this.password !=null){

    let resp = this.loginService.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      if(data){
        console.log(data);//TEST
        this.invalidLogin = false;
        this.router.navigate(["/dashboard"])}
      else{
        this.invalidLogin = true;
        console.log("error");
      }
    });

  }
  ***-----
*/

