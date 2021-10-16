import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'http://localhost:8080/utenti';

  constructor(private http : HttpClient) { }

  public login(username:string, password:string){
    const headers=new HttpHeaders({
      Authorization : 'Basic '+ btoa(username+":"+password)});  //btoa= binari to ask
    return this.http.get<any>(this.baseURL + "/", {headers, responseType:'text' as 'json'}).pipe(map(
        userData => {
         sessionStorage.setItem('username',username);
         return userData;
        }
      )
      );
  }
  //LOGOUT

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

//LOGOUT test FINISH

  public getUsers(username:string, password:string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(username+":"+password)});
    return this.http.get(this.baseURL + "/", {headers});
    }

  public getUsersById(id: number, username:string, password:string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(username+":"+password)});
      return this.http.get(this.baseURL + "/" + id, {headers});
    }

    public getUserByUsername(username : string, usernameAuth:string, passwordAuth:string){
      const headers = new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization : 'Basic '+ btoa(usernameAuth+":"+passwordAuth)});
      return this.http.get(this.baseURL + "/username/" + username, {headers});
    }

  public getUsersByPartialUsername(partialUsername: string, username:string, password:string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(username+":"+password)});
    return this.http.get(this.baseURL + "/username/like/" + partialUsername, {headers});
  }

  /*In versione BETA*/
  updateUser = (id: number, usernameAuth:string, passwordAuth:string) => {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(usernameAuth+":"+passwordAuth)});

    return this.http.put(this.baseURL + + "/" +id, {headers});
  }

  deleteUser(id: number, usernameAuth:string, passwordAuth:string ){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization : 'Basic '+ btoa(usernameAuth+":"+passwordAuth)});
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

