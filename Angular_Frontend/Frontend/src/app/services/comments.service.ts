import { CommentsInterface } from 'src/app/models/comments.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  private baseURL = 'http://localhost:5000/comments'; //variabile con indirizzo principale chiamata per comemnti

  constructor(private http: HttpClient) { }

  // funzioni dirette di GET da .NET
  getComments() {
    return this.http.get<any>(this.baseURL);
  }

  getComment(id) {
    return this.http.get<any>(this.baseURL + "/" + id);
  }

  getUserComments(id: number) {
    return this.http.get<any>(this.baseURL + "?user-id=" + id);
  }
  // Funzione per aggiunta in .NET di user id, movie id e testo commenti
  addComment = (userId: number, movieId: number, data: CommentsInterface) => {
    return this.http.post<CommentsInterface>(this.baseURL, {
      "userId": userId,
      "movieId": movieId,
      "body": data.body
    });
  }
  // Funzione di eliminazione da sistema .NET
  deleteComment(id) {
    return this.http.delete(this.baseURL + "/" + id);
  }
  // Funzione PUT commenti per l editing di dati di testo in base a relativo user id
  editComment = (data: CommentsInterface) => {
    return this.http.put(this.baseURL + '/' + data.id, {
      "id": data.id,
      "userId": data.userId,
      "movieId": data.movieId,
      "body": data.body
    });
  };
}
