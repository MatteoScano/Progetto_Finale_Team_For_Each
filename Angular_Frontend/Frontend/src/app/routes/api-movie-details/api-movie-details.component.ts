import { ResultInterface } from './../../models/apiMovie.model';
import { MoviesApiService } from './../../services/moviesapi.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-movie-details',
  templateUrl: './api-movie-details.component.html',
  styleUrls: ['./api-movie-details.component.css']
})
export class ApiMovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieApiService: MoviesApiService) { }

  movieDetailsEntry: ResultInterface;
  id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getMovieApiDetails();

  }

  getMovieApiDetails(){
    this.movieApiService.getMovieById(this.id).subscribe( (res: any ) => {
      this.movieDetailsEntry = res;
      console.log(this.movieDetailsEntry);
      console.log("Id del film scelto");
      console.log(this.id);
    })
  }

}
