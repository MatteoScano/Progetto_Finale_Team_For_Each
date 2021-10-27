import { Router } from '@angular/router';
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
  isAdmin=false;
  constructor(private userService:LoginService, private router: Router) { }

  ngOnInit(): void {
    this.getUserIdByUsername();
    this.getUserAdmin(this.username);
  }
   //Metodo che aggiorna la pagina
   reloadPage() {
    window.location.reload();
  }
//prende lo userId con lo username
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

  goToUserComments(){
    let user = sessionStorage.getItem('username');
    this.router.navigate(['comments/user/'+ user]);
  }

  //verifica se lo user della sessione è admin
  getUserAdmin(user:string){
    if(user=="admin" || user=="Admin"){
      this.isAdmin=true;
    }
    console.log("isNotadmin: ", this.isAdmin);
  }
  //Rotta alla pagina per la gestione degli utenti
  goToUsersManagement(){
    this.router.navigate(['/users']);
  }
}
