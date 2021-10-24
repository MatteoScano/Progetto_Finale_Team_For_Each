import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})



export class WeatherSService {

  private baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Cagliari%2C%2088%2C%20IT?unitGroup=us"; // URL Statico
  private apiKey = "Y5CPR3UAMP4G8NEG8BZXVEK6E" //Chiave di accesso
  private currentWeather = "&include=current" // Opzione per meteo attuale


  constructor(private http: HttpClient) { } // Injection servizio di richiesta http



  getWeatherData() { // funzione che richiama indirizzo meteo
    return this.http.get<any>(this.baseURL + "&key=" + this.apiKey + this.currentWeather);
  }
}
