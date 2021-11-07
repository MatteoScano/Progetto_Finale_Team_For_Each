import { TimeDataInterface } from './../../models/time.model';
import { currentWeatherInterface } from './../../models/weather.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})



export class WeatherSService {

  private baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/CarloFelice%2C%2088%2C%20IT?unitGroup=us"; // URL Statico
  private apiKey = "9T96JX2DTRZ4M9WVXWYEF7BD5" //Chiave di accesso
  private currentWeather = "&include=current" // Opzione per meteo attuale

  private currentTimeURL = "https://api.ipgeolocation.io/timezone?";
  private timeApiKey = "96ca220c68434606890da54514409595";
  private location = "&tz=Europe/Rome";


  constructor(private http: HttpClient) { } // Injection servizio di richiesta http


  // funzione che richiama indirizzo meteo
  getWeatherData() {
    return this.http.get<any>(this.baseURL + "&key=" + this.apiKey + this.currentWeather);
  }
  //funzione che richiama orario e data attuale
  getCurrentTime() {
    return this.http.get<TimeDataInterface>(this.currentTimeURL + "apiKey=" + this.timeApiKey + this.location);
  }
  //https://api.ipgeolocation.io/timezone?apiKey=API_KEY&tz=America/Los_Angeles
}
