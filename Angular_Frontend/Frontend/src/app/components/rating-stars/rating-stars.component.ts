import { Component, OnInit } from '@angular/core';
import { MovieRatingInterface } from 'src/app/models/movie-ratings.model';
import { DataInterface } from 'src/app/models/movie-ratings.model';
import { MovieRatingService } from './../../services/movieRatings/movie-ratings.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent implements OnInit {

public starRating: DataInterface;
public ratings:MovieRatingInterface;
public result: DataInterface [];


  //currentRating = 3;

  constructor(private movieRatingsService: MovieRatingService, private router : Router ) {


  }

  ngOnInit(): void {
    this.getStarRatings();
  }


  getStarRatings() {
    this.movieRatingsService.getratings().subscribe(

      response => {
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
