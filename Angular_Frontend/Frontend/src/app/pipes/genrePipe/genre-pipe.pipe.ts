import { Pipe, PipeTransform } from '@angular/core';
import { MovieData } from 'src/app/models/data.model';

@Pipe({
  name: 'genrePipe'
})
export class GenrePipePipe implements PipeTransform {

  transform(movies: MovieData [], genre: string): Array<MovieData> {
    let myArray =[];
    if(!movies) return;
    for(let i=0;i<movies.length;i++){
      if(movies[i].genre==genre){
        myArray.push(movies[i]);
      }
    }
    return myArray;
  }

}
