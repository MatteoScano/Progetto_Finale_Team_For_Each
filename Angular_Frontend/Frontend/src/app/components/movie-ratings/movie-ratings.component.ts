import { Router, ActivatedRoute } from '@angular/router';
import { MovieRatingService } from './../../services/movieRatings/movie-ratings.service';
import { Component, OnInit, VERSION } from '@angular/core';
import { ResultInterface } from '../../models/apiMovie.model';
import { MovieRatingsArrayInterface, MovieRatingsInterface } from '../../models/movie-ratings.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-ratings',
  templateUrl: './movie-ratings.component.html',
  styleUrls: ['./movie-ratings.component.css']
})
export class MovieRatingsComponent implements OnInit {

  movie_id_api: ResultInterface; // questo é il contenitore del film singolo
  movie_id_laravel: MovieRatingsArrayInterface // questo e il contenitore per la post

  ratings: MovieRatingsInterface
  result: MovieRatingsArrayInterface[]
  //ratingEntry: MovieRatingsArrayInterface  = {movie_rating: 2, movie_id: 555, user_id: 332}

  newRating: MovieRatingsArrayInterface
  supportoApiId: ResultInterface         // variabile di supporto GET api Id
  name = "Angular " + VERSION.major;      // variabile allegata allo star rating (vedi documentazione notion)
  starRating: MovieRatingsArrayInterface; // StarRating contiene il valore relativa alla stella che l´ utente clicca
  currentRate = 0;                          // mostra il  valore input utente valore number

  constructor(private route: ActivatedRoute, private movieRatingService: MovieRatingService, private router: Router) { }

  ngOnInit(): void {
    this.getMovieRatingsOnComponent();

  }

  // Funzione che trasforma il tipo di dato per effettuare POST
  getmovieIdApi() {
    this.movie_id_laravel.movie_id = this.movie_id_api.id

  }

  // Funzione che effettua chiamata http per ottenere dati rating presenti in Laravel DB
  getMovieRatingsOnComponent() {
    this.movieRatingService.getratings().subscribe(

      response => {
        console.log("Ho Ottenuto i ratings");
        this.ratings = response;
        console.log("I ratings ottenuti sono:", response);
        console.log("I dati Stringyfied: " + JSON.stringify(this.ratings));
        this.result = this.ratings.data;
        console.log(this.result);
        //console.log(this.ratingEntry.movie_id)
      },
      error => console.log(error)
    )
  }

  // Funzione che effetua una post utile a salvare il rating di uno user n e un movie id
  postMovieRating(form: NgForm): void {
    this.newRating.movie_rating = form.form.value;
    console.log(this.starRating)
    console.log(this.newRating);
    this.movieRatingService.addRating(this.newRating).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
      });
  };

  // Funzione GET rating input rating star (vedi Html)
  viewRatingOnStar() {
    console.log(this.starRating)
    console.log(this.currentRate)
  }


}
