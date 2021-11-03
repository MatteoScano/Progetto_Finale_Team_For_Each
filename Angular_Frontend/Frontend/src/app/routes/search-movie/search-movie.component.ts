import { Router } from '@angular/router';
import { MoviesApiService } from './../../services/moviesapi.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  title: string;
  movies: any;
  results: any[];
  alertNoMovie = false;

  basicImageUrl: string = "https://image.tmdb.org/t/p/w185"

  constructor(private apiService: MoviesApiService, private router: Router) { }

  ngOnInit(): void {
  }

  //Cerca il titolo inserito tra tutti i film presenti in theMovieDB
  getMovieListOnComponent(form: NgForm) {
    this.title = form.form.value.title;
    this.apiService.getMovieByTitle(this.title).subscribe(
      response => {
        //se è andato tutto bene, allora:
        this.movies = response;
        console.log("Dati dei film: ", this.movies);
        this.results = this.movies.results;
        console.log("Results: ", this.results)
        if (this.results.length == 0) {
          this.alertNoMovie = true;
        } else {
          this.alertNoMovie = false;
        }
        console.log("alert out", this.alertNoMovie);


      },
      error => console.log(error)
    )
  }
  goToDetails(id) {
    this.router.navigateByUrl('/movieApiDetails/' + id);
  }



}
