import { CommentsInterface } from './../../models/comments.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor(private commentsService: CommentsService, private router: Router, private userService:LoginService) { }

  ngOnInit(): void { 
    this.getUserIdByUsername();
  }

  dataEntry : CommentsInterface;
  user : any;
  userId : number;
  username : string = sessionStorage.getItem('username');
  movieId : number = history.state.data;

  getUserIdByUsername(){ 
    this.userService.getUserByUsername(this.username,"admin","admin").subscribe(
    (response : any) => {
      this.user = response;
      this.userId = this.user.id;
      console.log("L'utente ha il seguente Id:"); 
      console.log(this.userId);
    });
  }

  onSubmit(form : NgForm){
    
    this.dataEntry = form.form.value;
    console.log(form)
    console.log(this.dataEntry);

    this.commentsService.addComment(this.userId, this.movieId, this.dataEntry).subscribe(
      response => {
        console.log(response);
        this.router.navigate(["/dashboard"]);},
      error => 
        alert(error.error.message)
    )
  }

}
