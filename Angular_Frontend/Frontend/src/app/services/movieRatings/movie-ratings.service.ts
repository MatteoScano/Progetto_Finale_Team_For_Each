
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';







@Injectable({
  providedIn: 'root'
})
export class MovieRatingService {

  private api ="http://127.0.0.1:8000";




  constructor(private HttpClient: HttpClient) { }

  getratings() {
    return this.HttpClient.get<any>(this.api + "/api/movie_ratings"); //http://127.0.0.1:8000/api/movie_ratings
  }

  getratingsByUserId(user_id: number) {
    return this.HttpClient.get<any>(this.api + "/api/movie_ratings/user_id/" + user_id); //http://127.0.0.1:8000/api/movie_ratings/
  }


  getratingsByMovieId(movie_id: number) {
    return this.HttpClient.get<any>(this.api + "/api/movie_ratings/movie_id/{movieId}" ); //http://127.0.0.1:8000/api/movie_ratings
  }
}

// localhost:8000/api/movie_ratings/user_id/42

//localhost:4200/movie_ratings/user_id/7
//localhost:8000/api/movie_ratings



//http://127.0.0.1:4200/api/movie_ratings/2


// Route::get('/movie_ratings/movie_id/{movieId}', [MovieRatingController::class, 'getMovieRatingsByMovieId']);

//movie_rating: number,
//movie_id: number,
//user_id:number
