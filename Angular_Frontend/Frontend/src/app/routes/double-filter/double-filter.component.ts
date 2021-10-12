import { NgForm } from '@angular/forms';
import { MovieData } from './../../models/data.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-double-filter',
  templateUrl: './double-filter.component.html',
  styleUrls: ['./double-filter.component.css']
})
export class DoubleFilterComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getEntries();
  }

  arrayGenres = ['Horror','Adventure','Comedy','Fantasy','Crime','Romance'];
  showResult = false;
  movieData : MovieData[];  //tutti i dati inseriti fino adesso

  genre : string;
  cast : string;

  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.movieData = response;
    })
  }

  filterBy(form : NgForm){
    this.genre = form.form.value.genre;
    this.cast = form.form.value.cast;
    if(this.genre && this.cast) {
        this.showResult=true;
    }
  }

}
