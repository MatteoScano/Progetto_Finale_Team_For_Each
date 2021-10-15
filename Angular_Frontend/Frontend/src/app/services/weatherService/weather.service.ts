import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})



export class WeatherSService {

  private baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Quartu%20Sant'Elena%2C%2088%2C%20IT?unitGroup=us"; // URL Statico
  private apiKey = "JE9U4T8QHBQ5XDRM8DVVBWB6B" //Chiave di accesso
  private currentWeather = "&include=current" // Opzione per meteo attuale


  constructor(private http: HttpClient) { } // Injection servizio di richiesta http



  getterWeatherData(){ // funzione che richiama indirizzo meteo
    return this.http.get<any>(this.baseURL + "&key=" + this.apiKey + this.currentWeather);
}
}
