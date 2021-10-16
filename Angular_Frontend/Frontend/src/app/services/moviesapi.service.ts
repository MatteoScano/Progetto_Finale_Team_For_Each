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
        return this.http.get<MovieApiInterface>(this.baseURL+"/4/list/4?api_key="+this.apiKey);
    } // cambiando il numero di lista list/4 appaiono altre liste di film

    getMovieById(id:number){
      return this.http.get<MovieApiInterface>(this.baseURL+"/3/movie/"+id+"?api_key="+this.apiKey);
    }

}
