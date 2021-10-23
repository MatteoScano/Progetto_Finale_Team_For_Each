import { Pipe, PipeTransform } from '@angular/core';
import { MovieData } from '../../models/data.model';

@Pipe({
  name: 'listFilteredByMustSee'
})
export class ListFilteredByMustSeePipe implements PipeTransform {

  transform(movies: MovieData[], userId: number): Array<MovieData> {
    let myArray = [];
    if(!movies) return;
    for(let i=0;i<movies.length;i++){
      if(movies[i].user_id==userId && movies[i].must_see==true){
        myArray.push(movies[i]);

      }
    }
    return myArray;
  }

}
