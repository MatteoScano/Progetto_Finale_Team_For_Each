
  export interface MovieRatingsInterface { //MOdello DB Laravel
    Author: string,
    Version: number,
    data: MovieRatingsArrayInterface[]
  }

  export interface MovieRatingsArrayInterface{ //Modello DB Laravel
    id : number;
    movie_rating : number,
    movie_id: number,
    user_id?:number
  }
