import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { CommentsInterface } from 'src/app/models/comments.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments : CommentsInterface;

  constructor(private commentService:CommentsService) { }

  ngOnInit(): void {
    this.getCommentsOnComponent();
  }

  getCommentsOnComponent(){
    this.commentService.getComments().subscribe(
      response => {
        //se è andato tutto bene, allora:
        console.log("ho ottenuto i dati!")
        this.comments = response;
        //console.log("I dati stringify: " + JSON.stringify(this.movies))
      },
      error => console.log(error)
    )
  }

}
