import { MovieData } from './../../models/data.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleFilter'
})
export class DoubleFilterPipe implements PipeTransform {

  transform(movies: MovieData[], genre: string, cast : string): MovieData[] {
    let myArray = [];
    if(!movies) return;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].genre === genre) {
        myArray.push(movies[i])
      }
    }
    return myArray;
  }

}
