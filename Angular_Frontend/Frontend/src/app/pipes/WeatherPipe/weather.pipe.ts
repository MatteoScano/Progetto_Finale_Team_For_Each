import { Pipe, PipeTransform } from '@angular/core';
import { CurrentWeather } from '../../models/weather.model';

@Pipe({
  name: 'weatherPipe'
})
export class WeatherPipe implements PipeTransform {



    transform(weatherArray: CurrentWeather [], conditions: string): Array<CurrentWeather> {
      let myArray =[];
      if(!conditions) return;
      for(let i=0;i<conditions.length;i++){
        if(weatherArray[i].conditions==conditions){
          myArray.push(weatherArray[i]);
        }
      }
      return myArray;
    }



}
