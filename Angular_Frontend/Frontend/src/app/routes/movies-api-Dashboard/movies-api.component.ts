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
  movies : MovieApiInterface;
  results : ResultInterface[];

  //variabili METEO api
  weatherFatherBis: currentWeatherInterface;
  currentWeatherBis : ConditionsInterface[];
  data:any

  public weatherFather: currentWeatherFather;
  public weatherArray: CurrentWeather[];
  public currentWeather : CurrentWeather;

  constructor(private apiService:MoviesApiService, private weatherService:WeatherSService, private router : Router) { }

  ngOnInit(): void {
    this.exGetterWeatherData();
    this.getterWeatherDataOnComponent();
    this.getMovieByCurrentWeather(this.data.conditions);  //DA ULTIMARE IL PASSAGGIO PARAMETRO!
    //this.getMarvelListOnComponent();                    //Prende lista solo dei film marvel

  }

  getterWeatherDataOnComponent() {
    this.weatherService.getWeatherData().subscribe((
     response:any) => {
       //se è andato tutto bene, allora:
      this.weatherFatherBis = response;
      console.log("weatherFatherBis: ", this.weatherFatherBis)
      this.data= this.weatherFatherBis.currentConditions;
      console.log("Data: ", this.data);
      console.log("data conditions"+this.data.conditions);
    },
  error =>console.log(error)
    )
}

exGetterWeatherData() {
  this.weatherService.getWeatherData().subscribe((
    response:any)=> {
    console.log("Previsioni meteo: ")
    this.weatherFather = response;
    console.log(this.weatherFather)
    this.weatherArray = this.weatherFather.days;
    console.log(this.weatherFather.days)
    },
    error =>console.log(error)
  )

    }
//visualizza la lista dei film Marvel
getMarvelListOnComponent(){
  this.apiService.getMarvelList().subscribe(
    response => {
      //se è andato tutto bene, allora:
      this.movies = response;
      console.log("Dati dei film: ", this.movies);
      this.results= this.movies.results;
      console.log("Results: ", this.results)
      //console.log("I dati stringify: " + JSON.stringify(this.movies))
    },
    error => console.log(error)
  )
}
  getMovieByCurrentWeather(condizioniMeteo: string) {
    console.log("data conditions prima dello switch"+condizioniMeteo);
    switch(condizioniMeteo) {
      case "Clear": {
      this.getDramasMovieListOnComponent();
      break;
      }
      case "Rain": {
        this.getComedyMovieListOnComponent();
      break;
      }
      case "Snow": {
        this.getComedyMovieListOnComponent();
      break;
      }
      case "Partially cloudy": {
        this.getScienceFictionListOnComponent();
      break;
      }
      default:{
          console.log("default");
      break;
      }
    }
}

//visualizza i film Drama
  getDramasMovieListOnComponent(){
    this.apiService.getDramaMovieList().subscribe(
      response => {
        this.movies = response;
        this.results= this.movies.results;
      },
      error => console.log(error)
    )
  }
  //Visualizza i film comedy
  getComedyMovieListOnComponent(){
    this.apiService.getComedyMovieList().subscribe(
      response => {
        this.movies = response;
        this.results= this.movies.results;
      },
      error => console.log(error)
    )
  }
  //Visualizza i film science fiction
  getScienceFictionListOnComponent(){
    this.apiService.getScienceFictionList().subscribe(
      response => {
        this.movies = response;
        this.results= this.movies.results;
      },
      error => console.log(error)
    )
  }
 //Visualizza i film romantici
  getRomanceFictionListOnComponent(){
    this.apiService.getRomanceFictionList().subscribe(
      response => {
        this.movies = response;
        this.results= this.movies.results;
      },
      error => console.log(error)
    )
  }



  goToDetails(id){
    this.router.navigateByUrl('/movieApiDetails/'+id);
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
