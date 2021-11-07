import { SecurityService } from './../../services/security/security.service';
import { LoginService } from './../../services/login/login.service';
import { Router } from '@angular/router';
import { UserDataInterface } from './../../models/user.model';
import { NgForm } from '@angular/forms';
import { RegistrationService } from './../../services/registration/registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newUser: UserDataInterface;
  users: UserDataInterface[]; //utti gli utenti
  username: string;

  usernameOk = true;
  usernameExist = true;
  usernameAlreadyExist = false;

  //variabile verifica mail
  emailExist = true;
  emailAlreadyExist = false;

  found: UserDataInterface[];
  userFound: UserDataInterface[];
  //variabili per il controllo password "uguale"
  password: string;
  confirmPassword: string;
  passwordOk = true;

  //controllo email valida
  email: string;
  emailOk = true;

  //ccontrollo spunta termini e condizioni
  terms: string;
  termsOk = true;
  isChecked = false;
  getUserFlag = false;

  passwordCryptata: string; //contiente la password inserita dall'utente ma cryptata

  constructor(private registrationService: RegistrationService, private router: Router, private userService: LoginService, private securityService: SecurityService) { }

  ngOnInit(): void {
    this.getUsersList();
  }
  //Visualizza tutti gli utenti
  getUsersList() {
    this.userService.getUsers().subscribe(
      response => {
        this.users = response;
        this.getUserFlag = true;
      },
      error => console.log(error)
    )
  }
  //metodo di verifica click checkbox termini e condizioni
  click(ev) {
    console.log(ev.target.defaultValue);
    if (ev.target.defaultValue == "b") {
      this.isChecked = true;
      console.log("Is Checked: ", this.isChecked)
    }
    else {
      console.log("non è entrato nell'IF")
    }
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
  //verifica se l'email inserita è in un formato valido
  checkEmail(form: NgForm): boolean {

    this.email = form.form.value.email;
    const at = "@";
    const dotNet = ".";
    if (this.email.includes(at) && this.email.includes(dotNet)) {
      console.log("Email valida! Contains: '@' and '.'");
      return true;
    }
    else {
      console.log("Email non valida");
      return false;
    } // true
  }
  //Controllo sullo username doppio
  checkUsername(form: NgForm): any { //funziona
    if (this.getUserFlag) {
      this.username = form.form.value.username;
      for (let i = 0; i < this.users.length; i++) {

        if (this.username === this.users[i].username) {
          this.usernameAlreadyExist = true;
        }
      }
    }
  }
  //controlla se nel db è già presente l'email
  checkMailExist(form: NgForm): any { //funziona
    if (this.getUserFlag) {
      this.email = form.form.value.email;
      for (let i = 0; i < this.users.length; i++) {

        if (this.email === this.users[i].email) {
          console.log("this.users[i].email ", this.users[i].email);
          this.emailAlreadyExist = true;
        }
      }
    }
  }

  //Crea un nuovo utente in base ai dati inseriti in input
  createUser(form: NgForm): void {
    this.usernameExist = true;
    let passMatched = this.checkPassword(form); //controllo password matching
    let emailChecked = this.checkEmail(form);   //controllo email

    this.checkUsername(form);                   //controlla se username è esistente
    this.checkMailExist(form);                  //controlla se l'email è già presente

    if (this.isChecked) { //se i termini e le condizioni sono spuntate(accettate)
      this.usernameExist = true;
      if (emailChecked) {  //se l'email è controllata
        if (this.emailAlreadyExist == false) {
          if (this.usernameAlreadyExist == false) {
                this.usernameExist = true;

            if (this.username != "admin" && this.username != "Admin") {    //se lo username è controllato

              if (passMatched) {  //se le password inserite corrispondono
                this.newUser = form.form.value;
                this.newUser.enabled = 1;
                form.form.value.password = this.password;
                this.registrationService.addUser(this.newUser).subscribe(results => {
                  console.log("Password valida", results);
                },
                  error => {
                    console.log(error);
                  });
                this.router.navigate(['/login']);
              }
              else { //pass metched
                this.emailOk = true;
                this.passwordOk = false;
                this.usernameOk = true;
                this.termsOk = true;
                this.usernameExist = true;
                this.usernameAlreadyExist = false;
                console.log("password errata, Riprova");
              }

            } else {  //username admin
              this.emailOk = true;
              this.termsOk = true;
              this.usernameOk = false;
              this.usernameExist = true;
              console.log("lo username non puo contenere il termine 'admin'")
            }
          }
          else {
            this.termsOk = true;
            this.usernameExist = false;
            this.emailOk = true;
            this.usernameAlreadyExist = false;
            console.log("  this.usernameExist=false", this.usernameExist);

          }
        } else {
          this.termsOk = true;
          this.emailAlreadyExist = false;
          console.log("EMAIL esistente");
        }
      }
      else {
        this.termsOk = true;
        this.emailOk = false;
        this.usernameExist = true;
        console.log("Email Errata, Riprova!");
      }
    } else {
      this.termsOk = false;
      console.log("Devi accettare i termini e le condizioni");
    }
  }
}


