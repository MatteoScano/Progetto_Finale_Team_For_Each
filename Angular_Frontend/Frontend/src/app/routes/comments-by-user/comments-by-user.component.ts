import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsInterface } from 'src/app/models/comments.model';
import { CommentsService } from 'src/app/services/comments.service';
import { LoginService } from '../../services/login/login.service';
import { UserDataInterface } from './../../models/user.model';
import { MovieCommentInterface } from '../../models/movieComment';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';
import { MoviesApiService } from '../../services/moviesapi.service';

@Component({
  selector: 'app-comments-by-user',
  templateUrl: './comments-by-user.component.html',
  styleUrls: ['./comments-by-user.component.css']
})

export class CommentsByUserComponent implements OnInit, AfterContentChecked {

  comments: CommentsInterface[];
  movies: MovieApiInterface[];
  movie: ResultInterface;
  movieComments : MovieCommentInterface[] = [];
  username: string = sessionStorage.getItem('username');
  userId: number;
  user: any;
  changeDetected: boolean = false;

  constructor(private commentService: CommentsService, private userService: LoginService,
    private router: Router, private movieService: MoviesApiService) { }

  ngOnInit(): void {
    this.getUserIdByUsername();
  }

  ngAfterContentChecked(): void {
    if (this.userId !== undefined && this.changeDetected === false) {
      this.changeDetected = true;
      this.getUserComments();
      console.log("ho ottenuto i dati:", this.comments);
    }
  }

  getUserIdByUsername() {
    this.userService.getUserByUsername(this.username).subscribe(
      (response: any) => {
        this.user = response;
        this.userId = this.user.id;
        console.log("L'utente ha il seguente Id:", this.userId);
      });
  }

  getUserComments() {
    this.commentService.getUserComments(this.userId).subscribe(
      response => {
        this.comments = response;
        console.log("ho ottenuto i commenti:", this.comments);


        for (let i=0; i<this.comments.length; i++){
          let movieComment : MovieCommentInterface = {
              title:"title",
              comment:"comment",
              movieId: this.comments[i].movieId,
              commentId: this.comments[i].id
          };
          this.movieService.getMovieById(this.comments[i].movieId).subscribe((res: any) => {
            this.movie = res;
            console.log('titolo film:', this.movie.title);
            movieComment.title = this.movie.title;
          });
          movieComment.comment = this.comments[i].body;
          this.movieComments.push(movieComment);
        }
        console.log("movie comments:", this.movieComments);
      },
      error => console.log(error)
    )
  }

  deleteCommentButton(id) {
    this.commentService.deleteComment(id)
      .subscribe(data => {
      }, (err) => {
        console.log(err);
      });
  }

  goToDetails(id) {
    this.router.navigateByUrl('/movieApiDetails/' + id);
  }

  //Metodo che aggiorna la pagina
  reloadPage() {
    window.location.reload();
  }
}
