import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  username : string = sessionStorage.getItem('username');
  user : any;
  userId : number;
  constructor(private userService:LoginService) { }

  ngOnInit(): void {
    this.getUserIdByUsername();
  }

  getUserIdByUsername(){
    this.userService.getUserByUsername(this.username,"admin","admin").subscribe(
    (response : any) => {
      this.user = response;
      this.userId = this.user.id;
      console.log("L'utente ha il seguente Id:");
      console.log(this.userId);
      console.log(", e il seguente Username:");
      console.log(this.username);
    });
  }

}
