import { Pipe, PipeTransform } from '@angular/core';
import { MovieData } from 'src/app/models/data.model';
import { CommentsInterface } from '../../models/comments.model';

@Pipe({
  name: 'listFilteredByUserId'
})
export class ListFilteredByUserIdPipe implements PipeTransform {

  transform(movies: MovieData[], userId: number): Array<MovieData> {
    let myArray = [];
    if(!movies) return;
    for(let i=0;i<movies.length;i++){
      if(movies[i].user_id==userId && movies[i].seen==true){
        myArray.push(movies[i]);

      }
    }
    return myArray;
  }

}


