import { Router, ActivatedRoute } from '@angular/router';
import { MovieRatingService } from './../../services/movieRatings/movie-ratings.service';
import { Component, OnInit } from '@angular/core';
import { ResultInterface } from '../../models/apiMovie.model';
import { MovieRatingsArrayInterface, MovieRatingsInterface } from '../../models/movie-ratings.model';

@Component({
  selector: 'app-movie-ratings',
  templateUrl: './movie-ratings.component.html',
  styleUrls: ['./movie-ratings.component.css']
})
export class MovieRatingsComponent implements OnInit {

  movie_id_api : ResultInterface; // questo é il contenitore del film singolo
  movie_id_laravel : MovieRatingsArrayInterface // questo e il contenitore per la post



  constructor(private route: ActivatedRoute, private movieRatingService : MovieRatingService, private router: Router) { }

  ngOnInit(): void {

  }

  // Funzione che trasforma il tipo di dato per effettuare POST
  getmovieIdApi(){
    this. movie_id_laravel.movie_id = this.movie_id_api.id

  }





}
