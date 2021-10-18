export interface currentWeatherInterface {
  currentConditions: ConditionsInterface[]
}

export interface ConditionsInterface {
  conditions: string,
  sunset: string,
  sunrise: string,
  humidity: number,
  windspeed: number,
  resolvedAddress: string,
  temp: number,
  datetime:string
}

//DAYS
export interface currentWeatherFather {
  days: CurrentWeather[]
}


export interface CurrentWeather {
    conditions: string;
    sunset: string;
    sunrise: string;
}

