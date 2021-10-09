import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../../services/moviesapi.service';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';

@Component({
  selector: 'app-movies-api',
  templateUrl: './movies-api.component.html',
  styleUrls: ['./movies-api.component.css']
})
export class MoviesApiComponent implements OnInit {

  movies : MovieApiInterface;
  results : ResultInterface[];

  constructor(private apiService:MoviesApiService) { }

  ngOnInit(): void {
    this.getMarvelListOnComponent();
  }

  getMarvelListOnComponent(){
    this.apiService.getMarvelList().subscribe(
      response => {
        //se è andato tutto bene, allora:
        console.log("ho ottenuto i dati!")
        this.movies = response;
        console.log("i dati ottenuti sono: ", this.movies);
        this.results= this.movies.results;
        console.log("results: ", this.results)
        //console.log("I dati stringify: " + JSON.stringify(this.movies))
      },
      error => console.log(error)
    )
  }

}
