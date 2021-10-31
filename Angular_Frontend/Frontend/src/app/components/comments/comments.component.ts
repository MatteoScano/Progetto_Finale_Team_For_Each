import { UserDataInterface } from './../../models/user.model';
import { LoginService } from 'src/app/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { CommentsInterface } from 'src/app/models/comments.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

   //Prende lo username della sessione, nell'html visualizza la pagina solo se l'utente è amministratore
   //variabili utente
   usernameIsAdmin : string = sessionStorage.getItem('username');

   comments : CommentsInterface;



  constructor(private commentService:CommentsService, private router : Router) { }

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

  goToUserComments(){
    let user = sessionStorage.getItem('username');
    this.router.navigate(['comments/user/'+ user]);
  }

  deleteCommentButton(id) {
    this.commentService.deleteComment(id)
      .subscribe(data => {
      }, (err) => {
        console.log(err);
      });
  }

   //Metodo che aggiorna la pagina
   reloadPage() {
    window.location.reload();
  }

}
