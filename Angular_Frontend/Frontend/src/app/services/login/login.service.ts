import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'http://localhost:8080/utenti';

  constructor(private http : HttpClient) { }

  public login(username:string, password:string){
    const headers=new HttpHeaders({
      Authorization : 'Basic '+ btoa(username+":"+password)});  //btoa= binari to ask
    return this.http.get(this.baseURL + "/", {headers, responseType:'text' as 'json'});
  }

  public getUsers(username:string, password:string){  //click on botton
    const headers = new HttpHeaders({
      Authorization : 'Basic '+ btoa(username+":"+password)});
    return this.http.get(this.baseURL + "/", {headers});
    }

  public getUsersById(id: number, username:string, password:string){  //click on botton
    const headers = new HttpHeaders({
      Authorization : 'Basic '+ btoa(username+":"+password)});

      return this.http.get(this.baseURL + "/" + id, {headers});
    }

    public getUsersByUsername(username:string, password:string){  //click on botton
      const headers = new HttpHeaders({
        Authorization : 'Basic '+ btoa(username+":"+password)});

      return this.http.get(this.baseURL + + "/username/" + username, {headers});
    }

  public getUsersByPartialUsername(partialUsername: string, username:string, password:string){  //click on botton
    const headers = new HttpHeaders({
      Authorization : 'Basic '+ btoa(username+":"+password)});

    return this.http.get(this.baseURL + + "/username/like/" + partialUsername, {headers});
  }


}
