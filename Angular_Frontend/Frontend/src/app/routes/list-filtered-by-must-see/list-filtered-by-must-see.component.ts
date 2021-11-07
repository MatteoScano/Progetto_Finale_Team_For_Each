import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { MovieData } from '../../models/data.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-list-filtered-by-must-see',
  templateUrl: './list-filtered-by-must-see.component.html',
  styleUrls: ['./list-filtered-by-must-see.component.css']
})
export class ListFilteredByMustSeeComponent implements OnInit {

  username: string = sessionStorage.getItem('username');
  userId: number;
  user: any;
  basicImageUrl: string = "https://image.tmdb.org/t/p/w92";

  constructor(private dataService: DataService, private router: Router, private userService: LoginService) { }

  ngOnInit(): void {
    this.getEntries();
    this.getUserIdByUsername()
  }

  public movies: MovieData[];
  moviesDataLoader = false;

  getEntries() {
    this.dataService.getData().subscribe((response: any) => {
      this.movies = response;
      this.moviesDataLoader = true;
      console.log("this.userId ", this.userId)

    })
  }

  goToDetails(id) {
    this.router.navigateByUrl('/movieApiDetails/' + id);
  }

  getUserIdByUsername() {
    this.userService.getUserByUsername(this.username).subscribe(
      (response: any) => {
        this.user = response;
        console.log(this.user);
        this.userId = this.user.id;
        console.log("L'utente ha il seguente Id:", this.userId);
        console.log(this.userId);
      });
  }
  delete(id) {
    this.dataService.deleteEntry(id).subscribe(data => {
      console.log("prova", id);
      this.router.navigate(['/userList']);
    },
      (err) => {
        console.log(err);
      });
  }

  exit() {
    window.location.reload();
  }
}
