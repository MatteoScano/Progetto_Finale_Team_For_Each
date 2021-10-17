import { CommentsService } from 'src/app/services/comments.service';
import { CommentsInterface } from 'src/app/models/comments.model';
import { MovieData } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments-filtered-by-movies-id',
  templateUrl: './comments-filtered-by-movies-id.component.html',
  styleUrls: ['./comments-filtered-by-movies-id.component.css']
})
export class CommentsFilteredByMoviesIdComponent implements OnInit {
  
  constructor(private router : Router, private commentsService : CommentsService, private dataService: DataService) { }

  /*per mostrare i commenti relativi solo al film visualizzato, esporto l'id da details e lo importo
  qui come movieId, che poi nell'html viene usato con la pipe per filtrare i risultati*/
  movieId : number = history.state.data;
  comments : CommentsInterface [];
  movies : MovieData [];

  ngOnInit(): void {
    this.getEntries();
    this.getMovies();
  }

  getEntries(){
    this.commentsService.getComments().subscribe(
      response => {
        //se è andato tutto bene, allora:
        console.log("ho ottenuto i dati!");
        this.comments = response;
        console.log(this.comments);
      },
      error => console.log(error)
    )
  }

  getMovies(){
    this.dataService.getData().subscribe( (response : any) => {
      this.movies = response;
      console.log(this.movies);
    })
  }

  transformIdInMovie(id){
    return this.movies[id].name;
  }

  
}
