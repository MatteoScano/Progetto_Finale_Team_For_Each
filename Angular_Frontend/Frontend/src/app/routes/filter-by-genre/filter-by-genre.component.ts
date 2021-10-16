import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MovieData } from '../../models/data.model';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-filter-by-genre',
  templateUrl: './filter-by-genre.component.html',
  styleUrls: ['./filter-by-genre.component.css']
})




export class FilterByGenreComponent implements OnInit {

  constructor(private router : Router, private dataService : DataService) { }

  showResult = false;
  genre:string;
  movies: MovieData [];
  genresArray = ['Horror','Adventure','Comedy','Fantasy','Crime','Romance'];

  ngOnInit(): void {
    this.getEntries();
  }

  consoleString(){
    console.log(this.genre);
  }

  goToDetails(id){
    this.router.navigateByUrl('/details/' + id);
  }

  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.movies = response;
    })
  }

  filterBy(form: NgForm) {
    this.genre = form.form.value.genre;
    if (this.genre) {
      this.showResult = true;
    }
  }
}
