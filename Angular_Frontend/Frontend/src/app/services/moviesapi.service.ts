import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiInterface } from '../models/apiMovie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

    private baseURL = 'https://api.themoviedb.org/4/';
    private apiKey = "MYKEY";

    constructor( private http : HttpClient) { }

    getMarvelList(){
        return this.http.get<MovieApiInterface>(this.baseURL+"list/1?api_key="+this.apiKey);
    }

}
