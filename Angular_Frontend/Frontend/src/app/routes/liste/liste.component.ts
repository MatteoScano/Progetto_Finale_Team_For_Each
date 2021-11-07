import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { MovieData } from '../../models/data.model';
import { LoginService } from '../../services/login/login.service';
import { NgForm } from '@angular/forms';
import { ListFilteredByUserIdPipe } from 'src/app/pipes/listFilteredByUserId/listFilteredByUserId.pipe';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  username : string = sessionStorage.getItem('username');
  userId : number;
  user : any;
  casa: number;
  basicImageUrl: string = "https://image.tmdb.org/t/p/w92"

  constructor(private dataService: DataService, private router : Router, private userService: LoginService) { }

  ngOnInit(): void {
    this.getEntries();
    this.getUserIdByUsername()
  }

  public movies: MovieData [];
  moviesDataLoader=false;

  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.movies = response;
      this.moviesDataLoader=true;
      console.log(this.userId )

    })
  }

  goToDetails(id){
    this.router.navigateByUrl('/movieApiDetails/' + id);
    console.log("L'utente ha", id);
  }

  getUserIdByUsername(){
    this.userService.getUserByUsername(this.username).subscribe(
    (response : any) => {
      this.user = response;
      this.userId = this.user.id;
      console.log("L'utente ha il seguente Id:");
      console.log(this.userId);
    });
  }


  delete(id){
      this.dataService.deleteEntry(id).subscribe(data => {
              console.log("prova",id);
              //this.router.navigate(['/userList']);
            },
              (err) =>
              {
                console.log(err);
              });
            }


 exit()
 {
     window.location.reload();
 }

}
