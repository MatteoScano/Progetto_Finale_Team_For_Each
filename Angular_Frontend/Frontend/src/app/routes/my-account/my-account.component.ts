import { UserDataInterface } from './../../models/user.model';
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

  user : UserDataInterface;
  userId : number;
  isAdmin=false;  //verifica se l'utente è admin

  userFoundById:UserDataInterface[]; //contiene l'utente trovato tramite id

  deleteAccountYes=false;

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
    this.userService.getUserByUsername(this.username).subscribe(
    (response : any) => {
      this.user = response;
      this.userId = this.user.id;
    });
  }

   //Cancella l'utente con l'id passato
   deleteUserById(){
    console.log("dato inserito:"+this.userId);
  this.userService.deleteUser(this.userId).subscribe(
    (response : any) => {
      this.userFoundById = response;
        console.log("L'utente ha i seguenti dati:");  //test
        console.log(this.userFoundById);
    });
  }
//rimanda alla pagina commenti dell'utente
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
   //Rotta alla pagina per la moderazione dei commenti
  goToCommentsManagement(){
    this.router.navigate(['/comments']);
  }
//attiva una flag per visualizzare un alert di sicurezza all'utente
  goToDelete(){
    this.deleteAccountYes=true;
  }
}
