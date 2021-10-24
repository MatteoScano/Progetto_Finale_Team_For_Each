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

  newUser : UserDataInterface;

  username:string;
  usernameOk=true;
  usernameExist=true;

  found:any=[];
  userFound:any=[];
  //variabili per il controllo password "uguale"
  password:string;
  confirmPassword:string;
  passwordOk=true;

   //controllo email valida
   email:string;
   emailOk=true;

   //ccontrollo spunta termini e condizioni
   terms:string;
   termsOk=true;

  constructor(private registrationService : RegistrationService, private router:Router, private userService: LoginService) { }

  ngOnInit(): void {
  }

  //verifica se le password inserite dall'utente sono uguali
  checkPassword(form : NgForm):boolean{
    this.password=form.form.value.password;
    this.confirmPassword=form.form.value.confirmPassword;
    if(this.password !== this.confirmPassword){
      return false
      }
    else{
      return true
    }
  }
  //verifica se l'email inserita è in un formato valido
  checkEmail(form : NgForm):boolean{
    this.email=form.form.value.email;
    const at = "@";
    const dotNet = ".";
    if(this.email.includes(at) && this.email.includes(dotNet)){
      console.log("Email valida! Contains: '@' and '.'");
      return true;
    }
      else{
        console.log("Email non valida");
        return false;
    } // true
  }
  //controllo spunta termini e condizioni
  checkTerms(form : NgForm):boolean{
    this.terms=form.form.value.terms;
    console.log("terms dentro il check", this.terms)
    if(this.terms){
      this.termsOk=true;
      return true;
    }
    else{
      this.termsOk=false;
      return false;
    }
  }

     //Visualizza l'utente con lo username passato
   getUserByUsername(form :NgForm):any{ //funziona
    this.username = form.form.value.username;
    this.userService.getUserByUsername(this.username,"admin","admin").subscribe(
    (response : any) => {
      this.userFound = response;
        console.log("L'utente ha i seguenti dati:");  //test
        console.log(this.userFound);
        return this.userFound;
    });

  }

  //Crea un nuovo utente in base ai dati inseriti in input
  createUser(form : NgForm): void {
    let passMatched = this.checkPassword(form);
    let emailChecked = this.checkEmail(form);

    this.username = form.form.value.username;
    this.userService.getUserByUsername(this.username,"admin","admin").subscribe(
    (response : any) => {
      this.userFound = response;
        console.log("USER FOUND");  //test
        console.log(this.userFound);
    });

   if(emailChecked){

     if(this.username!= "admin" && this.username!= "Admin"){

       if(this.userFound==null){

        if(passMatched){

          this.newUser = form.form.value;
          this.newUser.enabled=1;
          this.registrationService.addUser(this.newUser,"admin","admin").subscribe( results => {
            console.log("Password valida",results);
            console.log("terms",this.terms);              //test
            console.log("terms boolean ok",this.termsOk); //test
            },
            error=>{
              console.log(error);
            });
            this.router.navigate(['/login']);
        }
        else{ //pass metched
          this.emailOk=true;
          this.passwordOk=false;
          this.usernameOk=true;
          this.usernameExist=true;
          console.log("password errata, Riprova");
        }

      }else{  //username gia in uso
        this.emailOk=true;
        this.usernameExist=false
        console.log("Username gia' in uso. Riprova!")
      }

    }else{  //username admin
      this.emailOk=true;
      this.usernameOk=false;
      console.log("lo username non puo contenere il termine 'admin'")
    }
   }
   else{
    this.emailOk=false;
    console.log("Email Errata, Riprova!");
   }
}


}
