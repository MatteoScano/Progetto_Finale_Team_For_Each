import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MovieData } from '../../models/data.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sort-by-date',
  templateUrl: './sort-by-date.component.html',
  styleUrls: ['./sort-by-date.component.css']
})
export class SortByDateComponent implements OnInit {

  constructor(private dataService: DataService) { }

  sortOptions = ["releaseDate", "evaluation"];

  movies : MovieData[];
  optionSelected: string;
  moviesOrdered : MovieData[];

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.movies = response;
    })
  }

  sortBy(form: NgForm){
    this.optionSelected = form.form.value.optionSelected;
    console.log(form, this.movies, this.optionSelected);
    let sorting = this.optionSelected;
    if(sorting=="evaluation"){
      this.moviesOrdered = this.movies.sort(function(a,b) {
        return a[sorting] - b[sorting];
      })
    
    }
    else if(sorting=="releaseDate"){
      this.moviesOrdered = this.movies.sort(function(a,b) {
        let aD= new Date(a['releaseDate']);
        let bD = new Date(b['releaseDate']);
        
        return aD.getTime() - bD.getTime();
      })
    }
     
    
  }

}
