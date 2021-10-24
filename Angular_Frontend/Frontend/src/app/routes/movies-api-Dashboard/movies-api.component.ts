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
  data: any

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
    this.exGetterWeatherData();
    this.getterWeatherDataOnComponent();
    //this.getMarvelListOnComponent();           //Prende lista solo dei film marvel
  }



  // METEO FUNZIONI
  getMovieByCurrentWeather() {
    console.log("data conditions prima dello switch" + this.todaysWeather);

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

      this.orarioAttuale = parseInt(this.data.datetime);
      console.log(" Stringa intera" + this.orarioAttuale)



      // COSTRUTTI CONDIZIONALI SUGGERIMENTI FILM IN BASE AL METEO E ALLìORARIO DELLA GIORNATA:
      //MATTINA
      if(this.orarioAttuale > 7 && this.orarioAttuale < 13){
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
        else{
          this.getScienceFictionListOnComponent();
        }
    }
      //POMERIGGIO
      if(this.orarioAttuale > 13 && this.orarioAttuale < 19){
        if (this.todaysWeather == "Clear") {
          console.log("Valore mattina: " + this.mattina)
          console.log("Orario attuale: " + this.orarioAttuale)
          this.getWesternMovieListOnComponent();
        }
        if (this.todaysWeather == "Rain") {
          console.log("Valore mattina: " + this.mattina)
          console.log("Orario attuale: " + this.orarioAttuale)
          this.getFamilyMovieListOnComponent();
        }
        if (this.todaysWeather == "Thunderstorm") {
          console.log("Valore mattina: " + this.mattina)
          console.log("Orario attuale: " + this.orarioAttuale)
          this.getThrillerMovieListOnComponent();
        }
        if (this.todaysWeather == "Partially cloudy") {
          console.log("Valore mattina: " + this.mattina)
          console.log("Orario attuale: " + this.orarioAttuale)
          this.getComedyMovieListOnComponent();
        }
        else{
          this.getWesternMovieListOnComponent();
        }
    }
      //SERA
      if(this.orarioAttuale > 19 && this.orarioAttuale < 24){
        if (this.todaysWeather == "Clear") {
          this.getAdventuresMovieListOnComponent();
        }
        if (this.todaysWeather == "Rain") {
          this.getDramasMovieListOnComponent();
        }
        if (this.todaysWeather == "Thunderstorm") {
          console.log("Valore mattina: " + this.mattina)
          console.log("Orario attuale: " + this.orarioAttuale)
          this.getHorrorMovieListOnComponent();
        }
        if (this.todaysWeather == "Partially cloudy") {
          console.log("Valore mattina: " + this.mattina)
          console.log("Orario attuale: " + this.orarioAttuale)
          this.getThrillerMovieListOnComponent();
        }
        else{
          this.getDramasMovieListOnComponent();
        }
    }
       //NOTTE
      if(this.orarioAttuale > 0 && this.orarioAttuale < 7){
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
      else{
        this.getThrillerMovieListOnComponent();
      }
    }
    },
      error => console.log(error)
    )
  }

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

  goToDetails(id) {
    this.router.navigateByUrl('/movieApiDetails/' + id);
  }

}

//lista totale delle condizioni meteo
/*
type_1	Blowing Or Drifting Snow
type_2	Drizzle
type_3	Heavy Drizzle
type_4	Light Drizzle
type_5	Heavy Drizzle/Rain
type_6	Light Drizzle/Rain
type_7	Duststorm
type_8	Fog
type_9	Freezing Drizzle/Freezing Rain
type_10	Heavy Freezing Drizzle/Freezing Rain
type_11	Light Freezing Drizzle/Freezing Rain
type_12	Freezing Fog
type_13	Heavy Freezing Rain
type_14	Light Freezing Rain
type_15	Funnel Cloud/Tornado
type_16	Hail Showers
type_17	Ice
type_18	Lightning Without Thunder
type_19	Mist
type_20	Precipitation In Vicinity
type_21	Rain
type_22	Heavy Rain And Snow
type_23	Light Rain And Snow
type_24	Rain Showers
type_25	Heavy Rain
type_26	Light Rain
type_27	Sky Coverage Decreasing
type_28	Sky Coverage Increasing
type_29	Sky Unchanged
type_30	Smoke Or Haze
type_31	Snow
type_32	Snow And Rain Showers
type_33	Snow Showers
type_34	Heavy Snow
type_35	Light Snow
type_36	Squalls
type_37	Thunderstorm
type_38	Thunderstorm Without Precipitation
type_39	Diamond Dust
type_40	Hail
type_41	Overcast
type_42	Partially cloudy
type_43	Clear
*/
