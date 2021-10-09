import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { MovieData } from './../../models/data.model'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    
  }

  dataEntry : MovieData;

  genres = ['Horror','Adventure','Comedy','Fantasy','Crime','Romance']
  ratedOptions = ['yes', 'no']

  

  onSubmit(form : NgForm){
    this.dataEntry = form.form.value;
    console.log(form)
    console.log(this.dataEntry);

    if(form.form.value.rated==='yes'){
      this.dataEntry.rated=true;
    }else{
      this.dataEntry.rated=false;
    }

    this.dataService.addEntry(this.dataEntry).subscribe(response => {
      console.log(response);
      this.router.navigate(['/dashboard']);
    },
    (err) => {
      //fai qualcosa
    }
    )
  }
}
