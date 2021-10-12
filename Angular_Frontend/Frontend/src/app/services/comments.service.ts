import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private baseURL = 'http://localhost:5000/comments';

  constructor( private http : HttpClient) { }

  getComments(){
    return this.http.get<any>(this.baseURL);
  }
}
