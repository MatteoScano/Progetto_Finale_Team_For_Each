import { Pipe, PipeTransform } from '@angular/core';
import { CommentsInterface } from 'src/app/models/comments.model';

@Pipe({
  name: 'commentsByMovieId'
})
export class CommentsByMovieIdPipe implements PipeTransform {

  transform(comments: CommentsInterface[], movieId: number): Array<CommentsInterface> {
    let myArray = [];
    if (!comments) return;
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].movieId == movieId) {
        myArray.push(comments[i]);
      }
    }
    return myArray;
  }

}
