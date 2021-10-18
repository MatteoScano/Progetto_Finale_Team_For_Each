import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiInterface } from '../models/apiMovie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

    private baseURL = 'https://api.themoviedb.org';
    private apiKey = "d5ac4153b7b34b3ef31b49edd9731e04";

    constructor( private http : HttpClient) { }

    getMarvelList(){
        return this.http.get<MovieApiInterface>(this.baseURL+"/4/list/5?api_key="+this.apiKey);
    } // cambiando il numero di lista list/4 appaiono altre liste di film

    getMovieById(id:number){
      return this.http.get<MovieApiInterface>(this.baseURL+"/3/movie/"+id+"?api_key="+this.apiKey);
    }

    /*metodi get movie in base al genere*/

    getDramaMovieList(){
      return this.http.get<MovieApiInterface>(this.baseURL+"/4/discover/movie?api_key="+this.apiKey+"&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10");
    }
    getComedyMovieList(){
      return this.http.get<MovieApiInterface>(this.baseURL+"/4/discover/movie?api_key="+this.apiKey+"&with_genres=35&sort_by=vote_average.desc&vote_count.gte=10");
    }
    getScienceFictionList(){
      return this.http.get<MovieApiInterface>(this.baseURL+"/4/discover/movie?api_key="+this.apiKey+"&with_genres=878&sort_by=vote_average.desc&vote_count.gte=10");
    }
    getRomanceFictionList(){
      return this.http.get<MovieApiInterface>(this.baseURL+"/4/discover/movie?api_key="+this.apiKey+"&with_genres=10749&sort_by=vote_average.desc&vote_count.gte=10");
    }

}
