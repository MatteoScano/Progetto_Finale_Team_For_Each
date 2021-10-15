import { Component, OnInit, VERSION } from '@angular/core';
import { MovieRatingInterface, DataInterface } from '../../models/movie-ratings.model';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {


  name = "Angular " + VERSION.major;

  starRating : DataInterface; // StarRating contiene il valore relativa alla stella che l´ utente clicca
  currentRate = 0;

  constructor() { }

  ngOnInit() {
this.viewRatingOnStar();
  }

  viewRatingOnStar(){
    console.log(this.starRating)
    console.log(this.currentRate)
  }


}
