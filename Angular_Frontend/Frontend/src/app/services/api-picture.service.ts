import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieApiInterface } from '../models/apiMovie.model';
import { ResultInterface } from '../models/apiMovie.model';

@Injectable({
  providedIn: 'root'
})
export class ApiPictureService {

  private mainURL = 'https://image.tmdb.org/t/p/original';
  private containerBackdrop_path: string



  constructor(private http: HttpClient) { }

  getMoviePics(backdrop_path: string) {
    return this.http.get<any>(this.mainURL + backdrop_path)
  }


}
