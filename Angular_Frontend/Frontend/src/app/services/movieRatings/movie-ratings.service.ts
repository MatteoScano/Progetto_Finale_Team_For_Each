
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRatingsArrayInterface } from '../../models/movie-ratings.model';



//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


@Injectable({
  providedIn: 'root'
})
export class MovieRatingService {


  private laravelUrl ="http://127.0.0.1:8000";    // Variabile che contiene l indirizzo di chiamata principale chiamate http


  constructor(private http: HttpClient) { }       // costruttore con parametro injectable


  // GETTER

  getratings() {
    return this.http.get<any>(this.laravelUrl + "/api/movie_ratings");      //Funzione che chiama tutti i valori dei campi di interfaccia DataInterface in movie-ratings.model.ts
  }



  getratingsByUserId(user_id:  MovieRatingsArrayInterface) {
    return this.http.get<any>(this.laravelUrl + "/api/movie_ratings/user_id/" + user_id);
  }


  getratingsByMovieId(movie_id:  MovieRatingsArrayInterface) {
    return this.http.get<any>(this.laravelUrl + "/api/movie_ratings/movie_id/" + movie_id );
  }



  // ADDER

  addRating = (rating:  MovieRatingsArrayInterface) => {
    return this.http.post< MovieRatingsArrayInterface>(this.laravelUrl, {
      "rating": rating.movie_rating,
      "movie_id": rating.movie_id,
      "user_id": rating.user_id,

    });
  };


  addMovieRating = (data: MovieRatingsArrayInterface) => {
    return this.http.post<MovieRatingsArrayInterface>(this.laravelUrl + '/api/movie_ratings/', {
      "movie_rating": data.movie_rating,
      "movie_id": data.movie_id,
      "user_id" : data.user_id

    });
  };

  // REMOVER

  deleteRating( movie_id ){
    return this.http.delete(this.laravelUrl + "/" + movie_id)
  }


  // EDITOR

  editRating = (rating:  MovieRatingsArrayInterface) => {
    return this.http.put(this.laravelUrl + '/' + rating.movie_id, {
      "rating": rating.movie_rating,
      "movie_id": rating.movie_id,
      "user_id": rating.user_id
    });
  };




}

// localhost:8000/api/movie_ratings/user_id/42

//localhost:4200/movie_ratings/user_id/7
//localhost:8000/api/movie_ratings



//http://127.0.0.1:4200/api/movie_ratings/2


// Route::get('/movie_ratings/movie_id/{movieId}', [MovieRatingController::class, 'getMovieRatingsByMovieId']);

//movie_rating: number,
//movie_id: number,
//user_id:number
