import { MovieRatingsArrayInterface } from './../../models/movie-ratings.model';
import { ApiPictureService } from 'src/app/services/api-picture.service';
import { ResultInterface } from './../../models/apiMovie.model';
import { MoviesApiService } from './../../services/moviesapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { MovieRatingsInterface } from 'src/app/models/movie-ratings.model';
import { MovieRatingService } from '../../services/movieRatings/movie-ratings.service';
import { NgForm } from '@angular/forms';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { LoginService } from 'src/app/services/login/login.service';



@Component({
  selector: 'app-api-movie-details',
  templateUrl: './api-movie-details.component.html',
  styleUrls: ['./api-movie-details.component.css']
})

export class ApiMovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieApiService: MoviesApiService,
    private pictureService: ApiPictureService, private movieRatingService: MovieRatingService,
    private userService: LoginService, private router: Router) { }

  // RATINGS
  ratings: MovieRatingsInterface // ottiene dati in arrivo da getMovieRatingsOnComponent
  result: MovieRatingsArrayInterface[] // Array Modello Movie-Ratings.model
  ratingEntry: MovieRatingsArrayInterface
  //currentRating: number;
  newRating: MovieRatingsArrayInterface;
  starRating: MovieRatingsArrayInterface;
  movie_rating_id: number;
  ratingSubmit: MovieRatingsArrayInterface;
  ratedOptions = ['1', '2', '3', '4', '5']
  name = "Angular " + VERSION.major;

  // IMMAGINI
  imagePath: string
  private mainUrl: ApiPictureService
  movieDetailsEntry: ResultInterface;
  id: number;
  pathComplete: string


  // ID USER
  username: string = sessionStorage.getItem('username');
  userId: number;
  user: any;


  // FUNZIONI
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUserIdByUsername();
    this.getMovieApiDetails();
    this.getMovieRatingsOnComponent();
  }


  // FUNZIONI
  getUserIdByUsername() {
    this.userService.getUserByUsername(this.username, "admin", "admin").subscribe(
      (response: any) => {
        this.user = response;
        this.userId = this.user.id;
      });
  }

  getMovieApiDetails() {
    this.movieApiService.getMovieById(this.id).subscribe((res: any) => {
      this.movieDetailsEntry = res;
      console.log("Id del film scelto");
      this.imagePath = "https://image.tmdb.org/t/p/w780" + this.movieDetailsEntry.backdrop_path //Da rimettere original size
    })
  }


  getMoviePosters() { //Questa andra messa nella dashboard
    this.pictureService.getMoviePics(this.movieDetailsEntry.backdrop_path).subscribe((res: any) => {
      this.movieDetailsEntry = res;
      this.pathComplete = this.combinePath(this.mainUrl, this.movieDetailsEntry.backdrop_path)
      console.log(this.pathComplete)
    }
    )
  }


  combinePath(mainUrl: ApiPictureService, backdrop_path: string) {
    return this.mainUrl + this.movieDetailsEntry.backdrop_path;
  }

  onSubmit(form: NgForm) {
    form.form.value.movie_id = this.movieDetailsEntry.id,
      form.form.value.user_id = this.user.id
    //form.form.value.currentRating = parseInt(form.form.value.currentRating);
    form.form.value.movie_rating = parseInt(form.form.value.movie_rating);
    this.ratingSubmit = form.form.value;
    console.log("RISULTATI RATING", this.ratingSubmit);
    this.movieRatingService.addMovieRating(this.ratingSubmit).subscribe(response => {

    },
      (err) => {
        //fai qualcosa
        console.log(err)
      }
    )
  }

  getMovieRatingsOnComponent() {
    this.movieRatingService.getratings().subscribe(
      response => {
        console.log("Ho Ottenuto i ratings");
        this.ratings = response;
        console.log("I ratings ottenuti sono:", response);
        console.log("I dati Stringyfied: " + JSON.stringify(this.ratings));
        this.result = this.ratings.data;
      },
      error => console.log(error)
    )
  }

  goToMovieComments() {
    this.router.navigate(['/movieComments'], { state: { data: this.id } }); //invio dell'id alla pagina di destinazione
  }

  goToAddComment() {
    this.router.navigate(['/addComment'], { state: { data: this.id } });
  }

}
