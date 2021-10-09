import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MovieData } from 'src/app/models/data.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService, 
    private router : Router) { }

  dataEntry: MovieData;
  id: number;
  ratedOption : string;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry()
    
  }

  fetchEntry(){
    this.dataService.getEntry(this.id).subscribe( (res: any ) => {
      this.dataEntry = res;
      this.ratedOption= this.dataEntry.rated === true ? 'yes' : 'no';
    })
  }

  delete(){
    this.dataService.deleteEntry(this.id)
    .subscribe(data => {
      this.router.navigate(['/dashboard']);
    }, (err) => {
      console.log(err);
      this.router.navigate(['/dashboard']);
    });
    //this.router.navigate(['/dashboard']);

  }
}
