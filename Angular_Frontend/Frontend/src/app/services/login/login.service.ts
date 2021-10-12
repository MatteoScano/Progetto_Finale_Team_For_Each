import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  public login(username:string, password:string){
    const headers=new HttpHeaders({Authorization : 'Basic '+ btoa(username+":"+password)});  //btoa= binari to ask
    return this.http.get("http://localhost:8080/utenti/", {headers, responseType:'text' as 'json'});
}

public getUsers(){  //click on botton
  let username="admin";
  let password="admin";
  const headers = new HttpHeaders({Authorization : 'Basic '+ btoa(username+":"+password)});  //btoa= binari to ask
  console.log(headers);
  return this.http.get("http://localhost:8080/utenti/", {headers});
  }


}
