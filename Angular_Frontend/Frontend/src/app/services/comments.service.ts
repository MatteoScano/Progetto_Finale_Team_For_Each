import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentsInterface } from '../models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  //spostare la get dell'id dell'user qui?

  private baseURL = 'http://localhost:5000/comments';

  constructor( private http : HttpClient) { }

  getComments(){
    return this.http.get<any>(this.baseURL);
  }

  getUserComments(id : number){
    return this.http.get<any>(this.baseURL+"?user-id="+id);
  }

  addComment = (userId : number, movieId : number, data: CommentsInterface) => {
    return this.http.post<CommentsInterface>(this.baseURL, {
      "userId": userId,
      "movieId": movieId,
      "body": data.body
    });
  };
}
