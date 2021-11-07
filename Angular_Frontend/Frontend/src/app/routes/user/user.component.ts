import { SecurityService } from './../../services/security/security.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserDataInterface } from './../../models/user.model';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //Prende lo username della sessione, nell'html visualizza la pagina solo se l'utente è amministratore
  usernameIsAdmin = sessionStorage.getItem('username');

  users: UserDataInterface[];
  //per il salvataggio di tutti gli utenti
  userFound: any = [];               //per il salvataggio dell'utente trovato
  username: string;              //Username passato nel form
  userId: number;                //Contiene l'id dell'utente
  userFoundById: any = [];        //per il salvataggio dell'utente trovato per Id

  //VARIABILI PER L'UPDATE USER
  letsUpdate = false
  newUser: UserDataInterface;
  passwordCryptata: string;


  //variabili per il controllo password "uguale"
  password: string;
  confirmPassword: string;
  passwordOk = true;

  visualizzaBottoniUsername = false;
  visualizzaBottoniId = false;

  constructor(private userService: LoginService, private router: Router, private dataService: DataService, private securityService: SecurityService) { }

  ngOnInit(): void {
    this.getUsersList();  //Preleva in la lista degli utenti dal database
  }

  //Metodo che aggiorna la pagina
  reloadPage() {
    window.location.reload();
  }

  isAdmin(){

  }

  //Visualizza tutti gli utenti
  getUsersList() {
    this.userService.getUsers().subscribe(
      response => {
        this.users = response;
        console.log("Username utente:",this.usernameIsAdmin);
      },
      error => console.log(error)
    )
  }

  //Visualizza l'utente con lo username passato
  getUserByUsername(form: NgForm) { //funziona
    this.username = form.form.value.username;
    this.userService.getUserByUsername(this.username).subscribe(
      (response: any) => {
        this.userFound = response;
      });
    this.visualizzaBottoniUsername = true;
  }
  //visualizza l'utente con l'id passato
  getUserById(form: NgForm) {  //BETA, ancora non funzionante (da rivedere metodo nel backend-springboot)
    this.userId = form.form.value.userId;
    console.log("dato inserito:" + this.userId);
    this.userService.getUsersById(this.userId).subscribe(
      (response: any) => {
        this.userFoundById = response;
      });
    this.visualizzaBottoniId = true;
  }

  //Cancella l'utente con l'id passato
  deleteUserById(form: NgForm) {
    this.userId = form.form.value.userId;
    console.log("dato inserito:" + this.userId);
    this.userService.deleteUser(this.userId).subscribe(
      (response: any) => {
        this.userFoundById = response;
        this.router.navigate(['/users']);
      });
  }

  //Al click visualizza il form di inserimento dati utente
  goToUpdate() {
    this.letsUpdate = true
  }

  //verifica se le password inserite dall'utente sono uguali
  checkPassword(form: NgForm): boolean {
    this.password = form.form.value.password;
    this.confirmPassword = form.form.value.confirmPassword;
    if (this.password !== this.confirmPassword) {
      return false
    }
    else {
      this.passwordCryptata = this.password;
      this.password = this.securityService.encrypt(this.passwordCryptata);  //crypting password
      return true
    }
  }

  //Aggiorna i dati dell'utente
  updateUser(form: NgForm, formId: NgForm): void {
    let passMatched = this.checkPassword(form);

    if (passMatched) {
      form.form.value.password = this.password;
      this.userId = formId.form.value.userId;  //NON PASSA L'ID DEL VECCHIO USER
      this.newUser = form.form.value;
      this.newUser.enabled = 1;
      this.userService.updateUser(this.userId, this.newUser).subscribe(results => {
        console.log("Password valida", results);
      },
        error => {
          console.log(error);
        });
      this.reloadPage();
    }
    else { //pass metched
      this.passwordOk = false;
      console.log("password errata, Riprova");
    }
  }

  delete(id) {
    this.userService.deleteUser(id).subscribe(data => {
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

