import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {


  name = "Angular " + VERSION.major;

  starRating = 0; // StarRating contiene il valore relativa alla stella che l´ utente clicca
  currentRate = 3.14;

  constructor() { }

  ngOnInit() {
  }

}
