import { MovieRatingService } from './../../services/movieRatings/movie-ratings.service';
import { DataInterface } from 'src/app/models/movie-ratings.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieRatingInterface } from 'src/app/models/movie-ratings.model';

//  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -


@Component({
  selector: 'app-movie-ratings',
  templateUrl: './movie-ratings.component.html',
  styleUrls: ['./movie-ratings.component.css']
})


//  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -




export class MovieRatingComponent implements OnInit {


  public ratings:MovieRatingInterface;
  public result: DataInterface [];


  constructor(private movieRatingsService: MovieRatingService, private router : Router) { }

  ngOnInit(): void {
    this.getMovieRatingsOnComponent();

  }


  //  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -



  getMovieRatingsOnComponent() {
      this.movieRatingsService.getratings().subscribe(

        response => {
        console.log("Ho Ottenuto i ratings");
        this.ratings = response;
        console.log("I ratings ottenuti sono:", response);
        console.log("I dati Stringyfied: " + JSON.stringify(this.ratings));
        this.result = this.ratings.data;
        console.log(this.result);
        },
        error => console.log(error)
      )
  }







}
