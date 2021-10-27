import { Pipe, PipeTransform } from '@angular/core';
import { CommentsInterface } from '../models/comments.model';
import { MovieCommentInterface } from '../models/movieComment';

@Pipe({
  name: 'idToTitle'
})
export class IdToTitlePipe implements PipeTransform {

  transform(comments: CommentsInterface[]): any {
    let movieComment : MovieCommentInterface[];
    for(let i=0; i<comments.length; i++){
      movieComment[i].comment = 'body';
      movieComment[i].title = 'title';
    }
    return movieComment;
  }

}
