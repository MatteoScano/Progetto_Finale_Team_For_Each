import { CurrentWeather } from './../../models/weather.model';
import { WeatherSService } from './../../services/weatherService/weather.service';
import { Component, OnInit } from '@angular/core';
import { currentWeatherFather } from './../../models/weather.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

 public weatherFather: currentWeatherFather;
 public weatherArray: CurrentWeather[];
 public currentWeather : CurrentWeather;

  constructor(private weatherService : WeatherSService, private Router: Router) { }

  ngOnInit(): void {
    //this.exGetterWeatherData();
    this.getMovieByCurrentWeather(this.weatherArray);
  }


  exGetterWeatherData() {
this.weatherService.getterWeatherData().subscribe((
  response:any)=> {
  console.log("Il Meteo Attuale: ")
  this.weatherFather = response;
  console.log(this.weatherFather)
  this.weatherArray = this.weatherFather.days;
  console.log(this.weatherFather.days)


  },
  error =>console.log(error)
)

  }

  getMovieByCurrentWeather(weather : CurrentWeather[]) {
      switch(weather[0].conditions) {
        case "clear": {
        console.log("genereScelto: Clear");
        break;
        }
        case "rain": {
        console.log("genereScelto: Rain");
        break;
        }
        case "Partially cloudy": {
        console.log("genereScelto: Nuvoloso");
        break;
        }
        default:{
            console.log("default");
        break;
        }
      }
  }

}
