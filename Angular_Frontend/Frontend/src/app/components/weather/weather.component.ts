import { TimeDataInterface } from './../../models/time.model';
import { CurrentWeather, currentWeatherInterface } from './../../models/weather.model';
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

  weatherFatherBis: currentWeatherInterface; //contiene tutti i dati meteo e previsioni

  dataConditions: any;  //contiente dati condizioni attuali meteo

  results: TimeDataInterface;  //contiene la risposta del tempo attuale

  celsius: any; //contiene valore dati gradi
  celsiusStringa: string;

  constructor(private weatherService: WeatherSService, private Router: Router) { }

  ngOnInit(): void {
    this.GetWeatherData();
    this.getTimeOnComponent();
  }


  // Funzione GET di weatherapi da weather service
  GetWeatherData() {
    this.weatherService.getWeatherData().subscribe((
      response: any) => {
      //se è andato tutto bene, allora:
      this.weatherFatherBis = response;
      console.log("weatherFatherBis: ", this.weatherFatherBis)
      this.dataConditions = this.weatherFatherBis.currentConditions;
      console.log("Data: ", this.dataConditions);
      //(64 °F - 32) × 5/9
      this.celsius = ((this.dataConditions.temp - 32) * 5 / 9).toFixed(1); //parseFloat(num).toFixed(2);
    },
      error => console.log(error)
    )
  }
  // Funzione di supporto GET Ora Corrente
  getTimeOnComponent() {
    this.weatherService.getCurrentTime().subscribe((
      response: any) => {
      this.results = response;
      console.log("Results Time: ", this.results);
    },
      error => console.log(error)
    )
  }


}
