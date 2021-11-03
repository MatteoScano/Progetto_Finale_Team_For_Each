
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRatingsArrayInterface } from '../../models/movie-ratings.model';
import { MovieRatingsInterface } from '../../models/movie-ratings.model';



//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


@Injectable({
  providedIn: 'root'
})
export class MovieRatingService {


  private laravelUrl = "http://127.0.0.1:8000";    // Variabile che contiene l indirizzo di chiamata principale chiamate http


  constructor(private http: HttpClient) { }       // costruttore con parametro injectable


  // GETTER

  getratings() {
    return this.http.get<any>(this.laravelUrl + "/api/movie_ratings");      //Funzione che chiama tutti i valori dei campi di interfaccia DataInterface in movie-ratings.model.ts
  }



  getratingsByUserId(user_id: MovieRatingsArrayInterface) {
    return this.http.get<any>(this.laravelUrl + "/api/movie_ratings/user_id/" + user_id);
  }


  getratingsByMovieId(movie_id: number) {
    return this.http.get<any>(this.laravelUrl + "/api/movie_ratings/movie_id/" + movie_id);
  }



  // ADDER

  addRating = (rating: MovieRatingsArrayInterface) => {
    return this.http.post<MovieRatingsArrayInterface>(this.laravelUrl, {
      "rating": rating.movie_rating,
      "movie_id": rating.movie_id,
      "user_id": rating.user_id,

    });
  };


  addMovieRating = (data: MovieRatingsArrayInterface) => {
    return this.http.post<MovieRatingsArrayInterface>(this.laravelUrl + '/api/movie_ratings/', {
      "movie_rating": data.movie_rating,
      "movie_id": data.movie_id,
      "user_id": data.user_id

    });
  };

  // REMOVER

  deleteRating(movie_id) {
    return this.http.delete(this.laravelUrl + "/" + movie_id)
  }


  // EDITOR

  editRating = (movie_id: number, user_id: number, rating: MovieRatingsArrayInterface) => {
    return this.http.put(this.laravelUrl + '/' + rating.id, {
      "movie_id": movie_id,
      "user_id": user_id,
      "movie_rating": rating.movie_rating,
    });
  };




}

