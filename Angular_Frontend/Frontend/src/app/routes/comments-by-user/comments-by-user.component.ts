import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsInterface } from 'src/app/models/comments.model';
import { CommentsService } from 'src/app/services/comments.service';
import { LoginService } from '../../services/login/login.service';
import { UserDataInterface } from './../../models/user.model';

@Component({
  selector: 'app-comments-by-user',
  templateUrl: './comments-by-user.component.html',
  styleUrls: ['./comments-by-user.component.css']
})
export class CommentsByUserComponent implements OnInit, AfterContentChecked {

  comments : CommentsInterface;
  username : string = sessionStorage.getItem('username');
  userId : number;
  user : any;
  changeDetected : boolean = false;
  
  constructor(private commentService:CommentsService, private userService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.getUserIdByUsername();
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    if (this.userId !== undefined && this.changeDetected === false){
      this.changeDetected = true;
      this.getUserComments();
    }
  }

  getUserIdByUsername(){ 
    this.userService.getUserByUsername(this.username,"admin","admin").subscribe(
    (response : any) => {
      this.user = response;
      this.userId = this.user.id;
      console.log("L'utente ha il seguente Id:"); 
      console.log(this.userId);
    });
  }

  getUserComments(){
    this.commentService.getUserComments(this.userId).subscribe(
      response  => {
        this.comments = response;
        console.log("ho ottenuto i dati:");
        console.log(this.comments);
      },
      error => console.log(error)
    )
  }

  deleteCommentButton(id){
    this.commentService.deleteComment(id)
    .subscribe(data => {
      this.router.navigate(['/dashboard']);
    }, (err) => {
      console.log(err);
      this.router.navigate(['/dashboard']);
    });
  }
}
