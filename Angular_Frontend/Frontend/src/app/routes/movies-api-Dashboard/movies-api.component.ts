import { WeatherSService } from './../../services/weatherService/weather.service';
import { ConditionsInterface, currentWeatherInterface, currentWeatherFather, CurrentWeather } from './../../models/weather.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../../services/moviesapi.service';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';

@Component({
  selector: 'app-movies-api',
  templateUrl: './movies-api.component.html',
  styleUrls: ['./movies-api.component.css']
})
export class MoviesApiComponent implements OnInit {

  //variabili MOVIES api
  movies: any;
  results: any[];

  //variabili METEO api
  weatherFatherBis: currentWeatherInterface;
  currentWeatherBis: ConditionsInterface[];
  data: any;

  todaysWeather: string

  public weatherFather: currentWeatherFather;
  public weatherArray: CurrentWeather[];
  public currentWeather: CurrentWeather;

  orarioAttuale: number

  mattina: boolean = false
  pomeriggio: boolean = false
  sera: boolean = false

  basicImageUrl: string = "https://image.tmdb.org/t/p/w185"

  constructor(private apiService: MoviesApiService, private weatherService: WeatherSService, private router: Router) { }

  ngOnInit(): void {
    this.getMovieByCurrentWeather();
  }

  // METEO FUNZIONI
  getMovieByCurrentWeather() {

    this.weatherService.getWeatherData().subscribe((
      response: any) => {
      //se è andato tutto bene, allora:
      this.weatherFatherBis = response;
      console.log("weatherFatherBis: ", this.weatherFatherBis);
      this.data = this.weatherFatherBis.currentConditions;
      console.log("Data: ", this.data);

      this.todaysWeather = this.data.conditions;
      console.log("  Dato Test" + this.todaysWeather);

      this.orarioAttuale = parseInt(this.data.datetime);

      // COSTRUTTI CONDIZIONALI SUGGERIMENTI FILM IN BASE AL METEO E ALLìORARIO DELLA GIORNATA:
      //se MATTINA
      if (this.orarioAttuale >= 7 && this.orarioAttuale < 13) {
        if (this.todaysWeather == "Clear") {
          this.getAnimationMovieListOnComponent();
        }
        if (this.todaysWeather == "Rain") {
          this.getComedyMovieListOnComponent();
        }
        if (this.todaysWeather == "Thunderstorm") {
          this.getRomanceFictionListOnComponent();
        }
        if (this.todaysWeather == "Partially cloudy") {
          this.getScienceFictionListOnComponent();
        }
        else {
          this.getScienceFictionListOnComponent();
        }
      }
      //se POMERIGGIO
      if (this.orarioAttuale >= 13 && this.orarioAttuale < 19) {
        if (this.todaysWeather == "Clear") {
          this.getWesternMovieListOnComponent();
        }
        if (this.todaysWeather == "Rain") {
          this.getFamilyMovieListOnComponent();
        }
        if (this.todaysWeather == "Thunderstorm") {
          this.getThrillerMovieListOnComponent();
        }
        if (this.todaysWeather == "Partially cloudy") {
          this.getComedyMovieListOnComponent();
        }
        else {
          this.getWesternMovieListOnComponent();
        }
      }
      //se SERA
      if (this.orarioAttuale >= 19 && this.orarioAttuale < 24) {
        if (this.todaysWeather == "Clear") {
          this.getAdventuresMovieListOnComponent();
        }
        if (this.todaysWeather == "Rain") {
          this.getDramasMovieListOnComponent();
        }
        if (this.todaysWeather == "Thunderstorm") {
          this.getHorrorMovieListOnComponent();
        }
        if (this.todaysWeather == "Partially cloudy") {
          this.getThrillerMovieListOnComponent();
        }
        else {
          this.getDramasMovieListOnComponent();
        }
      }
      //se NOTTE
      if (this.orarioAttuale >= 0 && this.orarioAttuale < 7) {
        if (this.todaysWeather == "Clear") {
          this.getScienceFictionListOnComponent();
        }
        if (this.todaysWeather == "Rain") {
          this.getRomanceFictionListOnComponent();
        }
        if (this.todaysWeather == "Thunderstorm") {
          this.mattina = true;
          this.getHorrorMovieListOnComponent();
        }
        if (this.todaysWeather == "Partially cloudy") {
          this.mattina = true;
          this.getAdventuresMovieListOnComponent();
        }
        else {
          this.getThrillerMovieListOnComponent();
        }
      }
    },
      error => console.log(error)
    )
  }

  //Prende i dati meteo dall'api
  getterWeatherDataOnComponent() {
    this.weatherService.getWeatherData().subscribe((
      response: any) => {
      //se è andato tutto bene, allora:
      this.weatherFatherBis = response;
      console.log("weatherFatherBis: ", this.weatherFatherBis)
      this.data = this.weatherFatherBis.currentConditions;
      console.log("Data: ", this.data);
      console.log("data conditions" + this.data.conditions);
      this.todaysWeather = this.data.conditions;
      console.log("  Dato Test" + this.todaysWeather)
    },
      error => console.log(error)
    )
  }

  exGetterWeatherData() {
    this.weatherService.getWeatherData().subscribe((
      response: any) => {
      console.log("Previsioni meteo: ")
      this.weatherFather = response;
      console.log(this.weatherFather)
      this.weatherArray = this.weatherFather.days;
      console.log(this.weatherFather.days)
    },
      error => console.log(error)
    )

  }
  //visualizza la lista dei film Marvel
  getMarvelListOnComponent() {
    this.apiService.getMarvelList().subscribe(
      response => {
        //se è andato tutto bene, allora:
        this.movies = response;
        console.log("Dati dei film: ", this.movies);
        this.results = this.movies.results;
        console.log("Results: ", this.results)
        //console.log("I dati stringify: " + JSON.stringify(this.movies))
      },
      error => console.log(error)
    )
  }
  //Visualizza i film science fiction
  getScienceFictionListOnComponent() {
    this.apiService.getScienceFictionList().subscribe(
      response => {
        this.movies = response;
        this.results = this.movies.results;
        console.log("Sci-fi Movies: ", this.results)
      },
      error => console.log(error)
    )
  }
  //visualizza i film Drama
  getDramasMovieListOnComponent() {
    this.apiService.getDramaMovieList().subscribe(
      response => {
        this.movies = response;
        this.results = this.movies.results;
        console.log(this.results)
      },
      error => console.log(error)
    )
  }
  //Visualizza i film comedy
  getComedyMovieListOnComponent() {
    this.apiService.getComedyMovieList().subscribe(
      response => {
        this.movies = response;
        this.results = this.movies.results;
        console.log(this.results)
      },
      error => console.log(error)
    )
  }
  //Visualizza i film romantici
  getRomanceFictionListOnComponent() {
    this.apiService.getRomanceFictionList().subscribe(
      response => {
        this.movies = response;
        this.results = this.movies.results;
        console.log(this.results)
      },
      error => console.log(error)
    )
  }

  //animazione
  getAnimationMovieListOnComponent() {
    this.apiService.getAnimationMovieList().subscribe(
      response => {
        this.movies = response;
        this.results = this.movies.results;
        console.log(this.results)
      },
      error => console.log(error)
    )
  }
  //triller
  getThrillerMovieListOnComponent() {
    this.apiService.getThrillerMovieList().subscribe(
      response => {
        this.movies = response;
        this.results = this.movies.results;
        console.log(this.results)
      },
      error => console.log(error)
    )
  }
  //adventures
  getAdventuresMovieListOnComponent() {
    this.apiService.getAdventuresMovieList().subscribe(
      response => {
        this.movies = response;
        this.results = this.movies.results;
        console.log(this.results)
      },
      error => console.log(error)
    )
  }
  //family
  getFamilyMovieListOnComponent() {
    this.apiService.getFamilyMovieList().subscribe(
      response => {
        this.movies = response;
        this.results = this.movies.results;
        console.log(this.results)
      },
      error => console.log(error)
    )
  }
  //Horror
  getHorrorMovieListOnComponent() {
    this.apiService.getHorrorMovieList().subscribe(
      response => {
        this.movies = response;
        this.results = this.movies.results;
        console.log(this.results)
      },
      error => console.log(error)
    )
  }
  //Western
  getWesternMovieListOnComponent() {
    this.apiService.getWesternMovieList().subscribe(
      response => {
        this.movies = response;
        this.results = this.movies.results;
        console.log(this.results)
      },
      error => console.log(error)
    )
  }
  //Al click visualizza i dettagli del film
  goToDetails(id) {
    this.router.navigateByUrl('/movieApiDetails/' + id);
  }

}

