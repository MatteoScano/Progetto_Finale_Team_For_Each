import { MovieData } from 'src/app/models/data.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {

  sortOptions = ["releaseDate", "reviews","evaluation"];
  showResult = false;
  movieData : MovieData[];
  orderedItems : MovieData[];
  sortOption : string;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getEntries();
  }

  sortBy(form: NgForm){
    this.sortOption = form.form.value.sortOption;
    this.showResult=true;

    let sorting = this.sortOption;
    if(sorting=="evaluation" || sorting=="reviews"){
      this.orderedItems = this.movieData.sort(function(a,b) {
        return -(a[sorting] - b[sorting]);
      })

    }
    else if(sorting=="releaseDate"){
      this.orderedItems = this.movieData.sort(function(a,b) {
        let aD= new Date(a['releaseDate']);
        let bD = new Date(b['releaseDate']);

        return aD.getTime() - bD.getTime();
      })
    }
  }

  getEntries() {
    this.dataService.getData().subscribe((response: any) => {
    this.movieData = response;
  })
}

}
