import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MovieData } from 'src/app/models/data.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService, private router : Router) { }

  dataEntry: MovieData;

  genres = ['Horror','Adventure','Comedy','Fantasy','Crime','Romance'];
  ratedOptions = ['yes', 'no'];
  ratedOptionSelected: string;
  seenOptionSelected: string;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetchEntry(id);
  }

  fetchEntry(id){
    this.dataService.getEntry(id).subscribe( (res: any ) => {
      this.dataEntry = res;

      console.log(this.dataEntry)
      if(this.dataEntry.rated){
        this.ratedOptionSelected="yes";
      }
      else this.ratedOptionSelected="no";
      if(this.dataEntry.seen){
        this.seenOptionSelected="yes";
      }
      else this.seenOptionSelected="no"
    })

  }

  onSubmit(){
    console.log(this.dataEntry);
    if(this.ratedOptionSelected =='yes'){
     // this.dataEntry.rated=true;
    }else{
     // this.dataEntry.rated=false;
    }
    if(this.seenOptionSelected =='yes'){
      this.dataEntry.seen=true;
    }else{
      this.dataEntry.seen=false;
    }

    this.dataService.editEntry(this.dataEntry)
    .subscribe(response => {
      console.log(response);
      this.router.navigate(['/details', this.dataEntry.id])
    }), err => {
      console.log(err);
    }
    this.router.navigate(['/details', this.dataEntry.id])
  }

}
