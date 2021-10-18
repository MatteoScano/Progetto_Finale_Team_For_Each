
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from '../../models/weather.model';
import { WeatherSService } from 'src/app/services/weatherService/weather.service';




@Component({
  selector: 'app-filter-by-weather-conditions',
  templateUrl: './filter-by-weather-conditions.component.html',
  styleUrls: ['./filter-by-weather-conditions.component.css']
})




export class FilterByWeatherConditionsComponent implements OnInit {

  constructor(private router : Router, private weatherService : WeatherSService) { }

  showResult = false;
  days:string;
  conditions: CurrentWeather[]; //CONTIENE
  conditionsArray = ['Clear','Cloudy','Rain'];

  ngOnInit(): void {
    this.getEntries();
  }

  consoleString(){
    console.log(this.days);
  }

  // ENTRARE NELLA PAGINA DETTAGLI DEI FILM
  goToDetails(id){
    this.router.navigateByUrl('/details/' + id);
  }

  getEntries(){
    this.weatherService.getWeatherData().subscribe( (response : any) => {
      this.conditions = response;
    })
  }

  filterBy(form: NgForm) {
    this.days = form.form.value.days;
    if (this.days) {
      this.showResult = true;
    }
  }




}

